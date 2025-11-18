import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [grade, setGrade] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="w-full p-10  flex items-center justify-center text-4xl bg-linear-to-br from-gray-300 to-gray-600 font-extrabold rounded-2xl">Debugging Robotic Prothesis </h1>
        <div className="w-full h-full flex">
          
        </div>
      </main>
    </div>
  );
}

