import Header from "@/app/components/header";

export default function LoginPage() {
  return (
    <>
      <Header />
      <h1 className="mb-[60px]">perguntas e mensagens anônimas</h1>
      <form className="flex w-full flex-col space-y-[15px]">
        <input type="text" placeholder="informe seu email" />
        <input type="text" placeholder="informe sua senha" />
        <button type="submit" className="button">acessar minha conta</button>
        <a className="button-secondary">voltar</a>
      </form>
    </>
  );
}
