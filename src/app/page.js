"use client";
import React , { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SectionRowImg from './components/SectionRowImg';

export default function Home() {

    return (
        <main className="h-full w-full relative">
            {/* Header Section */}
            <header className="grid lg:grid-cols-4 grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-2 lg:p-8 p-6 relative z-10 w-full">
                <div className="grid-item w-fit h-fit">
                    <p className="lg:text-xl text-lg">Visionary</p>
                </div>
                <p className="grid-item lg:text-xl text-lg pl-4">Where Form and Function Unite</p>
                <div className="grid-item-2 col-span-2 w-full lg:pl-6 pl-0">
                    <h1 className="lg:text-4xl text-2xl uppercase font-light">
                        elevating comfort with every curve
                    </h1>
                    <button className="border border-black uppercase px-4 py-1.5 rounded-full mt-12 bg-transparent cursor-pointer">
                        Explore Experience
                    </button>
                </div>
            </header>

            <SectionRowImg/>
        </main>
    );
}
