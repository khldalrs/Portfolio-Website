import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import Link from "next/link";

export default function SocialIcons() {
  const iconSize = 30;

  return (
    <div className="flex items-center space-x-4">
      <Link
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin size={iconSize} />
      </Link>
      <Link
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub size={iconSize} />
      </Link>
      <Link
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram size={iconSize} />
      </Link>
    </div>
  );
}
