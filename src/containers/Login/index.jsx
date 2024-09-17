import { Button, Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from './styles';
import Logo from '../../assets/logo.svg';

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>Dev Burguer! Acesse
          com seu <span>Login e senha.</span>
        </Title>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="emial" />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" />
          </InputContainer>
          <Link>Esqueci minha senha.</Link>
          <Button>Entrar</Button>
        </Form>
        <Link> Não possui conta? Clique aqui.</Link>
      </RightContainer>
      :
    </Container>
  );
}
