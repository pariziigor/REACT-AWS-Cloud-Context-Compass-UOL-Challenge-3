import { useState } from "react";
import { RegisterContext } from "../contexts/RegisterContext";

export function UseRegister(router: any) {
  const {
    email,
    aniversario,
    pais,
    cidade,
    password,
    relacionamento,
    profissao,
  } = RegisterContext();

  const [registrationSuccess, setRegistrationSuccess] = useState<
    string | boolean
  >(false);
  const [registrationError, setRegistrationError] = useState<string | boolean>(
    false,
  );

  const registerUser = async () => {
    const dataToSend = {
      email,
      aniversario,
      pais,
      cidade,
      password,
      relacionamento,
      profissao,
    };

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setRegistrationSuccess("Cadastro efetivado");
      } else {
        setRegistrationError("Falha ao cadrastrar");
      }
    } catch (error) {
      setRegistrationSuccess(false);
      setRegistrationError("Algo estranho aconteceu");
      throw Error;
    }
  };

  return {
    registerUser,
    registrationSuccess,
    registrationError,
  };
}
