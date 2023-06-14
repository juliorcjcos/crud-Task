import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavbarLayout } from "@/layouts/NavarLayout";
import { SidebarLayout } from "@/layouts/SidebarLayout";
import { useRouter } from "next/router";
import SessionContextProvider from "@/contexts/SessionContext";

const client = new ApolloClient({
  uri: "http://10.2.20.119:4000/graphql",
  
  // InMemoryCache para guardar los datos en cache. cuando se hagan cambios apollo no tenga que pedir los datos acada momento.
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const render = () => {
    let element;

    switch (true) {
      case router.asPath.includes("/homePage"):
        element = (
          <NavbarLayout>
            {({ user, setUser }) => (
              <SidebarLayout>
              <Component {...pageProps} user={user} setUser={setUser} />
              </SidebarLayout>
            )}
          </NavbarLayout>
        );
        break;

      case router.asPath.includes("/tasks"):
        element = (
          <NavbarLayout>
            {({ user, setUser }) => (
              <SidebarLayout>
                <Component {...pageProps} user={user} setUser={setUser} />
              </SidebarLayout>
            )}
          </NavbarLayout>
        );
        break;

      default:
        element = (
          <NavbarLayout>
            {({ user, setUser }) => (
              <Component {...pageProps} user={user} setUser={setUser} />
            )}
          </NavbarLayout>
          
        );
        break;
    }

    return element;
  }

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <SessionContextProvider>
        {
         render()
        }
        </SessionContextProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}
