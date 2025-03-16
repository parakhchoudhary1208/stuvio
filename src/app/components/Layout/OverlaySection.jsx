"use client";
import React from "react";

const OverlaySection = ({ 
    index, 
    duplicateRef, 
    onMouseEnter, 
    onMouseLeave,
    onClick 
}) => (
    <div
        ref={duplicateRef}
        className="relative h-[50vh] w-[50vw] lg:w-[25vw] lg:h-full grid-item-section-duplicate"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
    />
);

export default OverlaySection;