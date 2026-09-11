import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedPost from "./components/FeaturedPost";
import Articles from "./components/Articles";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Greetings from "./components/greetings";


const mhs=[
  {name: "Yoel", age: 19},
  {name: "Reva", age: 20},
  {name: "Rizky", age: 21},
]

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      <main>

        <Hero />
        <FeaturedPost />
        <Articles />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );  
}

export default App;
