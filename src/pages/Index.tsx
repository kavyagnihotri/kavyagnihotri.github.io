
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Achievements } from '@/components/Achievements';
import { Hobbies } from '@/components/Hobbies';
import { Volunteering } from '@/components/Volunteering';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Education />
        <Experience />
        {/* <Projects /> */}
        {/* <Skills /> */}
        <Achievements />
        <Hobbies />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
