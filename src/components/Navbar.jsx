import {useState} from "react";

function Navbar() {
  const [title, setTitle] = useState("Kelas Frond-End A");

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200/70 bg-[#fafafa]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          {title}
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a onClick={()=>{
            if (title === "Bukan Home") {
              setTitle("Home");
            } else {
              setTitle("Bukan Home")
            }
          }} 
          href="#" 
          className="text-violet-600">
            Home
          </a>

          <a
            onClick={()=>{setTitle("Articles")}}
            href="#articles"
            className="text-zinc-600 transition hover:text-zinc-950"
          >
            Articles
          </a>

          <a
          onClick={()=>{setTitle("About")}}
            href="#about"
            className="text-zinc-600 transition hover:text-zinc-950"
          >
            About
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:border-zinc-400 md:block">
            Search
          </button>

          <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-600">
            Subscribe
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;