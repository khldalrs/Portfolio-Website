import Image from "next/image";
import personalPicture from "@/public/personal-picture.png";
import SocialIcons from "@/public/social-icons";

export default function About() {
  return (
    <div className="flex gap-4 justify-center mt-20 scroll-mt-24" id="about">
      <div className="flex flex-col gap-4 w-9/12">
        <h1 className="text-4xl font-bold mb-4">Hi! I&apos;m Khalid.</h1>
        <p className="text-base text-gray-800 dark:text-gray-300">
          Software Engineer with over 1 year of hands-on experience developing
          robust web applications using Next.js. Proficient in integrating cloud
          services and back-end systems into ReactJS (NextJS) applications to
          enhance functionality and performance. Always eager to explore modern
          tools to deliver innovative software solutions.
        </p>
        <SocialIcons />
      </div>
      <div className="w-3/12 flex-1">
        <Image
          src={personalPicture}
          alt="Khalid's picture"
          className="border-2 border-gray-100 rounded-full object-cover w-40 h-40"
        />
      </div>
    </div>
  );
}
