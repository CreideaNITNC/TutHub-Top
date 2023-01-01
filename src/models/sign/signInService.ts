export default interface SignInService {
  signIn(
    isMail: boolean,
    id: string,
    password: string
  ): Promise<SignInSuccess | SignInFailure>;
}

export interface SignInSuccess {
  type: "success";
  bearerToken: string;
}

export interface SignInFailure {
  type: "failure";
  reason: string;
}
