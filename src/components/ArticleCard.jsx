function ArticleCard({ category, title, description, date, readTime }) {
  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg">

      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 transition group-hover:bg-violet-100 group-hover:text-violet-700">
          {category}
        </span>

        <span className="text-xs text-zinc-400">
          {readTime}
        </span>
      </div>

      <h3 className="text-xl font-bold leading-snug tracking-tight transition group-hover:text-violet-600">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-zinc-600">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-5">
        <span className="text-xs text-zinc-400">
          {date}
        </span>

        <button className="text-sm font-semibold text-zinc-900 transition group-hover:text-violet-600">
          Read →
        </button>
      </div>

    </article>
  );
}

export default ArticleCard;