"use client";

import Chat from "./chat/Chat";


export default async function Home() {
  await new Promise(resolve=>setTimeout(resolve,3000));
  
  return (
    <main className="bg-auto ">
      <Chat/>
    </main>
  );
}
