import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Shubham Jayswal | Full Stack Web Developer",
  description: "Portfolio of Shubham Jayswal, Full Stack Software Developer with 2 years of experience in MERN stack, Next.js, Redis, and RESTful APIs.",
  keywords: ["Shubham Jayswal", "Full Stack Developer", "MERN Stack", "Next.js", "React", "Node.js", "Bengaluru", "Bilimora"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafbfc] text-[#475569] relative selection:bg-[#6366f1] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}


