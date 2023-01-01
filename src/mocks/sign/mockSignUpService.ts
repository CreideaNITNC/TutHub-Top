import SignUpService, {
  SignUpFailure,
  SignUpSuccess,
} from "@/models/sign/signUpService";

export default class MockSignUpService implements SignUpService {
  async signUp(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mail: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    password: string
  ): Promise<SignUpSuccess | SignUpFailure> {
    return {
      type: "failure",
      reason: "その名前はすでに登録されています",
    };
  }
}
