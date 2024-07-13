import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="relative grid grid-cols-3 p-6">
      <div />
      <div className="grid place-items-center">
        <h1 className="text-center">Justin & Jenna</h1>
      </div>
      <div className="flex justify-end">
        <Button variant="outline" className="border-pink-500">
          RSVP
        </Button>
      </div>
    </nav>
  );
};
