import ArticleCard from "./ArticleCard";

const articles = [
  {
    category: "Technology",
    title: "Understanding AI beyond the hype",
    description:
      "A beginner-friendly look at what artificial intelligence actually does and why it matters.",
    date: "Aug 28, 2026",
    readTime: "5 min read",
  },
  {
    category: "University",
    title: "Things university is teaching me",
    description:
      "Lessons from projects, assignments, organizations, and the everyday chaos of campus life.",
    date: "Aug 24, 2026",
    readTime: "4 min read",
  },
  {
    category: "Projects",
    title: "From idea to prototype",
    description:
      "What happens when a simple idea turns into a real project that people can actually use.",
    date: "Aug 20, 2026",
    readTime: "7 min read",
  },
  {
    category: "Personal",
    title: "Learning to enjoy the process",
    description:
      "Sometimes progress isn't about moving faster. It's about appreciating where you are.",
    date: "Aug 15, 2026",
    readTime: "3 min read",
  },
  {
    category: "Design",
    title: "Why simple interfaces work",
    description:
      "Some thoughts about designing interfaces that are useful without being overwhelming.",
    date: "Aug 10, 2026",
    readTime: "5 min read",
  },
  {
    category: "Learning",
    title: "How I approach something new",
    description:
      "My simple process for learning unfamiliar technologies and turning confusion into understanding.",
    date: "Aug 05, 2026",
    readTime: "6 min read",
  },
];

function Articles() {
  return (
    <section id="articles" className="mx-auto max-w-6xl px-6 pb-24">

      <div className="mb-10 flex items-end justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Latest articles
          </h2>
        </div>

        <button className="hidden text-sm font-semibold text-zinc-600 transition hover:text-violet-600 md:block">
          View all →
        </button>

      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            category={article.category}
            title={article.title}
            description={article.description}
            date={article.date}
            readTime={article.readTime}
          />
        ))}

      </div>

    </section>
  );
}

export default Articles;