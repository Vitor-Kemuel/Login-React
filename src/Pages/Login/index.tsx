import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title, ButtonContainer } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <ButtonContainer>
            <Button title="Entrar" />
          </ButtonContainer>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;