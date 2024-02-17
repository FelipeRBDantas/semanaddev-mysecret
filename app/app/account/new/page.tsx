import Header from "@/app/components/header";

export default function NewAccountPage() {
  return (
    <>
      <Header />
      <h1 className="mb-[60px]">perguntas e mensagens anônimas</h1>
      <form className="flex flex-col w-full space-y-[15px]">
        <FormEmail />
      </form>
    </>
  );
}

function FormEmail() {
  return (
    <>
      <input type="text" placeholder="informe seu email" />
      <button className="button">continuar</button>
      <a className="button-secondary">voltar</a>
    </>
  );
}

function FormPassword() {
  return (
    <>
      <input type="text" placeholder="informe sua senha" />
      <button className="button">continuar</button>
    </>
  );
}

function FormProfile() {
  return (
    <>
      <input type="text" placeholder="informe seu nome" />
      <input type="text" placeholder="informe seu usuário" />
      <FormAvatar />
      <button className="button">continuar</button>
    </>
  );
}

function FormAvatar() {
  return (
    <>
      <ul>
        <li>avatar 1</li>
      </ul>
    </>
  );
}
