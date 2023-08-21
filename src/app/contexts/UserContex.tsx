"use client";
import { createContext, useContext, useState } from "react";

interface UserContextProps {
  user: string;
  relacionamento: string;
  aniversario: string;
  idade: string;
  interessesNoOrkut: string;
  quemSouEu: string;
  filhos: string;
  sexo: string;
  fumo: string;
  bebo: string;
  moro: string;
  pais: string;
  cidadeNatal: string;
  musicas: string;
  filmes: string;
  setUser: (user: string) => void;
  setRelacionamento: (relacionamento: string) => void;
  setAniversario: (aniversario: string) => void;
  setIdade: (idade: string) => void;
  setInteressesNoOrkut: (interessesNoOrkut: string) => void;
  setQuemSouEu: (quemSouEu: string) => void;
  setFilhos: (filhos: string) => void;
  setSexo: (sexo: string) => void;
  setFumo: (fumo: string) => void;
  setBebo: (bebo: string) => void;
  setMoro: (moro: string) => void;
  setPais: (pais: string) => void;
  setCidadeNatal: (cidadeNatal: string) => void;
  setMusicas: (musicas: string) => void;
  setFilmes: (filmes: string) => void;
}

const UserContext = createContext<UserContextProps>({
  user: "",
  relacionamento: "",
  aniversario: "",
  idade: "",
  interessesNoOrkut: "",
  quemSouEu: "",
  filhos: "",
  sexo: "",
  fumo: "",
  bebo: "",
  moro: "",
  pais: "",
  cidadeNatal: "",
  musicas: "",
  filmes: "",
  setUser: () => {},
  setRelacionamento: () => {},
  setAniversario: () => {},
  setIdade: () => {},
  setInteressesNoOrkut: () => {},
  setQuemSouEu: () => {},
  setFilhos: () => {},
  setSexo: () => {},
  setFumo: () => {},
  setBebo: () => {},
  setMoro: () => {},
  setPais: () => {},
  setCidadeNatal: () => {},
  setMusicas: () => {},
  setFilmes: () => {},
});

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState("");
  const [relacionamento, setRelacionamento] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [idade, setIdade] = useState("");
  const [interessesNoOrkut, setInteressesNoOrkut] = useState("");
  const [quemSouEu, setQuemSouEu] = useState("");
  const [filhos, setFilhos] = useState("");
  const [sexo, setSexo] = useState("");
  const [fumo, setFumo] = useState("");
  const [bebo, setBebo] = useState("");
  const [moro, setMoro] = useState("");
  const [pais, setPais] = useState("");
  const [cidadeNatal, setCidadeNatal] = useState("");
  const [musicas, setMusicas] = useState("");
  const [filmes, setFilmes] = useState("");

  return (
    <UserContext.Provider
      value={{
        user,
        relacionamento,
        aniversario,
        idade,
        interessesNoOrkut,
        quemSouEu,
        filhos,
        sexo,
        fumo,
        bebo,
        moro,
        pais,
        cidadeNatal,
        musicas,
        filmes,
        setUser,
        setRelacionamento,
        setAniversario,
        setIdade,
        setInteressesNoOrkut,
        setQuemSouEu,
        setFilhos,
        setSexo,
        setFumo,
        setBebo,
        setMoro,
        setPais,
        setCidadeNatal,
        setMusicas,
        setFilmes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
