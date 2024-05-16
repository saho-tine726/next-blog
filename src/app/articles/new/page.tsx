"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const isFormValid = () => {
    return id.trim() !== "" && title.trim() !== "" && content.trim() !== "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/api/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, content })
    });

    setLoading(false);
    router.push("/");
    router.refresh();
  }

  return (
    <div className="sm:py-8 sm:px-4 md:px-12">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">新規投稿</h2>

      <form
        className="bg-neutral-100 px-3 py-6 sm:p-10 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-8">
          <label className="block text-gray-700 sm:text-lg font-bold mb-2">
            URL名（英語）
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setId(e.target.value)}
            pattern="^[0-9a-zA-Z]+$"
            placeholder="hogehoge"
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="タイトル"
          />
        </div>

        <div className="mb-10">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            本文
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-60"
            onChange={(e) => setContent(e.target.value)}
            placeholder="ここに内容を書いてください"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`py-3 px-6 sm:text-2xl border text-white rounded-full ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : isFormValid()
                ? "bg-teal-500 transition duration-500 hover:bg-teal-600"
                : "bg-gray-400 cursor-not-allowed"
              }`}
            disabled={loading || !isFormValid()}
          >
            投稿する
          </button>

        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;