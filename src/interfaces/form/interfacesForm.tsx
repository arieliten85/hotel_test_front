/* eslint-disable @typescript-eslint/no-explicit-any */

//FORM DEFAUL
export interface FormField {
  name: string;
  type: string;
  label: string;
}

export interface ReusableFormProps {
  initialValues: object;
  validationSchema: any;
  onSubmit: (e: any, values: any) => void;
  fields: FormField[];
  formTitle: string;
  submitButtonText: string;
  errorServer?: ServerError | null;
}

//REGSTER
export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

//LOGIN
export interface LoginFormValues {
  email: string;
  password: string;
}

//ERRORS SERVER
export interface ServerError {
  error: string;
}
