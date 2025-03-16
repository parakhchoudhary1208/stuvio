"use client";
import React from 'react';
import SectionRow from './components/SectionRow';
import CustomCursor from "./components/CustomCursor";
import Header from './components/Header';

export default function Home() {

    return (
        <>
            <CustomCursor/>
            <main className="h-full w-full relative overflow-hidden">
                <Header/>
                <SectionRow/>
            </main>
        </>
    );
}
