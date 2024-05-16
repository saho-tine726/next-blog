import ArticleList from './components/ArticleList'

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/blog`, { cache: 'no-store' });
  const articles = await res.json();

  return (
    <div>
      <section className="w-full">
        <ArticleList articles={articles} />
      </section>
    </div>
  )
}
