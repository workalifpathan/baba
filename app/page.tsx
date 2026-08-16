import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LongForms from "@/components/LongForms";
import Shorts from "@/components/Shorts";
import Impact from "@/components/Impact";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Drives from "@/components/Drives";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <LongForms />
        <Shorts />
        <Impact />
        <Clients />
        <Testimonials />
        <Drives />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
