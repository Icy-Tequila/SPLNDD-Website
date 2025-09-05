import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    name: "SPLND'D Ivory",
    price: 999,
    oldPrice: 1499,
    image: "/images/IVORY.png",
    discount: "33% off",
  },
  {
    name: "SPLND'D Ivory",
    price: 999,
    oldPrice: 1499,
    image: "/images/MIDNIGHT.png",
    discount: "33% off",
  },
  {
    name: "SPLND'D Ivory",
    price: 999,
    oldPrice: 1499,
    image: "/images/CRIMSON TIE DYE.png",
    discount: "33% off",
  },
  {
    name: "SPLND'D Ivory",
    price: 999,
    oldPrice: 1499,
    image: "/images/AMETHYST TIE DYE.png",
    discount: "33% off",
  },
];

export default function NewArrivals() {
  return (
    <div className="flex justify-center">
      <section className="w-full h-[500px] rounded-4xl bg-[#f2f2f2] shadow-[inset_0_6px_15px_rgba(0,0,0,0.05)] flex flex-col gap-4 items-center">
        <div className="text-2xl font-semibold flex justify-center items-center w-full h-[90px]">
          New Arrivals
        </div>
        <div className="grid grid-cols-4 gap-5 w-[80%] mb-10 hidden lg:grid">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white min-w-[13rem] shadow-sm rounded-lg flex flex-col justify-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-4">
                <div>{product.name}</div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="text-gray-400 line-through">
                      ₱{product.oldPrice}
                    </span>{" "}
                    <span className="text-[#da7046] font-semibold">
                      ₱{product.price}
                    </span>
                  </div>
                  <div className="text-red-500 bg-red-300/50 text-xs rounded-sm px-2 py-1">
                    {product.discount}
                  </div>
                </div>
                <div className="w-full p-2 text-sm mt-2 bg-[#f8e8db] hover:bg-[#f5e0cf] cursor-pointer text-center rounded-sm">
                  Add to cart
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* INSERT MOBILE CAROUSEL HERE */}
        <div className="w-[80%] max-h-[500px] relative lg:hidden">
          <Carousel className="h-full">
            <CarouselContent className="flex gap-5 h-full">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2"
                >
                  {/* Card layout identical to desktop */}
                  <div className="bg-white min-w-[13rem] shadow-sm rounded-lg flex flex-col justify-center h-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={400}
                      className="w-full h-auto rounded-t-lg"
                    />
                    <div className="p-4">
                      <div>{product.name}</div>
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span className="text-gray-400 line-through">
                            ₱{product.oldPrice}
                          </span>{" "}
                          <span className="text-[#da7046] font-semibold">
                            ₱{product.price}
                          </span>
                        </div>
                        <div className="text-red-500 bg-red-300/50 text-xs rounded-sm px-2 py-1">
                          {product.discount}
                        </div>
                      </div>
                      <div className="w-full p-2 text-sm mt-2 bg-[#f8e8db] hover:bg-[#f5e0cf] cursor-pointer text-center rounded-sm">
                        Add to cart
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Next/Prev buttons only on mobile/tablet */}
            <CarouselPrevious className="absolute top-1/2 -left-2 transform -translate-y-1/2 block lg:hidden" />
            <CarouselNext className="absolute top-1/2 -right-2 transform -translate-y-1/2 block lg:hidden" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
