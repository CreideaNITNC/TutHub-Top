export default interface SignUpDialogData {
  readonly open: boolean;
  readonly mail: string;
  readonly name: string;
  readonly password: string;
  readonly valid: boolean | null;
  readonly error: string;
}

export const SIGN_UP_DIALOG_DATA_DEFAULT: SignUpDialogData = {
  open: false,
  mail: "",
  name: "",
  password: "",
  valid: false,
  error: "",
};
