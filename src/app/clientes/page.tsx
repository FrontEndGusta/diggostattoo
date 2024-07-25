import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";
import Image from "next/image";

export default function Clientes() {
  return (
    <section id="testimonials" className="w-full py-20 flex flex-col mx-auto">
       <div className="w-full flex items-center justify-center gap-4 pb-5 px-5">
            <Image
              src="/icons/sectionFor/client.svg"
              alt="client"
              width={50}
              height={50}
              className="mb-4"
            />
            <h1 className="text-3xl font-bold tracking-[.1em]">FEEDBACKS DOS CLIENTES</h1>
          </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};
