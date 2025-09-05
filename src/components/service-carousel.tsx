import Image from "next/image";

export default function ServiceCarousel() {
  return (
      <div className="flex justify-center">
        <section
        id="service-section"
        className="w-full max-w-[65rem] h-auto size-[23px] flex flex-wrap justify-around items-center gap-2 py-[3rem] sm:text-md text-sm"
      >
        <div className="flex flex-col justify-center items-center gap-2 text-center sm:mb-0 mb-4">
          <div className="flex gap-2">
            <Image src="/images/chatbot-icon.png" width={100} height={100} className="w-[2.5rem]" alt={""} />
          <strong className="flex self-center text-lg text-[#c3881c]">Service</strong>
          </div>
          <p className="mt-[-0.5rem]">
            Our chatbot is here round the <br></br> clock to answer your FAQs
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center sm:mb-0 mb-4">
          <div className="flex gap-2">
            <Image src="/images/chatbot-icon.png" width={100} height={100} className="w-[2.5rem]" alt={""} />
          <strong className="flex self-center text-lg text-[#c3881c]">Delivery</strong>
          </div>
          <p className="mt-[-0.5rem]">
            Nationwide shipping <br></br> is available.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center sm:mb-0 mb-4">
          <div className="flex gap-2">
            <Image src="/images/chatbot-icon.png" width={100} height={100} className="w-[2.5rem]" alt={""} />
          <strong className="flex self-center text-lg text-[#c3881c]">Quality</strong>
          </div>
          <p className="mt-[-0.5rem]">
            We ensure top-notch quality <br />
            in every item we sell.
          </p>
        </div>
      </section>
      </div>
  );
}
