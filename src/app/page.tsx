import Image from "next/image";
import Link from "next/link";
import ServiceCarousel from "../components/service-carousel";
import NewArrivals from "../components/new-arrivals";

export default function Homepage() {
  return (
    <div className="p-[1.5rem] min-h-[100dvh]">
      <nav
        id="intro-section"
        className="w-full h-auto flex justify-center mt-[1rem]"
      >
        {/* Parent container must be relative for fill */}
        <div
          id="intro-bg"
          className="relative w-full rounded-[15px] flex flex-wrap items-center justify-center overflow-hidden"
        >
          {/* Background image with fill */}
          <Image
            src="/images/intro-bg.png"
            alt="Intro Background"
            fill
            className="object-cover object-center -z-10"
            priority
          />

          <div
            id="intro-LC"
            className="moveFromLeft min-w-[15rem] lg:max-w-[30rem] flex flex-col justify-center items-center lg:items-start lg:mr-[-4rem] mt-10 lg:mt-0 px-10 lg:px-0"
          >
            {/* Desktop intro text */}
            <Image
              src="/images/intro-text-desktop.png"
              alt="Intro Text Desktop"
              width={800}
              height={400}
              className="hidden lg:block w-full h-auto mb-[1.5rem]"
            />
            

            {/* Mobile intro text */}
            <Image
              src="/images/intro-text-mobile.png"
              alt="Intro Text Mobile"
              width={400}
              height={200}
              className="block lg:hidden w-full h-auto mb-[1.5rem] mt-10"
            /><Link href="/new-arrivals" className="lg:mt-[-50px]">
          <button id="intro-btn" className="rounded-[10px] cursor-pointer px-[clamp(12px,2.5vw,20px)] py-[clamp(8px,1.5vw,8px)] text-[clamp(0.875rem,2vw,1rem)] hover:bg-[#e0b9a4] transition bg-[#f8e8db]">
            Shop Now
          </button></Link>
          </div>

          <Image
            src="/images/intro-image.png"
            alt="Intro Image"
            width={600}
            height={600}
            className="moveFromRight min-w-[10px] max-w-[35rem] h-auto"
          />
        </div>
      </nav>
      <ServiceCarousel />
      <NewArrivals />
    </div>
  );
}
