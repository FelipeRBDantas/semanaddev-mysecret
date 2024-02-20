'use client';

import Image from 'next/image';

import Styles from './styles.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={Styles.header}>
        <button>
          <Image src="/icon/log-out.svg" alt="Sair" width={24} height={24} />
        </button>
        <Image src="/logo.png" alt="MySecret" width={32} height={32} className='opacity-50' />
        <Image src="/avatar/avatar5.png" alt="Avatar" width={48} height={48} />
      </header>
      <nav className="flex w-full mb-4">
        <ul className="flex w-full justify-between">
          <li>
            <NavButton href="/dash">
              <>
                <Image src="/icon/message.svg" alt="Perguntas" width={16} height={16} />
                perguntas
              </>
            </NavButton>
          </li>
          <li>
            <NavButton href="/dash/messages">
              <>
                <Image src="/icon/inbox.svg" alt="Mensagens" width={16} height={16} />
                mensagens
              </>
            </NavButton>
          </li>
          <li>
            <NavButton href="/dash/answers">
              <>
                <Image src="/icon/send.svg" alt="Respostas" width={16} height={16} />
                respostas
              </>
            </NavButton>
          </li>
        </ul>
      </nav>
      { children }
    </>
  );
}

function NavButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      className="flex bg-[#D43A72] text-white rounded-[14px] text-[12px] p-3" 
      href={ href }
    >
      { children }
    </a>
  );
}
