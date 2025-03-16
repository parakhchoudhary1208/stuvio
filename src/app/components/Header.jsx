"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = ({ animationController }) => {
    const logoRef = useRef(null);
    const taglineRef = useRef(null);
    const headlineRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const logoText = logoRef.current;
        const logoLetters = logoText.textContent.split('');
        logoText.textContent = '';
        logoLetters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            logoText.appendChild(span);

            gsap.fromTo(span, {
                opacity: 0,
                y: -10,
                x: 0,
            }, {
                opacity: 1,
                y: 0,
                delay: index * 0.1,
            });
        });


        const tagline = taglineRef.current;
        const taglineLines = tagline.innerHTML.split('<br>').map(line => line.trim());
        tagline.innerHTML = '';
        taglineLines.forEach((line, index) => {
            const p = document.createElement('p');
            p.innerHTML = line;
            tagline.appendChild(p);
            gsap.fromTo(p, {
                opacity: 0,
                y: 50,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.5,
            });
        });

        gsap.fromTo(headlineRef.current, {
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
            delay: 0.5,
        });

        gsap.fromTo(buttonRef.current, {
            scaleX: 0,
            transformOrigin: "left",
        }, {
            scaleX: 1,
            duration: 1.25,
        });

        gsap.fromTo(buttonRef.current.querySelector('p'), {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.75,
        });

        if (animationController) {
            animationController.headerRefs = {
                button: buttonRef.current,
                texts: [logoRef.current, taglineRef.current, headlineRef.current],
            };
        }
    }, [animationController]);

    return (
        <header className="grid lg:grid-cols-4 grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-2 lg:p-8 p-6 relative z-3 w-full h-full lg:h-fit">
            <div className="grid-item w-fit h-fit">
                <p ref={logoRef} className="lg:text-xl text-lg">Visionary</p>
            </div>
            <div>
                <p ref={taglineRef} className="grid-item lg:text-xl text-lg pl-4">Where Form <br/> and Function Unite</p>
            </div>
            <div className="grid-item-2 col-span-2 w-[90%] lg:pl-6 pl-0">
                <h1 ref={headlineRef} className="lg:text-[48px] text-2xl uppercase font-light">
                    elevating comfort <br/> with every curve
                </h1>
                <button ref={buttonRef} className="border border-black uppercase px-4 py-1.5 rounded-full mt-12 bg-transparent overflow-hidden">
                    <p>Explore Experience</p>
                </button>
            </div>
        </header>
    );
}

export default Header;