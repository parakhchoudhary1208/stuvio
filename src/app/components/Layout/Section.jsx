"use client";
import React from "react";
import SectionImage from "./SectionImage";
import SectionTitle from "./SectionTitle";
import SectionOverlay from "./SectionOverlay";

const Section = ({ 
    index, 
    item, 
    sectionRef, 
    imageRef, 
    titleRef1, 
    titleRef2,
    overlayRefs,
    contentSliderRef,
}) => (
    <div
        ref={sectionRef}
        className="relative h-[100%] w-[100%] lg:w-[25vw] lg:h-full lg:border-b-transparent lg:border-b-[0px] border-b border-b-gray-300 border-r  border-r-gray-300
        last:border-r-0 grid-item-section"
    >
        <SectionImage 
            imageRef={imageRef} 
            src={item.src} 
            title={item.title} 
        />
        <SectionOverlay description={item.description} src={item.src} title={item.title} overlayRefs={overlayRefs} contentSliderRef={contentSliderRef}/>
        <SectionTitle 
            titleRef1={titleRef1} 
            titleRef2={titleRef2} 
            title={item.title} 
        />
    </div>
);

export default Section;