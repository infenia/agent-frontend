
'use client'
import { sendGAEvent } from "@next/third-parties/google";
export default function Home() {
  return (
    <main className="text-center">
      <h1 >Welcome to google analytics</h1>
      <button className="bg-blue-300 rounded-full p-3" onClick={
        ()=>{
          sendGAEvent('event','button-clicked',{value:'testing...'})
        }
      }>
        Click Me!
      </button>
    </main>
  );
}
