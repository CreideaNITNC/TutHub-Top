import SignUpService, {
  SignUpFailure,
  SignUpSuccess,
} from "@/models/sign/signUpService";
import BearerTokenService from "@/models/auth/bearerTokenService";

export default class SignUpServiceImpl implements SignUpService {
  public constructor(
    private readonly origin: string,
    private readonly bearerTokenService: BearerTokenService
  ) {}

  public readonly signUp = async (
    mail: string,
    name: string,
    password: string
  ): Promise<SignUpSuccess | SignUpFailure> => {
    const response = await this.sendRequest(mail, name, password);
    const result = await response.json();
    if (response.status === 200) {
      this.bearerTokenService.token = result.token;
      return { type: "success" };
    } else {
      return { type: "failure", reason: result.reason };
    }
  };

  private readonly sendRequest = async (
    mail: string,
    name: string,
    password: string
  ): Promise<Response> => {
    return await fetch(`${this.origin}/sign/up`, {
      method: "POST",
      body: JSON.stringify({ mail, name, password }),
      headers: { "Content-Type": "application/json" },
    });
  };
}
