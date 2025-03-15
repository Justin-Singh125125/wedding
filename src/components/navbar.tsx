/* eslint-disable @next/next/no-img-element */
import { Link } from "./ui/link";

export const Navbar = () => {
  return (
    <div className="relative">
      <nav className="absolute z-10 flex w-full flex-1 items-center justify-center gap-6 p-4 text-white">
        <Link href="#timeline">Timeline</Link>
        <Link href="#invitation">Invitation</Link>
        <Link href="#rsvp">RSVP</Link>
        <Link href="#registry">Registry</Link>
        <Link href="#faq">FAQ</Link>
      </nav>
    </div>
  );
};
