import { Link } from "./ui/link";

export const Navbar = () => {
  return (
    <div className="relative">
      <nav className="absolute z-10 flex w-full flex-1 justify-center gap-6 p-4">
        <Link href="#home" className="text-white">
          Home
        </Link>
        <Link href="#" className="text-white">
          RSVP
        </Link>
        <Link href="#" className="text-white">
          Registry
        </Link>
      </nav>
    </div>
  );
};
