import Image from "next/image";

import Styles from "./styles.module.css";

export default function Header() {
  return (
    <header className="py-[35px]">
      <div className={Styles.logo}>
        <Image src="/logo.png" alt="MySecret" width={24} height={24} />
        <span>MySecret</span>
      </div>
    </header>
  );
}
