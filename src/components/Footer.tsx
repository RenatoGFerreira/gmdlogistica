import Link from "next/link";
import SocialLinksCard from "@/assets/socialMedia";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-light-gray py-6">
      <div className="container mx-auto px-4 text-center">
        <nav className="flex justify-evenly ">
          <Link
            className="hover:text-secondary-blue transition-colors duration-400"
            href="#"
          >
            Outros Serviços
          </Link>
          <Link
            className="hover:text-secondary-blue transition-colors duration-400"
            href="#"
          >
            Trabalhe Conosco
          </Link>
          <Link
            className="hover:text-secondary-blue transition-colors duration-400"
            href="#"
          >
            Área do Cliente
            </Link>
        </nav>
        <div className="flex justify-center">
          <SocialLinksCard />
        </div>
        <p className="my-4">
          &copy; {new Date().getFullYear()} GMD LOGÍSTICA. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
