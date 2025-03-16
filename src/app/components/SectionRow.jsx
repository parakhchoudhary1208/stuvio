"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Section from "./Layout/Section";
import OverlaySection from "./Layout/OverlaySection";
import createAnimationController from "../controller/AnimationController";
import items from "../data/data";

const SectionRow = () => {
    const containerRef = useRef(null);
    const imageRefs = useRef([]);
    const timerRefs = useRef([]);
    const titleRefs = useRef([]);
    const sectionRefs = useRef([]);
    const duplicateRefs = useRef([]);
    const overlayRefs = useRef([]);
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Create the animation controller
    const animationController = createAnimationController(
        imageRefs,
        timerRefs,
        sectionRefs,
        duplicateRefs,
        titleRefs,
        overlayRefs,
        expandedIndex,
        setExpandedIndex
    );

    // Cleanup timers when component unmounts
    useGSAP(() => {
        return () => timerRefs.current.forEach(clearTimeout);
    }, { scope: containerRef });

    // Click outside to collapse
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                expandedIndex !== null &&
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                animationController.handleExpand(expandedIndex);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [expandedIndex]);

    // Initial title animations
    useEffect(() => {
        titleRefs.current.forEach((titleRef, index) => {
            gsap.fromTo(
                titleRef,
                { opacity: 0, y: 75 },
                { opacity: 1, y: 0, duration: 0.5, delay: index * 0.2 }
            );
        });
    }, []);

    return (
        <>
            {/* Main content section */}
            <section
                ref={containerRef}
                className="absolute top-0 left-0 h-full w-full grid lg:grid-cols-4 grid-cols-2"
            >
                {items.map((item, index) => (
                    <Section
                        key={`section-${index}`}
                        index={index}
                        item={item}
                        sectionRef={(el) => (sectionRefs.current[index] = el)}
                        imageRef={(el) => (imageRefs.current[index] = el)}
                        overlayRefs={(el) => (overlayRefs.current[index] = el)}
                        titleRef1={(el) => (titleRefs.current[index * 2] = el)}
                        titleRef2={(el) => (titleRefs.current[index * 2 + 1] = el)}
                    />
                ))}
            </section>

            {/* Interactive overlay section */}
            <section className="absolute z-3 bg-transparent top-0 left-0 h-full w-full grid lg:grid-cols-4 grid-cols-2">
                {items.map((_, index) => (
                    <OverlaySection
                        key={`overlay-${index}`}
                        index={index}
                        duplicateRef={(el) => (duplicateRefs.current[index] = el)}
                        onMouseEnter={() => animationController.handleHover(index, true)}
                        onMouseLeave={() => animationController.handleHover(index, false)}
                        onClick={() => animationController.handleExpand(index)}
                    />
                ))}
            </section>
        </>
    );
};

export default SectionRow;