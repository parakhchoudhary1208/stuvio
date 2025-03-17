"ue client";
import React from 'react';

const SectionOverlay = ({overlayRefs, contentSliderRef, src, title, description}) => {
    return (
        <div ref={overlayRefs} className="relative overlay h-full w-full bg-transparent">
            <div ref={contentSliderRef} className="flex lg:flex-col justify-between gap-10 items-start absolute lg:right-0 lg:bottom-0 right-[0%] bottom-[60%] translate-x-[0%] h-fit lg:h-[65vh] lg:w-[50%] w-full opacity-0 p-4 lg:p-8">
                <div 
                    className="h-fit w-fit relative lg:ml-[30%] origin-center"
                >
                    <div className="lg:h-[150px] h-[84px] lg:w-[150px] w-[84px] rounded-full overflow-hidden">
                        <img
                            src={src}
                            alt={title}
                            style={{ objectFit: "cover" }}
                            className="h-full w-full"
                        />
                    </div>
                    <i className="flex items-center justify-center ri-arrow-right-down-line lg:text-4xl text-xl font-extralight absolute right-[-5px] top-[70%] lg:h-[48px] h-[36px] lg:w-[48px] w-[36px] rounded-full bg-[#ffffffd1]"></i>
                </div>
                <div className="flex items-end justify-between">
                    <p className="lg:w-[50%] text-white">{description}</p>
                    <p className="lg:flex hidden gap-1 justify-center items-center text-white">
                        Scroll Down to Explore More
                        <i className="ri-arrow-right-down-line text-4xl font-extralight"></i>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionOverlay