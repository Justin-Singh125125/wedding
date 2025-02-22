"use client";

import React, { useState, useEffect } from "react";
import { CountdownItem } from "./countdown-item";
import { TARGET_DATE } from "~/constants";

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
    (TARGET_DATE.getTime() - now.getTime()) / 1000,
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

export const Countdown = () => {
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
    <div className="flex justify-center gap-2 sm:gap-4">
      <CountdownItem label="Months" value={timeLeft.months.toString()} />
      <div className="hidden sm:block">
        <CountdownItem label="Weeks" value={timeLeft.weeks.toString()} />
      </div>
      <CountdownItem label="Days" value={timeLeft.days.toString()} />
      <CountdownItem label="Hours" value={timeLeft.hours.toString()} />
      <CountdownItem label="Minutes" value={timeLeft.minutes.toString()} />
      <CountdownItem label="Seconds" value={timeLeft.seconds.toString()} />
    </div>
  );
};

export default Countdown;
