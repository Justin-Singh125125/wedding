"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "~/components/ui/typography";

const targetDate = "2025-06-28T00:00:00";

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
  const target = new Date(targetDate);
  const totalSeconds = Math.floor((target.getTime() - now.getTime()) / 1000);

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

type CountdownItemProps = {
  label: string;
  value: string;
};

const CountdownItem = ({ label, value }: CountdownItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-900 p-4">
      <Typography variant="h2" className="text-white">
        {value}
      </Typography>
      <Typography variant="h2" className="text-base text-white">
        {label}
      </Typography>
    </div>
  );
};

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownState>(
    initialCountdownState,
  );

  const updateCountdown = () => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  };

  useEffect(updateCountdown, []);

  return (
    <div className="flex justify-center gap-4">
      <CountdownItem label="Months" value={timeLeft.months.toString()} />
      <CountdownItem label="Weeks" value={timeLeft.weeks.toString()} />
      <CountdownItem label="Days" value={timeLeft.days.toString()} />
      <CountdownItem label="Hours" value={timeLeft.hours.toString()} />
      <CountdownItem label="Minutes" value={timeLeft.minutes.toString()} />
      <CountdownItem label="Seconds" value={timeLeft.seconds.toString()} />
    </div>
  );
};

export default Countdown;
