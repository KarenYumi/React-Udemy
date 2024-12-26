import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // const navigation = useNavigation(); //é um navigation state, no caso se for a uma pagina e demorar pra carregar, ele vai mostrar um loading

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;