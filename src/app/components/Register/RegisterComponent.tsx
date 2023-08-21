"use client";
import { FormComponents } from "../Forms/Index";
import { useRouter } from "next/navigation";
import { RegisterContext } from "@/app/contexts/RegisterContext";

export default function RegisterComponent() {
  const router = useRouter();
  const {
    user,
    email,
    aniversario,
    pais,
    estado,
    cidade,
    password,
    passwordConfirm,
    setUser,
    setEmail,
    setAniversario,
    setPais,
    setEstado,
    setCidade,
    setPassword,
    setPasswordConfirm,
  } = RegisterContext();
  console.log(user, email, aniversario, pais, estado, cidade, password);

  const handleRegister: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.push("/RegisterInfos");
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 px-6 py-8 lg:h-[82.5vh]">
      <FormComponents.Logo title="Cadastre-se" />
      {/* nome */}
      <section className="relative flex w-[100%] flex-col items-center gap-4 sm:w-[70%] lg:flex-row">
        <div className="flex w-[100%] flex-col items-center justify-evenly gap-8 rounded-2xl bg-dark-30  px-6 py-10 ">
          <FormComponents.Input
            type="text"
            name="nome"
            placeholder="Nome"
            inputValue={user}
            setInputValue={(event) => setUser(event.target.value)}
          />
          {/* email */}
          <FormComponents.Input
            type="email"
            name="email"
            placeholder="E-mail"
            inputValue={email}
            setInputValue={(event) => setEmail(event.target.value)}
          />
          {/* password */}
          <FormComponents.Input
            type="password"
            name="password"
            placeholder="Senha"
            inputValue={password}
            setInputValue={(event) => setPassword(event.target.value)}
          />
          {/* passwordConfirm */}
          <FormComponents.Input
            type="password"
            name="passwordConfirm"
            placeholder="Confirme a Senha"
            inputValue={passwordConfirm}
            setInputValue={(event) => setPasswordConfirm(event.target.value)}
          />
        </div>
        <div className="flex w-[100%] flex-col items-center justify-evenly gap-8 rounded-2xl bg-dark-30  px-6 py-10">
          {/* aniversario */}
          <FormComponents.Input
            type="date"
            name="aniversario"
            min={"1900-01-01"}
            max={"2023-07-31"}
            inputValue={aniversario}
            setInputValue={(event) => setAniversario(event.target.value)}
          />
          {/* pais*/}
          <FormComponents.Input
            type="text"
            name="pais"
            placeholder="país"
            inputValue={pais}
            setInputValue={(event) => setPais(event.target.value)}
          />

          {/* estado */}
          <FormComponents.Input
            type="text"
            name="estado"
            placeholder="estado"
            inputValue={estado}
            setInputValue={(event) => setEstado(event.target.value)}
          />

          {/* cidade */}
          <FormComponents.Input
            type="text"
            name="cidade"
            placeholder="Cidade"
            inputValue={cidade}
            setInputValue={(event) => setCidade(event.target.value)}
          />
        </div>
      </section>
      {/* btn */}
      <FormComponents.Button
        className="w-max bg-brand-color px-12 py-6"
        text="Cadastrar Conta"
        onClick={handleRegister}
      />
    </div>
  );
}
