import Image from "next/image";
import Banner from "./components/Banner";
import StatsCard from "./components/StatsCard";
import Friends from "./components/Friends";
import { Suspense } from 'react'
export default function Home() {
  const friendsPromise = fetch('/data.json');
  return (
    <>
        <div className="container mx-auto">
              <Banner></Banner>
              <StatsCard></StatsCard>
              <Suspense fallback={<div>Loading...</div>}>
                           <Friends friendsPromise={friendsPromise}></Friends>
              </Suspense>
        </div>
          
    </>
  );
}
