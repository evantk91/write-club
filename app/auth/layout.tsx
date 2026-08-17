"use client";

import Link from "next/link";
import styles from "./auth.module.css";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if(!loading && user) {
      router.replace('/dashboard')
    }
  }, [user, loading])

  if (loading || user) return null

  return (
    <main className={styles.shell}>
      <section className={styles.panel}>
        <Link href="/" className={styles.brand}>
          Write Club
        </Link>
        {children}
      </section>
    </main>
  );
}
