import SignInService from "@/models/sign/signInService";
import SignUpService from "@/models/sign/signUpService";
import DevelopService from "@/service/developService";
import RepositoryListService from "@/models/home/repositoryListService";

export default interface Service {
  readonly signInService: SignInService;
  readonly signUpService: SignUpService;
  readonly repositoryListService: RepositoryListService;
}

export function useService(): Service {
  return new DevelopService();
}
