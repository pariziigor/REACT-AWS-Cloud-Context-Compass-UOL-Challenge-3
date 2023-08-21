import { useState } from "react";
import { RegisterContext } from "../contexts/RegisterContext";

export function UseRegister(router: any) {
  const {
    user,
    email,
    aniversario,
    pais,
    estado,
    cidade,
    password,
    passwordConfirm,
    quemSouEu,
    relacionamento,
    filhos,
    bio,
    interessesNoOrkut,
    musicas,
    filmes,
    sexo,
    fumo,
    bebo,
  } = RegisterContext();

  const [registrationSuccess, setRegistrationSuccess] = useState<
    string | boolean
  >(false);
  const [registrationError, setRegistrationError] = useState<string | boolean>(
    false,
  );

  const registerUser = async () => {
    const dataToSend = {
      user,
      email,
      aniversario,
      pais,
      estado,
      cidade,
      password,
      quemSouEu,
      relacionamento,
      filhos,
      bio,
      interessesNoOrkut,
      musicas,
      filmes,
      sexo,
      fumo,
      bebo,
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
