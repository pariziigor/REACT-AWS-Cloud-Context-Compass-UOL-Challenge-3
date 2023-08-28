"use client";
import { FormComponents } from "../Forms/Index";
import { useRouter } from "next/navigation";
import { RegisterContext } from "@/app/contexts/RegisterContext";
import { UseRegister } from "@/app/hooks/userRegister";
import { useState } from "react";

export default function EditComponent() {
  const router = useRouter();
  const {
    aniversario,
    pais,
    profissao,
    cidade,
    relacionamento,
    password,
    setAniversario,
    setPais,
    setCidade,
    setProfissao,
    setRelacionamento,
    setPassword,
  } = RegisterContext();
  console.log(aniversario, pais, profissao, cidade, relacionamento);

  const { registerUser } = UseRegister(router);

  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isFormValid()) {
      e.preventDefault();
      router.push("/");
    } else {
      setErrorMessage("Por favor, preencha todos os campos.");
    }
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isFormValid = () => {
    return (
      aniversario.trim() !== "" &&
      pais.trim() !== "" &&
      profissao.trim() !== "" &&
      cidade.trim() !== "" &&
      relacionamento !== ""
    );
  };

  return (
    <div className="flex h-[82.5vh] w-full items-center justify-center gap-6 p-10">
      <section>
        <div className="relative flex h-[550px] w-[420px] flex-col items-center gap-10 rounded-2xl bg-dark-30 px-4 py-8">
          <FormComponents.EditTitle title="Editar Informações" />
          <div className="grid grid-cols-2 gap-4">
            {/* password */}
            <FormComponents.Input
              type="password"
              name="password"
              placeholder="Senha"
              inputValue={password}
              setInputValue={(event) => setPassword(event.target.value)}
              required
            />
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
            {errorMessage && (
              <p className="h-0 text-xs text-support-04">{errorMessage}</p>
            )}
          </div>
          <FormComponents.Button
            className=" bg-brand-color px-4"
            text="Salvar"
            onClick={handleEdit}
          />
        </div>
      </section>
    </div>
  );
}
