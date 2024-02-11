export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex w-full justify-between">
        <button>Sair</button>
        <span>Logo</span>
        <span>Avatar</span>
      </header>
      <nav className="flex w-full">
        <ul className="flex justify-between">
          <li>
            <NavButton href="/dash">home</NavButton>
          </li>
          <li>
            <NavButton href="/dash/messages">messages</NavButton>
          </li>
          <li>
            <NavButton href="/dash/answers">respostas</NavButton>
          </li>
        </ul>
      </nav>
      { children }
    </>
  );
}

function NavButton({ href, children }: { href: string; children: string }) {
  return (
    <a 
      className="bg-[#D43A72] text-white rounded-[14px] text-[12px] p-3" 
      href={ href }
    >
      { children }
    </a>
  );
}
