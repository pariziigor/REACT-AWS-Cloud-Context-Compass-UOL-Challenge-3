"use client";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { FormComponents } from "../Forms/Index";
import { BannerComponents } from "../Banner";
import { RegisterContext } from "@/app/contexts/RegisterContext";
import { useState } from "react";

export default function PasswordComponent() {
  const [codigo, setCodigo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const { password, setPassword } = RegisterContext();
  console.log(password);

  const handlePassword = (e: MouseEvent<HTMLButtonElement>) => {
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
        <div className="relative flex h-[450px] w-[320px] flex-col items-center gap-4 rounded-2xl bg-dark-30 px-4 py-8">
          <FormComponents.Logo title="Nova senha" />
          <FormComponents.Input
            type="text"
            name="codigo"
            placeholder="Informe o código"
            inputValue={codigo}
            setInputValue={(event) => setCodigo(event.target.value)}
            required
          />
          <FormComponents.Input
            type="password"
            name="password"
            placeholder="Nova senha"
            inputValue={password}
            setInputValue={(event) => setPassword(event.target.value)}
            required
          />
          <FormComponents.Input
            type="password"
            name="confirmpassword"
            placeholder="Confirme a senha"
            inputValue={confirmPassword}
            setInputValue={(event) => setConfirmPassword(event.target.value)}
            required
          />
          <FormComponents.Button
            className="w-full bg-brand-color px-4"
            text="Salvar"
            onClick={handlePassword}
          />
          <div className="relative flex h-[450px] w-[320px] flex-col items-center rounded-2xl bg-dark-30 px-4 py-4">
            <FormComponents.Recover href="/" text="Lembrou sua Senha?" />
            <FormComponents.RecoverButton
              className="className bg-input-color"
              text="Entrar com as credenciais"
              onClick={handlePassword}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
