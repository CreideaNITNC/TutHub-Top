export default interface BearerTokenService {
  readonly isAuthenticated: boolean;

  token: string;
}
