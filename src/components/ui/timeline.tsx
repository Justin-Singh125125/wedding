"use client";

import { useEffect, useRef } from "react";
import {
  Users,
  Heart,
  Camera,
  CupSoda,
  UtensilsCrossed,
  Megaphone,
  Cake,
  Gamepad,
  Music,
  Gift,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";

// Define the timeline item type with an icon as a React node.
type TimelineItemType = {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

// Your original timeline data list with 11 items.
const weddingTimeline: TimelineItemType[] = [
  {
    id: 1,
    date: "4:00PM",
    title: "Guests Arrive",
    description: "Guests begin arriving and taking their seats.",
    icon: <Users className="stroke-black" />,
  },
  {
    id: 2,
    date: "4:00PM",
    title: "Ceremony",
    description: "The wedding ceremony commences with heartfelt vows.",
    icon: <Heart className="stroke-black" />,
  },
  {
    id: 3,
    date: "4:00PM",
    title: "Photos",
    description: "Capture precious moments with a professional photo session.",
    icon: <Camera className="stroke-black" />,
  },
  {
    id: 4,
    date: "4:00PM",
    title: "Cocktails",
    description: "Enjoy a variety of refreshing cocktails while mingling.",
    icon: <CupSoda className="stroke-black" />,
  },
  {
    id: 5,
    date: "4:00PM",
    title: "Dinner",
    description: "A delightful dinner service featuring a gourmet menu.",
    icon: <UtensilsCrossed className="stroke-black" />,
  },
  {
    id: 6,
    date: "4:00PM",
    title: "Dessert Announcement - Sip and Floss",
    description: "A fun announcement introducing the dessert course.",
    icon: <Megaphone className="stroke-black" />,
  },
  {
    id: 7,
    date: "4:00PM",
    title: "Cake Cutting",
    description: "Cutting of the wedding cake and a sweet celebration.",
    icon: <Cake className="stroke-black" />,
  },
  {
    id: 8,
    date: "4:00PM",
    title: "Games",
    description: "Engage in entertaining games and activities for all ages.",
    icon: <Gamepad className="stroke-black" />,
  },
  {
    id: 9,
    date: "4:00PM",
    title: "Dance",
    description: "Open the dance floor and celebrate with music.",
    icon: <Music className="stroke-black" />,
  },
  {
    id: 10,
    date: "4:00PM",
    title: "Wrap It Up",
    description: "Closing remarks and thank you's as the event winds down.",
    icon: <Gift className="stroke-black" />,
  },
  {
    id: 11,
    date: "4:00PM",
    title: "Get Out",
    description: "The event concludes and guests begin to depart.",
    icon: <LogOut className="stroke-black" />,
  },
];

// Timeline Item Component using the modified type.
const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItemType;
  index: number;
}) => {
  return (
    <motion.div
      className="relative flex gap-4 md:gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Date on the left */}
      <div className="pt-1 text-left text-sm font-medium text-gray-600 md:text-base">
        {item.date}
      </div>

      {/* Icon in the middle with connector */}
      <div className="flex flex-col items-center">
        <motion.div
          className="relative z-10 rounded-full border-4 border-primary-400 bg-primary-300/20 p-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            delay: index * 0.2 + 0.2,
          }}
        >
          <div className="text-primary-400">{item.icon}</div>
        </motion.div>
        {index < weddingTimeline.length - 1 && (
          <motion.div
            className="w-0.5 grow bg-primary-400"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          />
        )}
      </div>

      {/* Content on the right */}
      <div className="grow pb-10">
        <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
          {item.title}
        </h3>
        <p className="mt-1 text-gray-600">{item.description}</p>
      </div>
    </motion.div>
  );
};

export function WeddingTimeline({
  items = weddingTimeline,
}: {
  items?: TimelineItemType[];
}) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const timelineItems =
      timelineRef.current?.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => {
      timelineItems?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div ref={timelineRef} className="grid justify-center">
      {items.map((item, index) => (
        <div key={item.id} className="timeline-item grid">
          <TimelineItem item={item} index={index} />
        </div>
      ))}
    </div>
  );
}
