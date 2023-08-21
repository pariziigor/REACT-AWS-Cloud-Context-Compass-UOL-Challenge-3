"use client";
import { createContext, useContext, useState } from "react";

interface RegisterProfileProps {
  user: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bio: string;
  relacionamento: string;
  aniversario: string;
  idade: string;
  interessesNoOrkut: string;
  quemSouEu: string;
  filhos: string;
  sexo: string;
  fumo: string;
  bebo: string;
  pais: string;
  estado: string;
  cidade: string;
  musicas: string;
  filmes: string;
  setUser: (user: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setPasswordConfirm: (passwordCorfirm: string) => void;
  setBio: (bio: string) => void;
  setRelacionamento: (relacionamento: string) => void;
  setAniversario: (aniversario: string) => void;
  setIdade: (idade: string) => void;
  setInteressesNoOrkut: (interessesNoOrkut: string) => void;
  setQuemSouEu: (quemSouEu: string) => void;
  setFilhos: (filhos: string) => void;
  setSexo: (sexo: string) => void;
  setFumo: (fumo: string) => void;
  setBebo: (bebo: string) => void;
  setPais: (pais: string) => void;
  setEstado: (moro: string) => void;
  setCidade: (cidadeNatal: string) => void;
  setMusicas: (musicas: string) => void;
  setFilmes: (filmes: string) => void;
}

interface RegisterContextProps {
  children: React.ReactNode;
}

const uRegisterContext = createContext<RegisterProfileProps>({
  user: "",
  email: "",
  password: "",
  passwordConfirm: "",
  bio: "",
  relacionamento: "",
  aniversario: "",
  idade: "",
  interessesNoOrkut: "",
  quemSouEu: "",
  filhos: "",
  sexo: "",
  fumo: "",
  bebo: "",
  pais: "",
  estado: "",
  cidade: "",
  musicas: "",
  filmes: "",
  setUser: () => {},
  setEmail: () => {},
  setPassword: () => {},
  setPasswordConfirm: () => {},
  setBio: () => {},
  setRelacionamento: () => {},
  setAniversario: () => {},
  setIdade: () => {},
  setInteressesNoOrkut: () => {},
  setQuemSouEu: () => {},
  setFilhos: () => {},
  setSexo: () => {},
  setFumo: () => {},
  setBebo: () => {},
  setPais: () => {},
  setEstado: () => {},
  setCidade: () => {},
  setMusicas: () => {},
  setFilmes: () => {},
});

export function RegisterContext() {
  return useContext(uRegisterContext);
}

export function RegisterProvider({ children }: RegisterContextProps) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [bio, setBio] = useState("");
  const [relacionamento, setRelacionamento] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [idade, setIdade] = useState("");
  const [interessesNoOrkut, setInteressesNoOrkut] = useState("");
  const [quemSouEu, setQuemSouEu] = useState("");
  const [filhos, setFilhos] = useState("");
  const [sexo, setSexo] = useState("");
  const [fumo, setFumo] = useState("");
  const [bebo, setBebo] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");
  const [cidade, setCidade] = useState("");
  const [musicas, setMusicas] = useState("");
  const [filmes, setFilmes] = useState("");

  return (
    <uRegisterContext.Provider
      value={{
        user,
        email,
        password,
        passwordConfirm,
        bio,
        relacionamento,
        aniversario,
        idade,
        interessesNoOrkut,
        quemSouEu,
        filhos,
        sexo,
        fumo,
        bebo,
        estado,
        pais,
        cidade,
        musicas,
        filmes,
        setUser,
        setEmail,
        setPassword,
        setPasswordConfirm,
        setBio,
        setRelacionamento,
        setAniversario,
        setIdade,
        setInteressesNoOrkut,
        setQuemSouEu,
        setFilhos,
        setSexo,
        setFumo,
        setBebo,
        setEstado,
        setPais,
        setCidade,
        setMusicas,
        setFilmes,
      }}
    >
      {children}
    </uRegisterContext.Provider>
  );
}
