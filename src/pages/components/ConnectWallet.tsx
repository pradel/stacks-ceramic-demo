import { Button, Text, Title } from "@mantine/core";
import { IconWallet } from "@tabler/icons-react";

export const ConnectWallet = ({ onConnect }: { onConnect: () => void }) => {
  return (
    <>
      <Title>Todo Stacks Ceramic</Title>
      <Text>To get started connect your Stacks wallet</Text>
      <Button mt="md" rightIcon={<IconWallet size={18} />} onClick={onConnect}>
        Connect wallet
      </Button>
    </>
  );
};
