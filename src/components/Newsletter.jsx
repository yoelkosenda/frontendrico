function Newsletter() {
  return (
    <section className="border-y border-zinc-200 bg-white">

      <div className="mx-auto max-w-6xl px-6 py-20">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Stay in the loop
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Get new articles in your inbox.
          </h2>

          <p className="mt-4 leading-7 text-zinc-600">
            No spam. Just occasional thoughts, stories, and
            interesting things worth sharing.
          </p>

          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">

            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-full border border-zinc-300 bg-zinc-50 px-5 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />

            <button
              type="submit"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-600"
            >
              Subscribe
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;