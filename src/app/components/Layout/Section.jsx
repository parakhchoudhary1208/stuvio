"use client";
import React from "react";
import SectionImage from "./SectionImage";
import SectionTitle from "./SectionTitle";

const Section = ({ 
    index, 
    item, 
    sectionRef, 
    imageRef, 
    titleRef1, 
    titleRef2,
    overlayRefs
}) => (
    <div
        ref={sectionRef}
        className="relative h-[50vh] w-[50vw] lg:w-[25vw] lg:h-full border-r border-gray-300 last:border-r-0 grid-item-section"
    >
        <SectionImage 
            imageRef={imageRef} 
            src={item.src} 
            title={item.title} 
        />
        <div ref={overlayRefs} className="overlay h-full w-full bg-black opacity-0"/>
        <SectionTitle 
            titleRef1={titleRef1} 
            titleRef2={titleRef2} 
            title={item.title} 
        />
    </div>
);

export default Section;