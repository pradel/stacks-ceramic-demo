import { Container } from "@mantine/core";
import Head from "next/head";
import { AppConfig, showConnect, UserData, UserSession } from "@stacks/connect";
import { ConnectWallet } from "./components/ConnectWallet";
import { useEffect, useState } from "react";
import { DIDSession } from "did-session";
import { StacksWebAuth, getAccountIdByNetwork } from "@didtools/pkh-stacks";
import { ComposeClient } from "@composedb/client";
import { TodoList } from "./components/TodoList";
import { composeClient } from "@/lib/composeDB";

const appConfig = new AppConfig(["store_write"]);
const userSession = new UserSession({ appConfig });

export default function Home() {
  const [user, setUser] = useState<UserData>();

  /**
   * When app load check if user is already logged in
   */
  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      const userData = userSession.loadUserData();
      if (userData) {
        loadSession(userData).then((session) => {
          if (session) {
            setUser(userData);
          }
        });
      }
    }
  }, []);

  const loadSession = async (userData: UserData) => {
    const stacksProvider = window.StacksProvider;
    const address = userData.profile.stxAddress.mainnet;
    const accountId = getAccountIdByNetwork("mainnet", address);
    const authMethod = await StacksWebAuth.getAuthMethod(
      stacksProvider,
      accountId
    );

    // Check if user session already in storage
    const sessionStr = localStorage.getItem("didsession");
    let session;

    // If session string available, create a new did-session object
    if (sessionStr) {
      session = await DIDSession.fromSession(sessionStr);
    }

    // If no session available, create a new user session and store in local storage
    if (!session || (session.hasSession && session.isExpired)) {
      const session = await DIDSession.authorize(authMethod, {
        resources: ["ceramic://*"],
      });
      localStorage.setItem("didsession", session.serialize());
    }

    if (session) {
      composeClient.setDID(session.did);
    }

    return session;
  };

  const handleConnect = () =>
    showConnect({
      userSession,
      appDetails: {
        name: "Todo Stacks Ceramic",
        icon: "https://example.com/icon.png",
      },
      onFinish: async () => {
        const userData = userSession.loadUserData();

        const stacksProvider = window.StacksProvider;
        const address = userData.profile.stxAddress.mainnet;
        const accountId = getAccountIdByNetwork("mainnet", address);
        const authMethod = await StacksWebAuth.getAuthMethod(
          stacksProvider,
          accountId
        );
        const session = await loadSession(userData);

        console.log(session);

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
        {!user ? <ConnectWallet onConnect={handleConnect} /> : <TodoList />}
      </Container>
    </>
  );
}
