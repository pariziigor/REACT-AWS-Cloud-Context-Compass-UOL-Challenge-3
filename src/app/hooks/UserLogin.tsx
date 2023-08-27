import { useState, ChangeEvent, FormEvent } from "react";
import { useUserContext } from "../contexts/UserContex";

interface User {
  id: number;
  userID: string;
  user: string;
  email: string;
  password: string;
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
  moro: string;
  pais: string;
  cidadeNatal: string;
  musicas: string;
  filmes: string;
}
interface ProfileInfo {}

const UserLoginForm = (router: any) => {
  const {
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
  } = useUserContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/users");
      const users: User[] = await response.json();

      const authenticatedUser = users.find(
        (user) => user.email === email && user.password === password,
      );

      if (authenticatedUser) {
        setUser(authenticatedUser.user);
        setRelacionamento(authenticatedUser.relacionamento);
        setAniversario(authenticatedUser.aniversario);
        setIdade(authenticatedUser.idade);
        setInteressesNoOrkut(authenticatedUser.interessesNoOrkut);
        setQuemSouEu(authenticatedUser.quemSouEu);
        setFilhos(authenticatedUser.filhos);
        setSexo(authenticatedUser.sexo);
        setFumo(authenticatedUser.fumo);
        setBebo(authenticatedUser.bebo);
        setMoro(authenticatedUser.moro);
        setPais(authenticatedUser.pais);
        setCidadeNatal(authenticatedUser.cidadeNatal);
        setMusicas(authenticatedUser.musicas);
        setFilmes(authenticatedUser.filmes);
        router.push("/profile");
      } else {
        setErrorMessage("Email ou senha inválidos");
      }
    } catch (error) {
      setErrorMessage("Algo aconteceu, tente novamente");
    }
  };

  return {
    email,
    password,
    errorMessage,
    handleSetEmail,
    handleSetPassword,
    handleLogin,
  };
};

export default UserLoginForm;
