import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { ReactRelayContext } from "react-relay";
import { environment } from "@/lib/relay";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        primaryColor: "orange",
        fontFamily: inter.style.fontFamily,
        headings: { fontFamily: inter.style.fontFamily },
      }}
    >
      <ReactRelayContext.Provider value={{ environment }}>
        <Component {...pageProps} />
      </ReactRelayContext.Provider>
    </MantineProvider>
  );
}
