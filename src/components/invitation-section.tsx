/* eslint-disable @next/next/no-img-element */
import React from "react";
import InvitationImage from "../assets/invitation.png";

export const InvitationSection = () => {
  return (
    <section id="invitation">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-20">
        <img
          src={InvitationImage.src}
          alt="Wedding Invitation"
          className="w-full object-cover"
        />
        <div className="flex flex-col space-y-4">
          <a
            href="https://www.google.com/maps?q=9440+Bar+Du+lane+Sacramento,+CA+95829"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-400 hover:underline"
          >
            <h2 className="text-md lg:text-2xl">
              WOLFE HEIGHTS: 9440 Bar Du lane Sacramento, CA 95829
            </h2>
          </a>
          <iframe
            className="w-full flex-1"
            loading="lazy"
            src="https://maps.google.com/maps?q=38.475319,-121.347603&z=15&output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
