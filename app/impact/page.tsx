import Header from "@/components/Header";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Impact — Alif Pathan",
};

export default function ImpactPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main>
          <Impact />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
