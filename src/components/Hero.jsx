function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">

        <div className="max-w-3xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Welcome to my corner of the internet
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Ideas, stories,
            <br />
            and things I{" "}
            <span className="text-violet-600">learn.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
            A personal blog about technology, university life,
            projects, creativity, and the lessons I discover along
            the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#articles"
              className="rounded-full bg-zinc-900 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-violet-600"
            >
              Explore articles →
            </a>

            <a
              href="#about"
              className="rounded-full border border-zinc-300 bg-white px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:border-zinc-500"
            >
              About me
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;