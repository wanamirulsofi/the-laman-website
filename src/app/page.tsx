import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyTheLaman } from "@/components/WhyTheLaman";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { WhyChoose } from "@/components/WhyChoose";
import { Reviews } from "@/components/Reviews";
import { BookNow } from "@/components/BookNow";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { PageLoader } from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <WhyTheLaman />
        <Experience />
        <Gallery />
        <Location />
        <WhyChoose />
        <Reviews />
        <BookNow />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
