function Footer() {
  return (
    <footer id="about" className="bg-zinc-950 text-white">

      <div className="mx-auto max-w-6xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              reva<span className="text-violet-400">.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              A personal space for ideas, stories, projects,
              technology, and everything I'm learning along
              the way.
            </p>
          </div>

          <div className="flex gap-12 md:justify-end">

            <div>
              <h3 className="text-sm font-semibold">
                Explore
              </h3>

              <div className="mt-4 space-y-3 text-sm text-zinc-400">
                <a href="#" className="block hover:text-white">
                  Home
                </a>

                <a href="#articles" className="block hover:text-white">
                  Articles
                </a>

                <a href="#about" className="block hover:text-white">
                  About
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Social
              </h3>

              <div className="mt-4 space-y-3 text-sm text-zinc-400">
                <a href="#" className="block hover:text-white">
                  Instagram
                </a>

                <a href="#" className="block hover:text-white">
                  GitHub
                </a>

                <a href="#" className="block hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6 text-xs text-zinc-500">
          © 2026 Reva. Built with React & Tailwind CSS.
        </div>

      </div>

    </footer>
  );
}

export default Footer;