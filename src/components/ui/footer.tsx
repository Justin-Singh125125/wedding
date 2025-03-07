import { Link } from "./link";
import { Heart, Mail, Calendar } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-400 px-6 py-12 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Decorative divider */}
        <div className="mb-8 flex items-center justify-center">
          <div className="h-px flex-grow bg-white/30" />
          <Heart className="mx-4 fill-white/80 text-white/80" size={24} />
          <div className="h-px flex-grow bg-white/30" />
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Contact column */}
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <h3 className="mb-2 font-semibold">Contact Us</h3>
            <Link
              href="mailto:jjgetsmarried.2025@gmail.com"
              className="flex items-center transition-colors hover:text-white/80"
            >
              <Mail className="mr-2" size={16} />
              jjgetsmarried.2025@gmail.com
            </Link>
          </div>

          {/* Navigation column */}
          <div className="flex flex-col items-center space-y-3">
            <h3 className="mb-2 font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Link
                href="#home"
                className="transition-colors hover:text-white/80"
              >
                Home
              </Link>
              <Link
                href="#timeline"
                className="transition-colors hover:text-white/80"
              >
                Timeline
              </Link>
              <Link
                href="#invitation"
                className="transition-colors hover:text-white/80"
              >
                Invitation
              </Link>
              <Link
                href="#rsvp"
                className="transition-colors hover:text-white/80"
              >
                RSVP
              </Link>
              <Link
                href="#registry"
                className="transition-colors hover:text-white/80"
              >
                Registry
              </Link>
              <Link
                href="#faq"
                className="transition-colors hover:text-white/80"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Couple info column */}
          <div className="flex flex-col items-center space-y-3 md:items-end">
            <h3 className="mb-2 font-semibold">Our Wedding</h3>
            <div className="flex items-center">
              <Calendar className="mr-2" size={16} />
              <span>2025</span>
            </div>
            <p className="text-center italic text-white/90 md:text-right">
              The marriage of Justin and Jenna Singh
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/70">
          &copy; {new Date().getFullYear()} Justin & Jenna Wedding. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
