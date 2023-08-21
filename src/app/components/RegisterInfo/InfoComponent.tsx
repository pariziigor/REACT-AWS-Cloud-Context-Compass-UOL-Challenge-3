"use client";
import { FormComponents } from "../Forms/Index";
import { useRouter } from "next/navigation";
import { RegisterContext } from "@/app/contexts/RegisterContext";
import { UseRegister } from "@/app/hooks/userRegister";

export default function InfoComponent() {
  const router = useRouter();
  const {
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
    setQuemSouEu,
    setRelacionamento,
    setFilhos,
    setBio,
    setInteressesNoOrkut,
    setMusicas,
    setFilmes,
    setSexo,
    setFumo,
    setBebo,
  } = RegisterContext();

  const { registerUser } = UseRegister(router);

  const handleRegister: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    registerUser();
    router.push("/");
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-2 px-10 py-14">
      <FormComponents.Logo title="Personalize Seu Perfil" />
      <div className="flex w-full flex-col gap-2 md:w-[70%] md:flex-row md:gap-6 ">
        <div className="flex w-full flex-col gap-3 rounded-2xl bg-dark-30 px-4 py-8 md:w-1/2">
          {/* foto perfil */}
          <div className="w-full rounded-md bg-input-color py-2">
            <label
              htmlFor="fileInput"
              className="w-full rounded-md bg-input-color px-3 py-2"
            >
              Upload foto de perfil
            </label>
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              className="hidden"
            ></input>
          </div>
          {/* bio */}
          <FormComponents.Input
            type="text"
            name="bio"
            placeholder="Bio"
            inputValue={bio}
            setInputValue={(event) => setBio(event.target.value)}
          />
          {/* quem sou eu */}
          <FormComponents.Input
            type="text"
            name="quemSouEu"
            placeholder="Quem Sou Eu"
            inputValue={quemSouEu}
            setInputValue={(event) => setQuemSouEu(event.target.value)}
          />
          {/* sexo */}
          <select
            name="sexo"
            className="w-full rounded-md bg-input-color px-3 py-2"
            value={sexo}
            onChange={(event) => setSexo(event.target.value)}
          >
            <option value="">Sexo</option>
            <option value="opcao1">Masculino</option>
            <option value="opcao2">Feminino</option>
            <option value="opcao3">Transgênero</option>
            <option value="opcao4">Outro</option>
          </select>
          {/* relacionamento */}
          <select
            name="relacionamento"
            className="w-full rounded-md bg-input-color px-3 py-2"
            value={relacionamento}
            onChange={(event) => setRelacionamento(event.target.value)}
          >
            <option value="">Status de Relacionamento</option>
            <option value="Solteiro">Solteiro(a)</option>
            <option value="Casado">Casado(a)</option>
            <option value="Divorciado">Divorciado(a)</option>
          </select>
          {/* filhos */}
          <select
            name="filhos"
            className="w-full rounded-md bg-input-color px-3 py-2"
            value={filhos}
            onChange={(event) => setFilhos(event.target.value)}
          >
            <option value="">Tem Filhos?</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>
        <div className="flex w-full flex-col gap-3 rounded-2xl bg-dark-30 px-4 py-8 md:w-1/2">
          {/* interesses */}
          <FormComponents.Input
            type="text"
            name="interessesNoOrkut"
            placeholder="Interesses"
            inputValue={interessesNoOrkut}
            setInputValue={(event) => setInteressesNoOrkut(event.target.value)}
          />
          {/* musica */}
          <FormComponents.Input
            type="text"
            name="musicas"
            placeholder="Música Favorita"
            inputValue={musicas}
            setInputValue={(event) => setMusicas(event.target.value)}
          />
          {/* filmes */}
          <FormComponents.Input
            type="text"
            name="filmes"
            placeholder="Filme Favorito"
            inputValue={filmes}
            setInputValue={(event) => setFilmes(event.target.value)}
          />
          {/* bebo */}
          <select
            name="bebo"
            className="w-full rounded-md bg-input-color px-3 py-2"
            value={bebo}
            onChange={(event) => setBebo(event.target.value)}
          >
            <option value="">Hábitos com Bebidas</option>
            <option value="Frequentemente">Frequentemente</option>
            <option value="Socialmente">Socialmente</option>
            <option value="Depende do Dia">Depende do Dia</option>
            <option value="Nunca">Nunca</option>
          </select>
          {/* fumo */}
          <select
            name="fumo"
            className="w-full rounded-md bg-input-color px-3 py-2"
            value={fumo}
            onChange={(event) => setFumo(event.target.value)}
          >
            <option value="">Hábitos de Fumo</option>
            <option value="Frequentemente">Frequentemente</option>
            <option value="Socialmente">Socialmente</option>
            <option value="Depende do Dia">Depende do Dia</option>
            <option value="Nunca">Nunca</option>
          </select>
          {/* btn */}
          <FormComponents.Button
            className="bg-brand-color text-dark-40"
            text="Finalizar Cadastro"
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
}
