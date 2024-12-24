import React from 'react';
import { Container, Grid, Button, Text, Stack, Image } from '@mantine/core';
import Footer from './Footer'; // Importe o Footer da pasta correta
import TooltipFocus from './TooltipFocus'; // Importe o TooltipFocus da pasta correta
import TooltipIcon from './TooltipIcon'; // Importe o TooltipIcon da pasta correta
import logo from '../../assets/images/logo.png';

const Login: React.FC = () => {
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
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .bg-glass {
            background-color: #fff;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            padding: 60px; /* Aumentado para deixar o formulário maior */
            max-width: 500px; /* Aumentado para expandir o layout */
            width: 100%;
            animation: fadeIn 1s ease-out;
            margin-bottom: 40px; /* Margem para afastar do footer */
          }

          .logo {
            width: 100px; /* Aumentado o tamanho do logotipo */
            height: auto;
            display: block;
            margin: 0 auto;
          }

          .welcome-text {
            animation: fadeIn 1.2s ease-out;
            font-size: 1.5rem; /* Ajustado para maior impacto */
          }
        `}
      </style>

      <Container size="lg">
        <Grid align="center">
          <div className="bg-glass">
            <Image src={logo} alt="Logo" className="logo" />
            <Text 
              align="center" 
              size="xl" 
              weight={700} 
              color="dark" 
              mt="md" 
              className="welcome-text"
            >
              Bem-vindo de volta!
            </Text>
            <Stack spacing="lg" mt="lg">
              <TooltipIcon />
              <TooltipFocus />
              <Button fullWidth size="md" color="blue" mt="md">
                Entrar
              </Button>
              <Text align="center" size="sm" color="dimmed">
                Esqueceu a senha?{' '}
                <Text
                  component="a"
                  href="/recuperacao-senha"
                  color="blue"
                  weight={500}
                >
                  Recuperar senha
                </Text>
              </Text>
            </Stack>
          </div>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default Login;
