"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import styles from "./dashboard.module.css";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if(!loading && !user) {
      router.replace('/auth/login')
    }
  }, [user, loading])

  if (loading || !user) return null

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <p className={styles.brand}>Write Club</p>
        <div className={styles.userBlock}>
           {user && <span>Welcome, {user?.email}</span>}
        </div>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Log out
        </button>
      </aside>
      <section className={styles.content}>{children}</section>
    </main>
  );
}
