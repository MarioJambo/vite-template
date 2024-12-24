import React, { useState } from 'react';
import { Container, Grid, Button, Text, Stack, Image, TextInput } from '@mantine/core';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { PasswordStrength } from './PasswordStrength';  
import Footer from './Footer';  

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="background-radial-gradient">
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .background-radial-gradient {
            background-color: hsl(218, 41%, 15%);
            background-image: radial-gradient(650px circle at 0% 0%,
                hsl(218, 41%, 35%) 15%,
                hsl(218, 41%, 30%) 35%,
                hsl(218, 41%, 20%) 75%,
                hsl(218, 41%, 19%) 80%,
                transparent 100%),
              radial-gradient(1250px circle at 100% 100%,
                hsl(218, 41%, 45%) 15%,
                hsl(218, 41%, 30%) 35%,
                hsl(218, 41%, 20%) 75%,
                hsl(218, 41%, 19%) 80%,
                transparent 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding-top: 50px;
          }

          .bg-glass {
            background-color: #fff;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            padding: 40px;
            width: 100%;
            max-width: 800px; /* Aumentado para ser mais largo */
            animation: fadeIn 1s ease-out;
            margin-top: 20px;
          }

          .logo {
            width: 100px; /* Logo mais largo */
            height: auto;
            display: block;
            margin: 0 auto;
          }

          .welcome-text {
            animation: fadeIn 1.2s ease-out;
            margin-bottom: 20px;
          }

          .form-footer {
            margin-top: 20px;
            text-align: center;
          }

          .bg-glass form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .bg-glass form input {
            width: 100%; /* Fazendo os inputs mais largos */
          }

          @media (max-width: 768px) {
            .bg-glass {
              padding: 30px;
              max-width: 100%; /* Para telas menores, ocupa toda a largura disponível */
            }
            .logo {
              width: 80px;
            }
          }
        `}
      </style>

      <Container size="lg">
        <Grid align="center">
          <div className="bg-glass">
            <Image src={logo} alt="Logo" className="logo" />
            <Text align="center" size="xl" weight={700} color="dark" className="welcome-text">
              Redefinir Senha
            </Text>
            <form>
              <Stack spacing="md" mt="lg">
                <PasswordStrength value={password} onChange={setPassword} />  {/* Componente de verificação de senha */}
                <TextInput
                  label="Confirmar Senha"
                  placeholder="Repita sua nova senha"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                  required
                />
                <Button fullWidth size="md" color="blue" mt="md">
                  Redefinir Senha
                </Button>
              </Stack>
            </form>
            <div className="form-footer">
              <Text align="center" size="sm" color="dimmed">
                Já tem uma conta?{' '}
                <Link to="/login">
                  <Text component="span" color="blue" weight={500}>
                    Faça login
                  </Text>
                </Link>
              </Text>
            </div>
          </div>
        </Grid>
      </Container>

      <Footer />  {/* Rodapé */}
    </div>
  );
};

export default ResetPassword;
