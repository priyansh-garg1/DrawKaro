import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <h1 className="text-black">
      <Header/>
      <Hero/>
    </h1>
  );
}
