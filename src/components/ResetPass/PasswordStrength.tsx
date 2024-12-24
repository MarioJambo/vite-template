import { IconCheck, IconX } from '@tabler/icons-react';
import { Box, Button, Center, Group, PasswordInput, Progress, Text } from '@mantine/core';
import { useInputState } from '@mantine/hooks';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text component="div" c={meets ? 'teal' : 'red'} mt={5} size="sm">
      <Center inline>
        {meets ? <IconCheck size={14} stroke={1.5} /> : <IconX size={14} stroke={1.5} />}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Inclui número' },
  { re: /[a-z]/, label: 'Inclui letra minúscula' },
  { re: /[A-Z]/, label: 'Inclui letra maiúscula' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Inclui símbolo especial' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

// Função para gerar uma senha segura
function generatePassword() {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$&+,:;=?@#|<>.^*()%!-';
  const length = 12;
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

export function PasswordStrength() {
  const [value, setValue] = useInputState('');
  const strength = getStrength(value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ section: { transitionDuration: '0ms' } }}
        value={value.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0}
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
    ));

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setValue(newPassword); // Atualiza o estado com a nova senha gerada
  };

  return (
    <div>
      <PasswordInput
        value={value}
        onChange={setValue}
        placeholder="Sua senha"
        label="Nova Senha"
        required
      />
      <Button mt="xs" onClick={handleGeneratePassword} variant="outline" color="teal" size="xs">
        Gerar Senha Segura
      </Button>

      <Group gap={5} grow mt="xs" mb="md">
        {bars}
      </Group>

      <PasswordRequirement label="Tem pelo menos 6 caracteres" meets={value.length > 5} />
      {checks}
    </div>
  );
}
