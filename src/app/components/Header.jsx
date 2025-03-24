"use client";
import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const Header = () => {
    const logoRef = useRef(null);
    const taglineRef = useRef(null);
    const headlineRef = useRef(null);
    const buttonRef = useRef(null);

    // Memoize the expansion handler to prevent unnecessary re-creations
    const handleExpansionChange = useCallback((e) => {
        const isExpanded = e.detail.expandedIndex !== null;
        const color = isExpanded ? "#fff" : "#000";
        const buttonBg = isExpanded ? "#fff" : "transparent";
        const buttonTextColor = isExpanded ? "#000" : "#000";
        
        // Group animations for better performance
        const tl = gsap.timeline();
        
        // Animate text elements
        tl.to([
            logoRef.current, 
            taglineRef.current.querySelectorAll('p'), 
            headlineRef.current
        ], {
            color,
            duration: 0.5,
            ease: "power2.inOut",
        }, 0);
        
        // Animate button
        tl.to(buttonRef.current, {
            backgroundColor: buttonBg,
            borderColor: color,
            duration: 0.5,
            ease: "power2.inOut",
        }, 0);
        
        tl.to(buttonRef.current.querySelector('p'), {
            color: buttonTextColor,
            duration: 0.5,
            ease: "power2.inOut",
        }, 0);
    }, []);
    
    // Setup event listener
    useEffect(() => {
        window.addEventListener('sectionExpansionChange', handleExpansionChange);
        return () => window.removeEventListener('sectionExpansionChange', handleExpansionChange);
    }, [handleExpansionChange]);

    // Initial animations
    useEffect(() => {
        // Create a master timeline for better control and performance
        const masterTl = gsap.timeline();
        
        // Logo animation
        const logoText = logoRef.current;
        const logoLetters = logoText.textContent.split('');
        logoText.textContent = '';
        
        // Pre-create all spans for better performance
        const logoSpans = logoLetters.map((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;
            logoText.appendChild(span);
            return span;
        });
        
        // Animate logo letters
        masterTl.fromTo(logoSpans, {
            opacity: 0,
            y: -10,
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power1.out"
        });

        // Tagline animation
        const tagline = taglineRef.current;
        const taglineLines = tagline.innerHTML.split('<br>').map(line => line.trim());
        tagline.innerHTML = '';
        
        // Pre-create all paragraph elements
        const taglineParagraphs = taglineLines.map((line) => {
            const p = document.createElement('p');
            p.innerHTML = line;
            tagline.appendChild(p);
            return p;
        });

        // Animate tagline
        masterTl.fromTo(taglineParagraphs, {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.5,
            ease: "power2.out"
        }, 0.2);

        // Headline animation
        masterTl.fromTo(headlineRef.current, {
            opacity: 0,
            skewX: 50,
            x: 100,
            y: 200,
        }, {
            opacity: 1,
            skewX: 0,
            y: 0,
            x: 0,
            duration: 0.75,
            ease: "power2.out"
        }, 0.5);

        // Button animation
        masterTl.fromTo(buttonRef.current, {
            scaleX: 0,
            transformOrigin: "left",
        }, {
            scaleX: 1,
            duration: 1.25,
            ease: "power3.out"
        }, 0.75);

        masterTl.fromTo(buttonRef.current.querySelector('p'), {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, 1.25);
        
        // Return cleanup function
        return () => {
            masterTl.kill();
        };
    }, []);

    return (
        <header className="grid lg:grid-cols-4 grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-2 lg:p-8 p-6 relative z-3 w-full h-full lg:h-fit">
            <div className="grid-item w-fit h-fit">
                <p ref={logoRef} className="lg:text-xl text-lg">Visionary</p>
            </div>
            <div>
                <p ref={taglineRef} className="grid-item lg:text-xl text-lg pl-4">Where Form <br/> and Function Unite</p>
            </div>
            <div className="grid-item-2 col-span-2 w-[90%] lg:pl-6 pl-0 lg:mt-0 mt-[10%]">
                <h1 ref={headlineRef} className="lg:text-[48px] text-[14px] uppercase font-light">
                    elevating comfort <br/> with every curve
                </h1>
                <button ref={buttonRef} className="border border-black uppercase lg:px-4 lg:py-1.5 px-3 py-1 rounded-full mt-6 bg-transparent overflow-hidden lg:ml-0 ml-[-8px]">
                    <p className="lg:text-[16px] text-[12px]">Explore Experience</p>
                </button>
            </div>
        </header>
    );
};

export default Header;