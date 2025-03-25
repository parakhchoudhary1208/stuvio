"use client";
import React from "react";
import Image from "next/image";

const SectionImage = ({ imageRef, src, title }) => (
    <div
        ref={imageRef}
        className="absolute h-full w-full overflow-hidden img-wrapper"
        style={{ height: "0%", top: "100%" }}
    >
        <Image
            src={src}
            alt={title}
            fill
            className="h-full w-auto lg:object-none object-cover"
        />
    </div>
);

export default SectionImage;