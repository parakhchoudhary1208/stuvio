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
            style={{ objectFit: "none" }}
            className="h-full w-auto"
        />
    </div>
);

export default SectionImage;