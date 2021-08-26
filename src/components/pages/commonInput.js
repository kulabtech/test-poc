import React, { FC } from "react";
import { ErrorMessage } from "formik";
import { Field, useFormikContext } from "formik";

export const Input = ({
  label,
  id,
  value,
  name = "name",
  placeholder,
  type = "text",
  endAdornment,
}) => {
  const { errors, touched } = useFormikContext();
  const isError = (name) => {
    return (
      Object.keys(errors).includes(name) && Object.keys(touched).includes(name)
    );
  };
  if (type === "password") {
    return (
      <>
        <div className="form-group">
          <label>{label}</label>
          <Field
            InputLabelProps={{
              shrink: true,
            }}
            className="form-control"
            fullWidth
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            type={type}
            //   as={PasswordField}
          />
          <ErrorMessage
            name={name || ""}
            style={{ color: "red" }}
            component="div"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="form-group">
          <label>{label}</label>
          <Field
            InputLabelProps={{
              shrink: true,
            }}
            className="form-control"
            fullWidth
            error={isError(name)}
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            type={type}
            InputProps={{
              endAdornment: <p position="end">{endAdornment}</p>,
            }}
          />
          <ErrorMessage
          data-testid={'validation-error'}
            name={name || ""}
            style={{ color: "red" }}
            component="div"
          />
        </div>
      </>
    );
  }
};
