"use client";

import { useEffect, useState } from "react";

const BIRTH_YEAR = 2004;
const BIRTH_MONTH = 11;
const BIRTH_DAY = 29;

function getAge(now: Date) {
  const birthdayThisYear = new Date(
    now.getFullYear(),
    BIRTH_MONTH,
    BIRTH_DAY,
  );
  const hasHadBirthday = now >= birthdayThisYear;
  const completedYears =
    now.getFullYear() - BIRTH_YEAR - (hasHadBirthday ? 0 : 1);
  const lastBirthday = new Date(
    BIRTH_YEAR + completedYears,
    BIRTH_MONTH,
    BIRTH_DAY,
  );
  const nextBirthday = new Date(
    BIRTH_YEAR + completedYears + 1,
    BIRTH_MONTH,
    BIRTH_DAY,
  );

  return (
    completedYears +
    (now.getTime() - lastBirthday.getTime()) /
      (nextBirthday.getTime() - lastBirthday.getTime())
  );
}

export default function AgeCounter() {
  const [age, setAge] = useState<string | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateAge = () => {
      setAge(getAge(new Date()).toFixed(10));
      animationFrameId = window.requestAnimationFrame(updateAge);
    };

    updateAge();

    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <span
      className="inline-block min-w-[15ch] tabular-nums"
      aria-label={age ? `${age} years old` : "Age loading"}
    >
      {age ?? "--.------------"}
    </span>
  );
}
