"use client";
import { FormComponents } from "../Forms/Index";
import { useRouter } from "next/navigation";
import { RegisterContext } from "@/app/contexts/RegisterContext";
import { UseRegister } from "@/app/hooks/userRegister";
import { BannerComponents } from "../Banner";
import { useState } from "react";

export default function RegisterComponent() {
  const router = useRouter();
  const {
    email,
    aniversario,
    pais,
    profissao,
    cidade,
    password,
    relacionamento,
    setEmail,
    setAniversario,
    setPais,
    setCidade,
    setPassword,
    setProfissao,
    setRelacionamento,
  } = RegisterContext();
  console.log(
    email,
    aniversario,
    pais,
    profissao,
    cidade,
    password,
    relacionamento,
  );

  const { registerUser } = UseRegister(router);

  const handleRegister: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isFormValid()) {
      e.preventDefault();
      registerUser();
      router.push("/");
    } else {
      setErrorMessage("Por favor, preencha todos os campos.");
    }
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isFormValid = () => {
    return (
      email.trim() !== "" &&
      password.trim() !== "" &&
      aniversario.trim() !== "" &&
      pais.trim() !== "" &&
      profissao.trim() !== "" &&
      cidade.trim() !== "" &&
      relacionamento !== ""
    );
  };

  return (
    <div className="flex h-[82.5vh] w-full items-center justify-center gap-6 p-10">
      <BannerComponents.Root>
        <BannerComponents.Img />
        <BannerComponents.Text />
      </BannerComponents.Root>
      <section>
        <div className="relative flex h-[450px] w-[320px] flex-col items-center gap-4 rounded-2xl bg-dark-30 px-4 py-8">
          <FormComponents.Logo title="Cadastre-se o UOLkut" />
          {/* email */}
          <FormComponents.Input
            type="email"
            name="email"
            placeholder="E-mail"
            inputValue={email}
            setInputValue={(event) => setEmail(event.target.value)}
            required
          />
          {/* password */}
          <FormComponents.Input
            type="password"
            name="password"
            placeholder="Senha"
            inputValue={password}
            setInputValue={(event) => setPassword(event.target.value)}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <FormComponents.Input
              type="text"
              name="data"
              placeholder="Nascimento"
              inputValue={aniversario}
              setInputValue={(event) => setAniversario(event.target.value)}
              required
            />
            <FormComponents.Input
              type="text"
              name="pais"
              placeholder="País"
              inputValue={pais}
              setInputValue={(event) => setPais(event.target.value)}
              required
            />
            <FormComponents.Input
              type="text"
              name="profissao"
              placeholder="Profissão"
              inputValue={profissao}
              setInputValue={(event) => setProfissao(event.target.value)}
              required
            />
            <FormComponents.Input
              type="text"
              name="cidade"
              placeholder="Cidade"
              inputValue={cidade}
              setInputValue={(event) => setCidade(event.target.value)}
              required
            />
            <div className="">
              <select
                name="sexo"
                className="w-full rounded-md bg-input-color px-3 py-2"
                value={relacionamento}
                style={{}}
                onChange={(event) => setRelacionamento(event.target.value)}
                required
              >
                <option value="">Relacionamento</option>
                <option value="opcao1">Solteiro</option>
                <option value="opcao2">Casado</option>
                <option value="opcao3">Divorciado</option>
                <option value="opcao4">Namorando</option>
                <option value="opcao4">Preocupado</option>
              </select>
            </div>
            {errorMessage && (
              <p className="h-0 text-xs text-support-04">{errorMessage}</p>
            )}
          </div>
          <FormComponents.Button
            className="w-full bg-brand-color px-4"
            text="Criar conta"
            onClick={handleRegister}
          />
        </div>
      </section>
    </div>
  );
}
