"use client";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { FormComponents } from "../Forms/Index";
import { BannerComponents } from "../Banner";
import { RegisterContext } from "@/app/contexts/RegisterContext";

export default function RecoverComponent() {
  const router = useRouter();
  const { email, setEmail } = RegisterContext();
  console.log(email);

  const handleRecover = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/");
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
          <FormComponents.Button
            className="w-full bg-brand-color px-4"
            text="Enviar código"
            onClick={handleRecover}
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
