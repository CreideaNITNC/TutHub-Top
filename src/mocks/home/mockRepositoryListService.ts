import RepositoryListService from "@/models/home/repositoryListService";
import RepositoryOverview from "@/components/repository/types/repositoryOverview";

export default class MockRepositoryListService
  implements RepositoryListService
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async load(): Promise<readonly RepositoryOverview[]> {
    return [
      {
        name: "Server-Side-Swift-Vapor",
        title: "Server-Side Swift Vapor",
        webURL: "https://apple.com",
        remoteURL: "swift",
      },
      {
        name: "PHP-Laravel",
        title: "PHP Laravel",
        webURL: "https://apple.com",
        remoteURL: "php",
      },
      {
        name: "Java-Spark",
        title: "Java Spark",
        webURL: "https://apple.com",
        remoteURL: "java",
      },
      {
        name: "Deno-TypeScript-Fresh",
        title: "Deno TypeScript Fresh",
        webURL: "https://apple.com",
        remoteURL: "ts",
      },
    ];
  }

  async remove(name: string): Promise<void> {
    console.log(`repository remove ${name}`);
  }
}
