"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ id }: { id: number }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const onDelete = async () => {
    if (!id) return;
    if (!confirm("Weet je zeker dat je deze post wilt verwijderen? Dit kan niet ongedaan worden gemaakt.")) return;
    setDeleting(true);
    try {
      const res = await fetch("/api/posts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Delete failed");
      router.push("/blog");
    } catch (e) {
      alert("Verwijderen mislukt");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <button
      onClick={onDelete}
      disabled={deleting}
      className="rounded-full border border-red-900/60 bg-red-900/10 px-3 py-1 text-xs text-red-300 hover:bg-red-900/20 disabled:opacity-60"
    >
      {deleting ? "Deleting…" : "Delete"}
    </button>
  );
}


