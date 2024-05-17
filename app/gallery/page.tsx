"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { StickyScroll } from "../_components/ScrollCard";
import HeroNav from "../_components/Hero-nav";

const content = [
  {
    title: "Branding Strategy",
    description:
      "We meticulously craft an enduring brand identity that resonates deeply with your audience. Through captivating visuals and a compelling narrative, we encapsulate your brand's essence. Our branding strategies ensure your business stands out from competitors.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/Hero1.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "We unleash the power of digital channels to amplify your brand's reach. Our strategic, data-driven campaigns engage consumers across platforms. From search engine optimization to social media advertising, we maximize your digital presence.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/Hero2.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Social media management",
    description:
      "We harness the boundless potential of social media to foster thriving communities. Our dynamic storytelling cultivates brand advocacy and engagement. From content curation to influencer collaborations, we amplify your social presence.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/Hero8.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "We weave spellbinding stories that captivate and inspire your audience. Our content creation services forge emotional connections that elevate your brand's narrative. Through compelling visuals, videos, and written pieces, we bring your brand to life.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/Hero3.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Market research",
    description:
      "We unveil profound insights into consumer behavior and market landscapes. Our data-driven market research fuels strategies for sustainable growth. Through in-depth analysis, we empower your business to make informed decisions and maintain a competitive edge.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {

  return (
    <div className="">
        <div className=" absolute top-0 z-50 right-0 left-0">
            <HeroNav/>
        </div>
        <div>
            <StickyScroll content={content} />
        </div>
    </div>
  );
}
