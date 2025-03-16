"use client";
import React from "react";

const SectionTitle = ({ titleRef1, titleRef2, title }) => (
    <div className="absolute z-2 bottom-0 left-0 p-6 md:p-4">
        <h1
            ref={titleRef1}
            className="font-light text-lg lg:text-4xl uppercase"
        >
            our
        </h1>
        <h1
            ref={titleRef2}
            className="font-light text-lg lg:text-4xl uppercase"
        >
            {title}
        </h1>
    </div>
);

export default SectionTitle;