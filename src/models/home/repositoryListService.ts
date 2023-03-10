import RepositoryOverview from "@/components/repository/types/repositoryOverview";

export default interface RepositoryListService {
  /**
   * リポジトリ一覧を取得する
   */
  load(): Promise<readonly RepositoryOverview[]>;

  create(name: string, title: string): Promise<void>;

  /**
   * リポジトリを削除する
   * @param name 削除するリポジトリ名
   */
  remove(name: string): Promise<void>;
}
