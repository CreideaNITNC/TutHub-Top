import SignInService, {
  SignInFailure,
  SignInSuccess,
} from "@/models/sign/signInService";

export default class MockSignInService implements SignInService {
  async signIn(
    isMail: boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    password: string
  ): Promise<SignInSuccess | SignInFailure> {
    return {
      type: "failure",
      reason: isMail
        ? "メールアドレス、またはパスワードが違います"
        : "名前、またはパスワードが違います",
    };
  }
}
