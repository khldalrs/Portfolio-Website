import { Education } from "@/components/Education";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { Experience } from "@/components/Experience";
import ContactForm from "@/components/Contact";
export default function Home() {
  return (
    <div className="w-7/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Header /> */}
        <About />
        <Experience />
        <Education />
        <Skills />
        <ContactForm />
      </main>
    </div>
  );
}
