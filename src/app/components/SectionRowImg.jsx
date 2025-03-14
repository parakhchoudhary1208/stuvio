import React from 'react';
import Image from "next/image";

const SectionRowImg = () => {
    return (
        <section className="absolute top-0 left-0 h-full w-full grid lg:grid-cols-4 grid-cols-2">
            {[
                { src: "/chair-1.jpg", title: "our approach" },
                { src: "/chair-2.jpg", title: "our technology" },
                { src: "/chair-3.jpg", title: "our story" },
                { src: "/chair-4.jpg", title: "our design team" },
            ].map(({ src, title }, index) => (
                <div
                    key={index}
                    className="relative h-[50vh]  w-[50vw] lg:w-[25vw] lg:h-full border-r border-gray-300 last:border-r-0"
                >
                    <div className="absolute h-full w-full overflow-hidden clip-path-hidden">
                        <Image
                            src={src}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="h-full w-full"
                        />
                    </div>
                    <h1 className="absolute z-10 bottom-0 left-0 p-6 md:p-4 font-light text-lg lg:text-4xl uppercase">
                        {title}
                    </h1>
                </div>
            ))}
        </section>
    )
}

export default SectionRowImg