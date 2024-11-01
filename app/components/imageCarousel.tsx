import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import AutoScroll from "embla-carousel-auto-scroll";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      axis: "y",
    },
    [AutoScroll({ playOnInit: true })]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla h-full overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex flex-col">
        <div className="embla__slide flex-none ">
          <Image alt="" src="/sokcho1.png" width="480" height="320" />
        </div>
        <div className="embla__slide flex-none">
          <Image alt="" src="/sokcho2.png" width="480" height="320" />
        </div>
        <div className="embla__slide flex-none">
          <Image alt="" src="/sokcho1.png" width="480" height="320" />
        </div>
        <div className="embla__slide flex-none">
          <Image alt="" src="/sokcho1.png" width="480" height="320" />
        </div>
      </div>
    </div>
  );
}