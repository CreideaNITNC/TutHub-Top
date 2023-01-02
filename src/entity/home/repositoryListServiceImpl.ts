import RepositoryListService from "@/models/home/repositoryListService";
import RepositoryOverview from "@/components/repository/types/repositoryOverview";
import BearerTokenService from "@/models/auth/bearerTokenService";

interface LoadResponse {
  readonly repositories: readonly RepositoryOverview[];
}

export default class RepositoryListServiceImpl
  implements RepositoryListService
{
  public constructor(
    private readonly origin: string,
    private readonly bearerTokenService: BearerTokenService
  ) {}

  public readonly load = async (): Promise<readonly RepositoryOverview[]> => {
    const response = await fetch(`${this.origin}/top/repository`, {
      headers: { Authorization: `Bearer ${this.bearerTokenService.token}` },
    });
    const result: LoadResponse = await response.json();
    return result.repositories;
  };

  public readonly remove = async (name: string): Promise<void> => {
    await fetch(`${this.origin}/top/repository/${name}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${this.bearerTokenService.token}` },
    });
  };
}
