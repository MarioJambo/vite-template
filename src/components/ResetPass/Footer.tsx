import React from 'react';
import { Box, Group, Text } from '@mantine/core';

const Footer: React.FC = () => {
  return (
    <Box mt="xl" pt="md" sx={{ borderTop: '1px solid #ddd' }}>
      <Group position="apart">
        <Text size="sm" color="dimmed">© 2024 SINGE. All rights reserved.</Text>
        <Group spacing="xs">
          <Text component="a" href="#" size="sm" color="blue">
            Privacy Policy
          </Text>
          <Text component="a" href="#" size="sm" color="blue">
            Terms of Service
          </Text>
        </Group>
      </Group>
    </Box>
  );
};

export default Footer;
