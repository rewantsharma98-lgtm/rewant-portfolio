import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandMenu from "@/components/CommandMenu";
import Terminal from "@/components/Terminal";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import LoadingScreen from "@/components/LoadingScreen";



export default function Home() {
  return (
    <main className="bg-[#090909] text-[#EAEAEA] min-h-screen overflow-hidden">
      <LoadingScreen />
      {/* Subtle Noise Texture */}
      <div className="fixed inset-0 opacity-[0.015] bg-[url('/noise.png')] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">

        <Navbar />

        <Hero />

        <About />

        <Terminal />
        
        <FeaturedProject />
   
        <CurrentlyExploring />

        <Skills />

        <Experience />

        <Contact />
        
        <CommandMenu />

        <Footer />
      </div>
    </main>
  );
}