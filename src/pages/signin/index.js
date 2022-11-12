import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as StyleSignin from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/userAuth';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <StyleSignin.Container>
      <StyleSignin.Label>SISTEMA DE LOGIN</StyleSignin.Label>
      <StyleSignin.Content>
        <Input
          id='email-input'
          type='email'
          placeholder='Digite seu E-mail'
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          id='paassword-input'
          type='password'
          placeholder='Digite sua Senha'
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
        <StyleSignin.labelError>{error}</StyleSignin.labelError>
        <Button id='btn-login' Text="Entrar" onClick={handleLogin} />
        <StyleSignin.LabelSignup>
          Não tem uma conta?
          <StyleSignin.Strong>
            <Link id='link-signup' to="/signup">&nbsp;Registre-se</Link>
          </StyleSignin.Strong>
        </StyleSignin.LabelSignup>
      </StyleSignin.Content>
    </StyleSignin.Container>
  );
};

export default Signin;
