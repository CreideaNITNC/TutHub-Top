import SignInService from "@/models/sign/signInService";
import SignUpService from "@/models/sign/signUpService";
import DevelopService from "@/service/developService";

export default interface Service {
  readonly signInService: SignInService;
  readonly signUpService: SignUpService;
}

export function useService(): Service {
  return new DevelopService();
}
