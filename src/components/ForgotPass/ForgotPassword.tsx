import React, { useState } from 'react';
import { Container, Grid, Button, Text, Stack, Image, TextInput } from '@mantine/core';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { AutocompleteLoading } from './AutocompleteLoading';  // Componente de autocompletação
import Footer from './Footer';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

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
            padding-top: 50px; /* Espaçamento superior */
          }

          .bg-glass {
            background-color: #fff;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            padding: 40px;
            width: 100%;
            max-width: 600px;
            animation: fadeIn 1s ease-out;
            margin-top: 20px;
          }

          .logo {
            width: 80px;
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
            width: 100%;
          }
        `}
      </style>

      <Container size="lg">
        <Grid align="center">
          <div className="bg-glass">
            <Image src={logo} alt="Logo" className="logo" />
            <Text align="center" size="xl" weight={700} color="dark" className="welcome-text">
              Esqueci a Senha
            </Text>
            <form>
              <Stack spacing="md" mt="lg">
                <AutocompleteLoading />  {/* Componente de Autocompletação */}
                <Button fullWidth size="md" color="blue" mt="md">
                  Enviar Link de Redefinição
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

export default ForgotPassword;
