import Link from "next/link"
import Image from "next/image"
import styles from "./NavMenu.module.css"
import { SignInButton, SignOutButton } from "@/components/buttons"
import AuthCheck from "@/components/AuthCheck"

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"} prefetch={false}>
        <Image
          src="/logo.svg"
          width={216}
          height={30}
          alt="NextSpace Logo"
          priority={true}
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"} prefetch={false}>
            About
          </Link>
        </li>
        <li>
          <Link href={"/blog"} prefetch={false}>
            Blog
          </Link>
        </li>
        <li>
          <Link href={"/users"} prefetch={false}>
            Users
          </Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  )
}
