import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="bg-linear-to-r from-pink-500 to-pink-600 p-4 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            className="text-2xl font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href={"/"}
          >
            TypeChatLite
          </Link>
        </div>
      </header>
    </>
  );
}
