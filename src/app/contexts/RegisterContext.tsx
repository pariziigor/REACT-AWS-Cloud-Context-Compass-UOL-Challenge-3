"use client";
import { createContext, useContext, useState } from "react";

interface RegisterProfileProps {
  email: string;
  password: string;
  relacionamento: string;
  aniversario: string;
  pais: string;
  cidade: string;
  profissao: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRelacionamento: (relacionamento: string) => void;
  setAniversario: (aniversario: string) => void;
  setPais: (pais: string) => void;
  setCidade: (cidadeNatal: string) => void;
  setProfissao: (profissao: string) => void;
}

interface RegisterContextProps {
  children: React.ReactNode;
}

const uRegisterContext = createContext<RegisterProfileProps>({
  email: "",
  password: "",
  relacionamento: "",
  aniversario: "",
  pais: "",
  cidade: "",
  profissao: "",
  setEmail: () => {},
  setPassword: () => {},
  setRelacionamento: () => {},
  setAniversario: () => {},
  setPais: () => {},
  setCidade: () => {},
  setProfissao: () => {},
});

export function RegisterContext() {
  return useContext(uRegisterContext);
}

export function RegisterProvider({ children }: RegisterContextProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [relacionamento, setRelacionamento] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [pais, setPais] = useState("");
  const [cidade, setCidade] = useState("");
  const [profissao, setProfissao] = useState("");

  return (
    <uRegisterContext.Provider
      value={{
        email,
        password,
        relacionamento,
        aniversario,
        pais,
        cidade,
        profissao,
        setEmail,
        setPassword,
        setRelacionamento,
        setAniversario,
        setPais,
        setCidade,
        setProfissao,
      }}
    >
      {children}
    </uRegisterContext.Provider>
  );
}
