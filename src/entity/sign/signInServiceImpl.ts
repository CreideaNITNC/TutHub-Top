import SignInService, {
  SignInFailure,
  SignInSuccess,
} from "@/models/sign/signInService";
import BearerTokenService from "@/models/auth/bearerTokenService";

export default class SignInServiceImpl implements SignInService {
  public constructor(
    private readonly origin: string,
    private readonly bearerTokenService: BearerTokenService
  ) {}

  public readonly signIn = async (
    isMail: boolean,
    id: string,
    password: string
  ): Promise<SignInSuccess | SignInFailure> => {
    const response = await this.sendRequest(isMail, id, password);
    const result = await response.json();

    if (response.status === 200) {
      this.bearerTokenService.token = result.token;
      return { type: "success" };
    } else {
      return { type: "failure", reason: result.reason };
    }
  };

  private readonly sendRequest = async (
    isMail: boolean,
    id: string,
    password: string
  ): Promise<Response> => {
    return isMail
      ? await this.sendMailSignInRequest(id, password)
      : await this.sendNameSignInRequest(id, password);
  };

  private readonly sendMailSignInRequest = async (
    mail: string,
    password: string
  ): Promise<Response> => {
    return await fetch(`${this.origin}/sign/in/mail`, {
      method: "POST",
      body: JSON.stringify({ mail, password }),
      headers: { "Content-Type": "application/json" },
    });
  };

  private readonly sendNameSignInRequest = async (
    name: string,
    password: string
  ): Promise<Response> => {
    return await fetch(`${this.origin}/sign/in/name`, {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });
  };
}
