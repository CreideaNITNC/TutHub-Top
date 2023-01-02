import SignInService from "@/models/sign/signInService";
import SignUpService from "@/models/sign/signUpService";
import DevelopService from "@/service/developService";
import RepositoryListService from "@/models/home/repositoryListService";
import ProductionService from "@/service/productionService";

export default interface Service {
  readonly signInService: SignInService;
  readonly signUpService: SignUpService;
  readonly repositoryListService: RepositoryListService;
}

export function useService(): Service {
  return import.meta.env.DEV ? new DevelopService() : new ProductionService();
}
