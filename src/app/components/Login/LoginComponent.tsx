"use client";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { FormComponents } from "../Forms/Index";
import { BannerComponents } from "../Banner";
import UserLoginForm from "@/app/hooks/UserLogin";

export default function LoginComponent() {
  const router = useRouter();
  const {
    email,
    password,
    errorMessage,
    handleSetEmail,
    handleSetPassword,
    handleLogin,
  } = UserLoginForm(router);

  const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/register");
  };

  return (
    <div className="flex h-[82.5vh] w-full items-center justify-center gap-6 p-10">
      <BannerComponents.Root>
        <BannerComponents.Img />
        <BannerComponents.Text />
      </BannerComponents.Root>
      <FormComponents.Root onSubmit={handleLogin}>
        <FormComponents.Logo title="Acesse o Orkut" />
        <FormComponents.Input
          type="email"
          placeholder="E-mail"
          inputValue={email}
          setInputValue={handleSetEmail}
        />
        <FormComponents.Input
          type="password"
          placeholder="Senha"
          inputValue={password}
          setInputValue={handleSetPassword}
        />
        {errorMessage && (
          <p className="h-0 text-xs text-support-04">{errorMessage}</p>
        )}
        <FormComponents.CheckBox />
        <FormComponents.Button
          className="bg-brand-color text-dark-40"
          text="Entrar na conta"
          type="submit"
        />
        <FormComponents.Button
          className="className bg-input-color"
          text="Criar uma conta"
          onClick={handleRegister}
        />
        <FormComponents.Link href="/" text="Esqueci a minha senha" />
      </FormComponents.Root>
    </div>
  );
}
