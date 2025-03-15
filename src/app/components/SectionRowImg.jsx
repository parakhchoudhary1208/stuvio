import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const items = [
    { src: "/chair-1.jpg", title: "approach" },
    { src: "/chair-2.jpg", title: "technology" },
    { src: "/chair-3.jpg", title: "story" },
    { src: "/chair-4.jpg", title: "design team" },
];

const SectionRowImg = () => {
    const imageRefs = useRef([]);
    const containerRef = useRef(null);
    const timerRefs = useRef([]);
    const titleRefs = useRef([]);

    const handleHover = (index, show) => {
        clearTimeout(timerRefs.current[index]);
        if (show) {
            timerRefs.current[index] = setTimeout(() => {
                gsap.to(imageRefs.current[index], {
                    scaleY: 1,
                    duration: 1,
                    ease: "none",
                    transformOrigin: "bottom",
                });
            }, 100);
        } else {
            gsap.to(imageRefs.current[index], {
                scaleY: 0,
                duration: 1,
                ease: "none",
                transformOrigin: "top",
            });
        }
    };

    useGSAP(() => {
        return () => timerRefs.current.forEach(timer => clearTimeout(timer));
    }, { scope: containerRef });

    useEffect(() => {
        titleRefs.current.forEach((titleRef, index) => {
            gsap.fromTo(titleRef, 
                { opacity: 0, y: 75 }, 
                { opacity: 1, y: 0, duration: 0.5, delay: index * 0.2 }
            );
        });
    }, []);

    return (
        <>
            <section ref={containerRef} className="absolute top-0 left-0 h-full w-full grid lg:grid-cols-4 grid-cols-2">
                {items.map(({ src, title }, index) => (
                    <div key={index} className="relative h-[50vh] w-[50vw] lg:w-[25vw] lg:h-full border-r border-gray-300 last:border-r-0 grid-item-section">
                        <div ref={el => imageRefs.current[index] = el} className="absolute h-full w-full overflow-hidden img-wrapper scale-y-0 origin-bottom">
                            <Image src={src} alt={title} fill style={{ objectFit: "cover" }} className="h-full w-full" />
                        </div>
                        <div className="absolute z-1 bottom-0 left-0 p-6 md:p-4">
                            <h1 ref={el => titleRefs.current[index * 2] = el} className="font-light text-lg lg:text-4xl uppercase">our</h1>
                            <h1 ref={el => titleRefs.current[index * 2 + 1] = el} className="font-light text-lg lg:text-4xl uppercase">{title}</h1>
                        </div>
                    </div>
                ))}
            </section>
            <section className="absolute z-3 bg-transparent top-0 left-0 h-full w-full grid lg:grid-cols-4 grid-cols-2">
                {items.map((_, index) => (
                    <div key={index} className="relative h-[50vh] w-[50vw] lg:w-[25vw] lg:h-full" 
                        onMouseEnter={() => handleHover(index, true)}
                        onMouseLeave={() => handleHover(index, false)}
                    />
                ))}
            </section>
        </>
    );
};

export default SectionRowImg;
