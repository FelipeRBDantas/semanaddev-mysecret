'use client';

import { useRouter } from "next/navigation";

import Header from "@/app/components/header";

export default function LoginPage() {
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);

    router.push('/dash');
  }

  return (
    <>
      <Header />
      <h1 className="mb-[60px]">perguntas e mensagens anônimas</h1>
      <form onSubmit={ handleSubmit } className="flex w-full flex-col space-y-[15px]">
        <input type="text" placeholder="informe seu email" />
        <input type="text" placeholder="informe sua senha" />
        <button type="submit" className="button">acessar minha conta</button>
        <a href="/" className="button-secondary">voltar</a>
      </form>
    </>
  );
}
