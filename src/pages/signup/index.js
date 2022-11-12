import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as StyleSignup from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <StyleSignup.Container>
      <StyleSignup.Label>SISTEMA DE LOGIN</StyleSignup.Label>
      <StyleSignup.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <StyleSignup.labelError>{error}</StyleSignup.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <StyleSignup.LabelSignin>
          Já tem uma conta?
          <StyleSignup.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </StyleSignup.Strong>
        </StyleSignup.LabelSignin>
      </StyleSignup.Content>
    </StyleSignup.Container>
  );
};

export default Signup;
