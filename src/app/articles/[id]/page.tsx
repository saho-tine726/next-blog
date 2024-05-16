import DeleteButton from '@/app/components/DeleteButton';
import Image from 'next/image';
import Link from "next/link";
import React from 'react'

const Article = async ({ params }: { params: { id: string } }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/blog/${params.id}`, { next: { revalidate: 60 } });
  const detailArticle = await res.json();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="pt-3 sm:pt-6 pb-7 sm:pb-10 px-4 sm:px-12 bg-white rounded-lg">
        <div className="text-slate-400">
          <p>{new Date(detailArticle.createdAt).toLocaleString()}</p>
        </div>
        <div className="mt-3">
          <Image
            src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
            width={672}
            height={336}
            alt=""
          />
        </div>
        <h1 className="text-2xl sm:text-4xl mt-5 font-bold flex items-center justify-center">
          <span>{detailArticle.title}</span>
        </h1>
        <div className="mt-6 sm:text-lg leading-relaxed text-justify">
          <p>{detailArticle.content}</p>
        </div>
        <div className="text-right mt-8">
          <DeleteButton id={detailArticle.id} />
        </div>
      </div>
      <div className="text-center mt-10 sm:mt-20">
        <Link
          href="/"
          className="bg-red-400 px-5 py-2 sm:py-3 rounded-full text-white text-sm sm:text-lg font-medium transition duration-500 hover:bg-red-600"
        >
          記事一覧に戻る
        </Link>
      </div>
    </div>
  )
}

export default Article;