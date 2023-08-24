"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { signInWithGoogle } from "./Firebase";

export default function Home() {
  return (
    <main className={styles.main}>
     <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
    </main>
  )
}
