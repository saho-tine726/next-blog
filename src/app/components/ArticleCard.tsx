import { Article } from '@/app/types/types';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ArticleCardProps = {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <Link href={`articles/${article.id}`} className="flex flex-col h-full rounded-xl overflow-hidden bg-white transition duration-500 hover:bg-slate-200 group ">
        <div className="overflow-hidden h-70 grow-0 shrink-0">
          <Image src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`} alt="" width={672} height={336} className="transition duration-500 group-hover:scale-110 !w-full" />
        </div>
        <div className="flex flex-col justify-start p-6 h-full">
          <h2 className="text-slate-900 text-lg sm:text-3xl font-bold line-clamp-2 sm:line-clamp-1">{article.title}</h2>
          <p className="mt-4 text-sm text-slate-400">{new Date(article.createdAt).toLocaleString()}</p>
          <p className="mt-3 text-slate-900 line-clamp-3 sm:line-clamp-2">
            {article.content}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCard