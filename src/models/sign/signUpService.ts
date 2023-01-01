export default interface SignUpService {
  signUp(
    mail: string,
    name: string,
    password: string
  ): Promise<SignUpSuccess | SignUpFailure>;
}

export interface SignUpSuccess {
  type: "success";
  bearerToken: string;
}

export interface SignUpFailure {
  type: "failure";
  reason: string;
}
