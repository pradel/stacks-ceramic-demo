import { Container } from "@mantine/core";
import Head from "next/head";
import { AppConfig, showConnect, UserData, UserSession } from "@stacks/connect";
import { ConnectWallet } from "./components/ConnectWallet";
import { useEffect, useState } from "react";

const appConfig = new AppConfig(["store_write"]);
export const userSession = new UserSession({ appConfig });

export default function Home() {
  const [user, setUser] = useState<UserData>();

  /**
   * When app load check if user is already logged in
   */
  useEffect(() => {
    const userData = userSession.loadUserData();
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleConnect = () =>
    showConnect({
      userSession,
      appDetails: {
        name: "Todo Stacks Ceramic",
        icon: "https://example.com/icon.png",
      },
      onFinish: () => {
        const userData = userSession.loadUserData();
        setUser(userData);
      },
    });

  return (
    <>
      <Head>
        <title>Todo Stacks Ceramic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container mt={80} size="xs">
        {!user ? <ConnectWallet onConnect={handleConnect} /> : null}
      </Container>
    </>
  );
}
