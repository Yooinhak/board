export interface IForm {
  children: JSX.Element | JSX.Element[];
  form: any;
  onSubmit?: () => void;
  onError?: () => void;
  hasDefaultMargin?: boolean;
}
