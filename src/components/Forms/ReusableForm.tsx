import { Formik, Form, Field, ErrorMessage } from "formik";
import { ReusableFormProps } from "../../interfaces/form/interfacesForm";

export const ReusableForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  formTitle,
  submitButtonText,
  errorServer,
}: ReusableFormProps) => {
  return (
    <div
      className=" d-flex justify-content-center align-items-start"
      style={{
        height: "100vh",
      }}
    >
      <div
        className="p-4 mt-5"
        style={{ backgroundColor: "#254551", width: "370px" }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <h1 className="text-center text-white pb-4">{formTitle}</h1>
              {fields.map((field) => (
                <div className="form-group pb-3" key={field.name}>
                  <label htmlFor={field.name} className="text-white">
                    {field.label}
                  </label>
                  <Field
                    type={field.type}
                    name={field.name}
                    className="form-control mt-2 p-1"
                  />
                  <ErrorMessage name={field.name}>
                    {(msg) => (
                      <div className="text-danger" data-test="error-field-form">
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
              ))}
              <button
                type="submit"
                className="btn btn-primary mt-4 p-2"
                disabled={isSubmitting}
                data-test="button-login-submit"
              >
                {submitButtonText}
              </button>
            </Form>
          )}
        </Formik>
        {errorServer && (
          <div className="alert alert-danger mt-4">
            <p data-test="error-server">{errorServer.error}</p>
          </div>
        )}
      </div>
    </div>
  );
};
