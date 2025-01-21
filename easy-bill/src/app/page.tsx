import { Navbar } from "@/components/Landing/Navbar";
import { Footer } from "@/components/Landing/Footer";
import { Container } from "@/components/Landing/Container";
import { Hero } from "@/components/Landing/Hero";
import { SectionTitle } from "@/components/Landing/SectionTitle";
import { Benefits } from "@/components/Landing/Benefits";
import { Video } from "@/components/Landing/Video";
import { benefitOne, benefitTwo } from "@/components/Landing/data";

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <SectionTitle preTitle="Features" title=" Our Features You Can Get">
          Whether you are running a retail operation, offering services, or
          managing projects, EasyBill helps streamline your invoicing process
          and keeps your business running smoothly.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />

        <SectionTitle preTitle="Watch a video" title="See EasyBill in Action">
          Watch how EasyBill simplifies invoicing, saves you time, and helps you
          create professional invoices effortlessly. Discover the features that
          make managing your business finances easier and more efficient!
        </SectionTitle>

        <Video videoId="fZ0D0cnR88E" />
      </Container>
      <Footer />
    </>
  );
}
