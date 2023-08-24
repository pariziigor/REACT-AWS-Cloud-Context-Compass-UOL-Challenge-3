"use client";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { FormComponents } from "../Forms/Index";
import { BannerComponents } from "../Banner";
import { RegisterContext } from "@/app/contexts/RegisterContext";
import { useState } from "react";

export default function RecoverComponent() {
  const router = useRouter();
  const { email, setEmail } = RegisterContext();
  console.log(email);

  const isFormValid = () => {
    return (
      email.trim() !== ""
    );
  };

  const handleRecover = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/");
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInfo = (e: MouseEvent<HTMLButtonElement>) => {
    if (isFormValid()) {
      e.preventDefault();
    router.push("/pages/password");
    } else {
      setErrorMessage("Por favor, preencha o campo de e-mail.");
    }
  };

  return (
    <div className="flex h-[82.5vh] w-full items-center justify-center gap-6 p-10">
      <BannerComponents.Root>
        <BannerComponents.Img />
        <BannerComponents.Text />
      </BannerComponents.Root>
      <section>
        <div className="relative flex h-[450px] w-[320px] flex-col items-center gap-6 rounded-2xl bg-dark-30 px-4 py-8">
          <FormComponents.Logo title="Recupere sua senha" />
          <FormComponents.Input
            type="email"
            name="email"
            placeholder="E-mail cadastrado"
            inputValue={email}
            setInputValue={(event) => setEmail(event.target.value)}
            required
          />
          {errorMessage && (
              <p className="h-0 text-xs text-support-04">{errorMessage}</p>
            )}
          <FormComponents.Button
            className="w-full bg-brand-color px-4"
            text="Enviar código"
            onClick={handleInfo}
          />
          <div className="relative flex h-[450px] w-[320px] flex-col items-center gap-2 rounded-2xl bg-dark-30 px-4 py-8">
            <FormComponents.Recover href="/" text="Lembrou sua Senha?" />
            <FormComponents.RecoverButton
              className="className bg-input-color"
              text="Entrar com as credenciais"
              onClick={handleRecover}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
