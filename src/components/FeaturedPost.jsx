function FeaturedPost() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">

      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            My latest story
          </h2>
        </div>
      </div>

      <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="grid md:grid-cols-2">

          {/* Image placeholder */}
          <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-500">

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-7xl font-bold opacity-20">
                  01
                </p>

                <p className="mt-2 text-sm uppercase tracking-[0.3em] opacity-80">
                  Featured story
                </p>
              </div>
            </div>

          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-12">

            <div className="flex items-center gap-3 text-sm">
              <span className="rounded-full bg-violet-100 px-3 py-1 font-medium text-violet-700">
                Technology
              </span>

              <span className="text-zinc-400">
                6 min read
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              What I learned from building my first AI project
            </h3>

            <p className="mt-5 leading-7 text-zinc-600">
              Building something with AI isn't only about the
              technology. It's also about understanding problems,
              users, and how to turn an idea into something useful.
            </p>

            <div className="mt-8 flex items-center justify-between">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                  Y
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Yoel
                  </p>

                  <p className="text-xs text-zinc-500">
                    September 1, 2026
                  </p>
                </div>
              </div>

              <button className="text-sm font-semibold text-violet-600 transition group-hover:translate-x-1">
                Read article →
              </button>

            </div>

          </div>

        </div>

      </article>
    </section>
  );
}

export default FeaturedPost;