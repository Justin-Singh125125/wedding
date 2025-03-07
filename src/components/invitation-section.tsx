/* eslint-disable @next/next/no-img-element */
import React from "react";

export const InvitationSection = () => {
  return (
    <section id="invitation" className="space-y-10">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-20">
        <img
          src="https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH4Y8rByPNG9eM1ZJHsV6B2dugvqDpUAmTnPQi"
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
            <h4>
              WOLFE HEIGHTS ESTATES WINERY: <br />
              9440 Bar Du lane Sacramento, CA 95829
            </h4>
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
