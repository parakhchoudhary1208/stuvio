"use client";
import { gsap } from "gsap";

const createAnimationController = (
    imageRefs,
    timerRefs,
    sectionRefs,
    duplicateRefs,
    titleRefs,
    overlayRefs,
    expandedIndex,
    setExpandedIndex,
) => {
    return {
        handleHover: (index, show) => {
            clearTimeout(timerRefs.current[index]);
            if (show) {
                timerRefs.current[index] = setTimeout(() => {
                gsap.to(imageRefs.current[index], {
                    height: "100%",
                    top: "0%",
                    duration: 0.75,
                    ease: "power1.inOut",
                });
                }, 100);
            } else {
                gsap.to(imageRefs.current[index], {
                    height: "0%",
                    top: "0%",
                    duration: 0.75,
                    ease: "power1.inOut",
                    onComplete: () => {
                        gsap.set(imageRefs.current[index], { top: "100%" });
                    },
                });
            }
        },

        handleExpand: (index) => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const isMobile = viewportWidth < 1024;
            const section = sectionRefs.current[index];
            const duplicate = duplicateRefs.current[index];
            const rect = section.getBoundingClientRect();
            const isCollapsing = expandedIndex === index;

            if (isCollapsing) {
                // Collapse animation
                gsap.to([section, duplicate], {
                    x: 0,
                    y: 0, // Reset position to original grid placement
                    width: isMobile ? "50vw" : "25vw",
                    height: isMobile ? "50vh" : "100vh",
                    duration: 0.75,
                    ease: "power2.inOut",
                    onComplete: () => {
                        setTimeout(() => setExpandedIndex(null), 200);
                    },
                });

                // Show all sections back
                sectionRefs.current.forEach((sec, i) => {
                    if (i !== index) {
                        gsap.to([sec, duplicateRefs.current[i]], {
                            opacity: 1,
                            pointerEvents: "auto",
                            duration: 0.5,
                        });
                    }
                });

                // Reset overlay opacity for all sections
                overlayRefs.current.forEach((overlay) => {
                    gsap.to(overlay, { opacity: 0, duration: 0.5, ease: "power2.inOut" });
                });

                // Reset title positions
                gsap.to(titleRefs.current, {
                    y: 0,
                    color: "#000",
                    duration: 0.5,
                    ease: "power2.inOut",
                });
            } else {
                // Expand animation
                setExpandedIndex(index);
                const yOffset = isMobile ? -rect.top : 0;
                gsap.to([section, duplicate], {
                    x: -rect.left,
                    y: yOffset,
                    width: viewportWidth,
                    height: viewportHeight,
                    duration: 0.75,
                    ease: "power2.inOut",
                });

                // Hide other sections
                sectionRefs.current.forEach((sec, i) => {
                    if (i !== index) {
                        gsap.to([sec, duplicateRefs.current[i]], {
                            opacity: 0,
                            pointerEvents: "none",
                            duration: 0.5,
                        });
                    }
                });

                // Move titles down for other sections
                titleRefs.current.forEach((title, i) => {
                    const sectionIndex = Math.floor(i / 2);
                    if (sectionIndex !== index) {
                        gsap.to(title, {
                            y: 100,
                            duration: 0.5,
                            ease: "power2.inOut",
                        });
                    } else {
                        gsap.to(title, {
                            color: "#fff",
                            duration: 0.5,
                            ease: "power2.inOut",
                        });
                    }
                });

                // Modify overlays based on expanded/collapsed state
                overlayRefs.current.forEach((overlay, i) => {
                    if (i !== index) {
                        gsap.to(overlay, { opacity: 0, duration: 0.5, ease: "power2.inOut" }); // Hide others
                    } else {
                        gsap.to(overlay, { opacity: 0.3, duration: 0.5, ease: "power2.inOut" }); // Keep it 0.6 for active
                    }
                });
            }
        }
    };
};

export default createAnimationController;