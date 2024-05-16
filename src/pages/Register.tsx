import { useState } from "react";
import { validationSchemaRegister } from "../validations/validationsForms";
import { ReusableForm } from "../components/Forms/ReusableForm";
import { Alert } from "../utils/alert";
import { useNavigate } from "react-router-dom";
import { userQuery } from "../api/requestApi";
import { SpinnerCustom } from "../utils/SpinnerCustom";
import { fieldsFormRegister } from "../api/formApi/formApi";
import {
  RegisterFormValues,
  ServerError,
} from "interfaces/form/interfacesForm";
import { AxiosError } from "axios";

export const Register = () => {
  const navigate = useNavigate();
  const initialValues = { name: "", email: "", password: "" };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ServerError | null>(null);

  const handleSubmit = async (values: RegisterFormValues) => {
    setLoading(true);
    try {
      const response = await userQuery.post("/register", values);
      if (response) {
        Alert("Successfully Registered User", "success");
        navigate("/login");
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
    <>
      <ReusableForm
        initialValues={initialValues}
        validationSchema={validationSchemaRegister}
        onSubmit={handleSubmit}
        fields={fieldsFormRegister}
        formTitle="Register"
        submitButtonText="Registrarse"
        errorServer={error}
      />
    </>
  );
};
