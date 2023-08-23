"use client";
import { FormComponents } from "../Forms/Index";
import { useRouter } from "next/navigation";
import { RegisterContext } from "@/app/contexts/RegisterContext";
import { BannerComponents } from "../Banner";

export default function RegisterComponent() {
  const router = useRouter();
  const {
    email,
    aniversario,
    pais,
    profissao,
    cidade,
    password,
    setEmail,
    setAniversario,
    setPais,
    setCidade,
    setPassword,
    setProfissao,
  } = RegisterContext();
  console.log(email, aniversario, pais, profissao, cidade, password);

  const handleRegister: React.MouseEventHandler<HTMLButtonElement> = (e) => {
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
        <div className="relative flex h-[450px] w-[350px] flex-col items-center gap-4 rounded-2xl bg-dark-30 px-4 py-8">
          <FormComponents.Logo title="Cadastre-se o UOLkut" />
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
          <div>
            <FormComponents.Input
              type="date"
              name="data"
              placeholder="Nascimento"
              inputValue={aniversario}
              setInputValue={(event) => setAniversario(event.target.value)}
            />
            <FormComponents.Input
              type="text"
              name="pais"
              placeholder="País"
              inputValue={pais}
              setInputValue={(event) => setPais(event.target.value)}
            />
            <FormComponents.Input
              type="text"
              name="profissao"
              placeholder="Profissão"
              inputValue={profissao}
              setInputValue={(event) => setProfissao(event.target.value)}
            />
            <FormComponents.Input
              type="text"
              name="cidade"
              placeholder="Cidade"
              inputValue={cidade}
              setInputValue={(event) => setCidade(event.target.value)}
            />
          </div>
          <div>
            
          </div>
          <FormComponents.Button
            className="w-max bg-brand-color px-12 py-6"
            text="Cadastrar Conta"
            onClick={handleRegister}
          />
        </div>
      </section>
    </div>
  );
}
