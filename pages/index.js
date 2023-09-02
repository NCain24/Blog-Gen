import Image from "next/image";
import HeroImage from '../public/hero.jpg'
import { Button } from "@material-tailwind/react";

import { Logo } from "../components/Logo";
import Link from "next/link";


export default function Home() {
 
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <Image src={HeroImage} alt="Hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-90 rounded-md backdrop-blur">
        <Logo />
        <p className="mt-[-30px]">
          AI-Powered Blog Generator using <strong>Next JS</strong> and{' '}
          <strong>OpenAI</strong>
        </p>
        <Link href="/post/new" className="hover:no-underline" >
          <Button className="btn bg-blue-800 hover:bg-blue-900">Begin</Button>
        </Link>
      </div>
      <div></div>
    </div>
  );
}
