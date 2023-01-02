import Service from "@/service/service";
import RepositoryListService from "@/models/home/repositoryListService";
import SignInService from "@/models/sign/signInService";
import SignUpService from "@/models/sign/signUpService";
import BearerTokenServiceImpl from "@/entity/auth/bearerTokenServiceImpl";
import RepositoryListServiceImpl from "@/entity/home/repositoryListServiceImpl";
import SignInServiceImpl from "@/entity/sign/signInServiceImpl";
import SignUpServiceImpl from "@/entity/sign/signUpServiceImpl";

export default class ProductionService implements Service {
  private readonly origin: string = import.meta.env.VITE_ORIGIN;
  private readonly bearerTokenService = new BearerTokenServiceImpl();
  public get repositoryListService(): RepositoryListService {
    return new RepositoryListServiceImpl(this.origin, this.bearerTokenService);
  }
  public get signInService(): SignInService {
    return new SignInServiceImpl(this.origin, this.bearerTokenService);
  }
  public get signUpService(): SignUpService {
    return new SignUpServiceImpl(this.origin, this.bearerTokenService);
  }
}
