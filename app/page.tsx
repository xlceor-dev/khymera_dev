"use client";
import { useState } from "react";

export default function Home() {
  const [servo1, setServo1] = useState(0);
  const [servo2, setServo2] = useState(0);
  const [servo3, setServo3] = useState(0);
  const [servo4, setServo4] = useState(0);
  const [servo5, setServo5] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="w-full p-10  flex items-center justify-center text-4xl bg-linear-to-br from-gray-300 to-gray-600 font-extrabold rounded-2xl">Debugging Robotic Prothesis </h1>

        <div className="flex flex-col w-full gap-6">
          <Servo label="Servo 1" value={servo1} setValue={setServo1} />
          <Servo label="Servo 2" value={servo2} setValue={setServo2} />
          <Servo label="Servo 3" value={servo3} setValue={setServo3} />
          <Servo label="Servo 4" value={servo4} setValue={setServo4} />
          <Servo label="Servo 5" value={servo5} setValue={setServo5} />
        </div>

      </main>
    </div>
  );
}

function Servo({
  label,
  value,
  setValue
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900">
      <span className="w-24 font-bold">{label}</span>

      <button
        className="px-4 py-2 rounded-lg bg-red-500 text-white"
        onClick={() => setValue(Math.max(0, value - 1))}
      >
        -
      </button>

      <span className="text-2xl w-10 text-center">{value}</span>

      <button
        className="px-4 py-2 rounded-lg bg-green-500 text-white"
        onClick={() => setValue(Math.min(90, value + 1))}
      >
        +
      </button>
    </div>
  );
}