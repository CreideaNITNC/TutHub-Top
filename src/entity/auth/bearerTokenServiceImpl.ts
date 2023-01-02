import BearerTokenService from "@/models/auth/bearerTokenService";

export default class BearerTokenServiceImpl implements BearerTokenService {
  public get isAuthenticated(): boolean {
    return this.token !== "";
  }

  public token: string = "";
}
