import Service from "@/service/service";
import SignInService from "@/models/sign/signInService";
import SignUpService from "@/models/sign/signUpService";
import MockSignInService from "@/mocks/sign/mockSignInService";
import MockSignUpService from "@/mocks/sign/mockSignUpService";

export default class DevelopService implements Service {
  readonly signInService: SignInService = new MockSignInService();
  readonly signUpService: SignUpService = new MockSignUpService();
}
