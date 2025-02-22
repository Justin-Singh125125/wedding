/* eslint-disable @next/next/no-img-element */
import React from "react";
import InvitationImage from "../assets/invitation.png";

export const InvitationSection = () => {
  return (
    <section id="invitation" className="bg-secondary-400 p-10 sm:p-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-20">
        <img
          src={InvitationImage.src}
          alt="Wedding Invitation"
          className="w-full object-cover"
        />
        <div className="space-y-4">
          <a
            href="https://www.google.com/maps?q=9440+Bar+Du+lane+Sacramento,+CA+95829"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-400 hover:underline"
          >
            <h2 className="text-2xl">
              WOLFE HEIGHTS: 9440 Bar Du lane Sacramento, CA 95829
            </h2>
          </a>
          <iframe
            className="h-[20rem] w-full sm:h-full"
            loading="lazy"
            src="https://maps.google.com/maps?q=38.475319,-121.347603&z=15&output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
