import { validationSchemaLogin } from "../validations/validationsForms";
import { ReusableForm } from "../components/Forms/ReusableForm";
import { useState } from "react";
import { Alert } from "../utils/alert";
import { SpinnerCustom } from "../utils/SpinnerCustom";
import { useNavigate } from "react-router-dom";
import { userQuery } from "../api/requestApi";
import {
  LoginFormValues,
  ServerError,
} from "../interfaces/form/interfacesForm";
import { fieldsFormLogin } from "../api/formApi/formApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userLogin";
import { AxiosError } from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const initialValues: LoginFormValues = { email: "", password: "" };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ServerError | null>(null);

  const dispatch = useDispatch();

  const handleSubmit = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      const response = await userQuery.post("/login", values);
      if (response.status === 200) {
        Alert("Successfully login", "success");
        dispatch(setUser(response.data));
        navigate("/");
      } else {
        Alert("Login failed. Please try again later.", "error");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if ((error as AxiosError).response) {
          const axiosError = error as AxiosError;
          setError(axiosError.response?.data as ServerError);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <SpinnerCustom />;
  }
  return (
    <div>
      <ReusableForm
        initialValues={initialValues}
        validationSchema={validationSchemaLogin}
        onSubmit={handleSubmit}
        fields={fieldsFormLogin}
        formTitle="Login"
        submitButtonText="Iniciar sesión"
        errorServer={error}
      />
    </div>
  );
};
