"use client";

import { useLastFM } from "use-last-fm";
import Link from "next/link";
const token = process.env.NEXT_PUBLIC_LASTFM_API_KEY!;

export default function CurrentlyPlaying() {
  const lastFM = useLastFM("nluziaf", token);

  if (lastFM.status === "error") {
    return <p>Could not connect to LastFM.</p>;
  }

  if (lastFM.status !== "playing") {
    return <p>NLuziaf is not listening to any song.</p>;
  }

  return (
    <div className="rounded-md border border-transparent bg-[#a4885c] bg-opacity-5 p-4 transition duration-200 hover:border-[#a4885c]">
      <Link href={lastFM.song.url}>
        <div>
          <p className="text-2xl text-[#a4885c]">NLuziaf is listening to:</p>
          <p>
            "{lastFM.song.name}" by {lastFM.song.artist}
          </p>
        </div>
      </Link>
    </div>
  );
}
