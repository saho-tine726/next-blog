import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 bg-amber-100 py-4 sm:py-6 px-3 sm:px-10 z-50">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-lg sm:text-3xl">
            <Link href="/">Next.js Blog</Link>
          </h1>
        </div>
        <div>
          <nav>
            <Link
              href="/articles/new"
              className="bg-red-400 px-3 sm:px-5 py-2 sm:py-3 rounded-full text-white text-sm sm:text-lg font-medium transition duration-500 hover:bg-red-600"
            >
              記事を投稿する
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
