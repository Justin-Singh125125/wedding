"use client";

import React, { useState, useEffect } from "react";

import { Clock } from "lucide-react";
import { RSVP_TARGET_DATE } from "~/constants";

type CountdownState = {
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const initialCountdownState: CountdownState = {
  months: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const calculateTimeLeft = (): CountdownState => {
  const now = new Date();
  const totalSeconds = Math.floor(
    (RSVP_TARGET_DATE.getTime() - now.getTime()) / 1000,
  );

  if (totalSeconds <= 0) {
    return initialCountdownState;
  }

  const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
  const weeks = Math.floor(totalSeconds / (7 * 24 * 60 * 60)) % 4;
  const days = Math.floor(totalSeconds / (24 * 60 * 60)) % 7;
  const hours = Math.floor(totalSeconds / (60 * 60)) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = totalSeconds % 60;

  return {
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds,
  };
};

const CountdownUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-400 text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base">
      {value}
    </div>
    <span className="mt-1 text-xs text-gray-600 sm:text-sm">{label}</span>
  </div>
);

export const RSVPCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownState>(
    initialCountdownState,
  );

  const startCountdown = () => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  };

  useEffect(startCountdown, []);

  return (
    <div className="rounded-md bg-quatinary-400 p-4">
      <div className="mb-2 flex items-center justify-center gap-2 text-sm font-medium">
        <Clock className="h-4 w-4" />
        <span>Time Remaining to RSVP</span>
      </div>
      <div className="flex justify-center gap-2 sm:gap-4">
        <CountdownUnit label="Months" value={timeLeft.months.toString()} />
        <div className="hidden sm:block">
          <CountdownUnit label="Weeks" value={timeLeft.weeks.toString()} />
        </div>
        <CountdownUnit label="Days" value={timeLeft.days.toString()} />
        <CountdownUnit label="Hours" value={timeLeft.hours.toString()} />
        <CountdownUnit label="Minutes" value={timeLeft.minutes.toString()} />
        <CountdownUnit label="Seconds" value={timeLeft.seconds.toString()} />
      </div>
    </div>
  );
};
