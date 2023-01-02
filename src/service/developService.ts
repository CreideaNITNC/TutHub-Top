import Service from "@/service/service";
import SignInService from "@/models/sign/signInService";
import SignUpService from "@/models/sign/signUpService";
import MockSignInService from "@/mocks/sign/mockSignInService";
import MockSignUpService from "@/mocks/sign/mockSignUpService";
import RepositoryListService from "@/models/home/repositoryListService";
import MockRepositoryListService from "@/mocks/home/mockRepositoryListService";

export default class DevelopService implements Service {
  readonly signInService: SignInService = new MockSignInService();
  readonly signUpService: SignUpService = new MockSignUpService();
  readonly repositoryListService: RepositoryListService =
    new MockRepositoryListService();
}
