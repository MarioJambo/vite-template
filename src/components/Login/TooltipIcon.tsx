import React from 'react';
import { Tooltip, TextInput, Text, Center } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

const TooltipIcon: React.FC = () => {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle size={18} stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <TextInput
      rightSection={rightSection}
      label="Email"
      placeholder="Your email"
      required
    />
  );
};

export default TooltipIcon;
