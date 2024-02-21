'use client';

import Image from "next/image";

import Styles from './styles.module.css';

export default function Nav() {
  return (
    <nav className="flex w-full mb-4">
      <ul className="flex w-full justify-between">
        <li>
          <NavButton href="/dash" title="Perguntas" imageUrl="/icon/message.svg" />
        </li>
        <li>
          <NavButton href="/dash/messages" title="Mensagens" imageUrl="/icon/inbox.svg" />
        </li>
        <li>
          <NavButton href="/dash/answers" title="Respostas" imageUrl="/icon/send.svg" />
        </li>
      </ul>
    </nav>
  );
}

function NavButton({ 
  href, 
  title, 
  imageUrl 
}: { href: string; title: string; imageUrl: string; }) {
  return (
    <a 
      className={Styles.navButton} 
      href={ href }
    >
      <Image src={imageUrl} alt={title} width={16} height={16} />
      <span>{ title }</span>
    </a>
  );
}
