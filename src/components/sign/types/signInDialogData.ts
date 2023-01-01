export default interface SignInDialogData {
  readonly open: boolean;
  readonly isMail: boolean;
  readonly id: string;
  readonly password: string;
  readonly valid: boolean | null;
  readonly error: string;
}

export const SIGN_IN_DIALOG_DATA_DEFAULT: SignInDialogData = {
  open: false,
  isMail: true,
  id: "",
  password: "",
  valid: false,
  error: "",
};
