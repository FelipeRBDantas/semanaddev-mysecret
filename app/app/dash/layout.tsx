export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <div className="flex justify-between">
          <button>Sair</button>
          <span>Logo</span>
          <span>Avatar</span>
        </div>
      </header>
      <nav>
        <ul className="flex justify-between">
          <li>
            <a href="/dash">Perguntas</a>
          </li>
          <li>
            <a href="/dash/messages">Messages</a>
          </li>
          <li>
            <a href="/dash/answers">Respostas</a>
          </li>
        </ul>
      </nav>
      <div className="">
        { children }
      </div>
    </div>
  );
}
