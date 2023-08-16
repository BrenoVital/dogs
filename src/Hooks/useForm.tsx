import { useState } from "react";

const types = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
    message:
      "A senha precisa ter 1 caracter maiúsculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres",
  },
};

type ValidationType = keyof typeof types | false;

export default function useForm(type: ValidationType) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (value: any) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) validate(event.target.value);
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
