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
    if (!response.ok) {
      console.error("リポジトリの取得に失敗しました");
      return [];
    }
    const result: LoadResponse = await response.json();
    return result.repositories;
  };

  public readonly create = async (
    name: string,
    title: string
  ): Promise<void> => {
    const response = await fetch(`${this.origin}/top/repository`, {
      method: "POST",
      body: JSON.stringify({ name, title }),
      headers: {
        Authorization: `Bearer ${this.bearerTokenService.token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error("リポジトリの作成に失敗しました");
    }
  };

  public readonly remove = async (name: string): Promise<void> => {
    const response = await fetch(`${this.origin}/top/repository/${name}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${this.bearerTokenService.token}` },
    });
    if (!response.ok) {
      console.error("削除に失敗しました。");
    }
  };
}
