'use client';

import Image from 'next/image';

import Nav from '../components/nav';

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
      <Nav />
      { children }
    </>
  );
}
