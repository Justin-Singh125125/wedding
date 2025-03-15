"use client";

import { useEffect, useRef } from "react";
import {
  Users,
  Heart,
  Trophy,
  UtensilsCrossed,
  Cake,
  Gift,
  Music,
  PartyPopper,
  ThumbsUp,
  Wine,
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
    date: "4:30PM",
    title: "Ceremony",
    description:
      "The wedding ceremony begins with heartfelt vows and a beautiful exchange of rings.",
    icon: <Heart className="stroke-black" />,
  },
  {
    id: 3,
    date: "5:00PM",
    title: "Cocktail Hour",
    description:
      "Enjoy a selection of refreshing cocktails and appetizers as guests mingle.",
    icon: <Wine className="stroke-black" />,
  },
  {
    id: 4,
    date: "6:00PM",
    title: "Dinner",
    description:
      "Enjoy a Filipino buffet, don't forget to take photos with us before you grab your plate.",
    icon: <UtensilsCrossed className="stroke-black" />,
  },
  {
    id: 5,
    date: "7:30PM",
    title: "Dessert",
    description: "Indulge in a delectable dessert to sweeten the celebration.",
    icon: <Cake className="stroke-black" />,
  },
  {
    id: 6,
    date: "7:45PM",
    title: "Games",
    description:
      "Enjoy watching us participate in fun wedding games and activities.",
    icon: <Trophy className="stroke-black" />,
  },
  {
    id: 7,
    date: "7:50PM",
    title: "Dancing",
    description: "Dance the night away to lively music and celebrate in style.",
    icon: <Music className="stroke-black" />,
  },
  {
    id: 8,
    date: "10:00PM",
    title: "Guests Begin to Leave",
    description:
      "Guests start departing, cherishing the wonderful memories of the evening.",
    icon: <Gift className="stroke-black" />,
  },
  {
    id: 9,
    date: "11:00PM",
    title: "Thanks for Coming",
    description:
      "A heartfelt thank you to everyone for celebrating our special day.",
    icon: <PartyPopper className="stroke-black" />,
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
      <span className="pt-1 text-left text-gray-600">{item.date}</span>

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
        <h5 className="font-semibold text-gray-900">{item.title}</h5>
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
