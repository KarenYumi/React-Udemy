import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Ocorreu um erro!</h1>
        <p>Não foi possível encontrar esta página! -_-</p>
      </main>
    </>
  )
}

export default ErrorPage;