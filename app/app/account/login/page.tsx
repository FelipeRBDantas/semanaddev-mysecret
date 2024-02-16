export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>perguntas e mensagens anônimas</p>
      <input type="text" placeholder="informe seu email" />
      <input type="text" placeholder="informe sua senha" />
      <button type="submit" className="button">acessar minha conta</button>
      <a className="button-secondary">voltar</a>
    </div>
  );
}
