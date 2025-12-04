"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session && pathname !== "/admin/login") {
        router.push("/admin/login");
      }
      setLoading(false);
    };
    checkUser();
  }, [router, pathname]);

  if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading Admin...</div>;

  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-white/10 bg-dark-surface px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Moe Productions Admin</h1>
        <div className="flex gap-4">
          <Link href="/admin">
            <Button variant="ghost" className="text-white hover:text-neon-blue">Dashboard</Button>
          </Link>
          <Button 
            variant="destructive" 
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/admin/login");
            }}
          >
            Logout
          </Button>
        </div>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
