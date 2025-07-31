import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

export type ProcessStep = {
  title: string;
  description: string;
  color: string; // chevron color
  numberColor: string; // circle bg color
  number: string;
};

export default function ProcessSection({
  title,
  steps
}: {
  title: string;
  steps: ProcessStep[];
}) {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [allVisible, setAllVisible] = useState(false);
  

  useEffect(() => {
    const sectionRef = stepRefs.current[0]?.parentElement?.parentElement?.parentElement;
  
    if (!sectionRef) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let index = 0;
  
          const interval = setInterval(() => {
            if (index < steps.length) {
              setActiveIndex(index);
              index++;
            } else {
              clearInterval(interval);
              // Pause a bit, then show all
              setTimeout(() => {
                setAllVisible(true);
              }, 800);
            }
          }, 1000); // Adjust delay per step here
  
          observer.unobserve(sectionRef); // trigger only once
        }
      },
      { threshold: 0.3 }
    );
  
    observer.observe(sectionRef);
  
    return () => observer.disconnect();
  }, [steps]);

  const mobileStepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileSectionRef = useRef<HTMLDivElement | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number>(-1);
  const [mobileAllVisible, setMobileAllVisible] = useState(false);

  useEffect(() => {
    const section = mobileSectionRef.current;
    if (!section) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let index = 0;
  
          const interval = setInterval(() => {
            if (index < steps.length) {
              setMobileActiveIndex(index);
              index++;
            } else {
              clearInterval(interval);
              setTimeout(() => {
                setMobileAllVisible(true);
              }, 800);
            }
          }, 1000);
  
          observer.unobserve(section);
        }
      },
      { threshold: 0.3 }
    );
  
    observer.observe(section);
    return () => observer.disconnect();
  }, [steps]);
  

  

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl ml-8 font-bold mb-6 bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent">
          {title}
        </h2>

        {/* Mobile version */}
        <div className="block md:hidden" ref={mobileSectionRef}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
              className={`flex flex-col items-center mb-10 transition-opacity duration-700 ease-in-out ${
                mobileAllVisible || mobileActiveIndex === idx ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="mb-2 text-center">
                <h3 className="font-bold text-gray-800 text-xl break-words max-w-full">{step.title}</h3>
                <p className="text-gray-900 text-sm max-w-xs text-left mx-auto">{step.description}</p>
              </div>
              <div className="relative flex justify-center w-[180px] h-[180px]">
                <svg width="180" height="180" viewBox="0 0 180 180">
                  <polygon points="0,0 0,140 90,180 180,140 180,0 90,40" fill={step.color} />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: step.numberColor }}
                  >
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>


        {/* Desktop version */}
        <div className="hidden md:block">
          <div className="relative mt-60 mb-50 w-full">

            {/* Top Row */}
            <div className="absolute w-full left-0" style={{ top: "-197px" }}>
            <div className="flex flex-row justify-between w-full">
                {/* Step 1 Text+Arrow */}
                <div className="flex flex-col items-center w-1/4">
                  <div className="mb-2 text-left ml-10 w-[200px]">
                    <h3 className="font-bold text-gray-800 text-xl break-words max-w-full">{steps[0]?.title}</h3>
                    <p className="text-gray-900 text-sm">{steps[0]?.description}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <FontAwesomeIcon icon={faLongArrowAltUp} size="1x" color="#928e8e" />
                    <div style={{ width: "4px", height: "60px", backgroundColor: "#928e8e" }} />
                  </div>
                </div>
                {/* Step 2: Empty */}
                <div className="w-1/4" />
                {/* Step 3 Text+Arrow */}
                <div className="flex flex-col items-center w-1/4">
                  <div className="mb-2 text-left ml-10 w-[200px]">
                    <h3 className="font-bold text-gray-800 text-xl break-words max-w-full">{steps[2]?.title}</h3>
                    <p className="text-gray-900 text-sm">{steps[2]?.description}</p>
                    <br />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <FontAwesomeIcon icon={faLongArrowAltUp} size="1x" color="#928e8e" />
                    <div style={{ width: "4px", height: "60px", backgroundColor: "#928e8e" }} />
                  </div>
                </div>
                {/* Step 4: Empty */}
                <div className="w-1/4" />
              </div>
            </div>

            {/* Chevron Row */}
            <div className="flex mb-90 justify-between items-center w-full relative z-10">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  data-index={idx}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  
                  className={`relative top-20 w-1/4 flex justify-center transition-opacity duration-700 ease-in-out ${
                    allVisible || activeIndex === idx ? "opacity-100" : "opacity-50"
                  } ${idx > 0 ? "-ml-16" : ""}`}
                >
                  <svg width="260" height="180" viewBox="0 0 260 180">
                    <polygon points="0,0 200,0 260,90 200,180 0,180 60,90" fill={step.color} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: step.numberColor }}
                    >
                      <span className="text-white text-2xl font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="absolute w-full left-0" style={{ top: "300px" }}>
            <div className="flex flex-row justify-between w-full">
                {/* Step 1: Empty */}
                <div className="w-1/4" />
                {/* Step 2 Text+Arrow */}
                <div className="flex flex-col items-center w-1/4">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: "4px", height: "60px", backgroundColor: "#928e8e" }} />
                    <FontAwesomeIcon icon={faLongArrowAltDown} size="1x" color="#928e8e" />
                  </div>
                  <div className="mb-2 text-left w-[260px]">
                    <h3 className="font-bold text-gray-800 text-xl whitespace-nowrap">{steps[1]?.title}</h3>
                    <p className="text-gray-900 text-sm">{steps[1]?.description}</p>
                  </div>
                </div>
                {/* Step 3: Empty */}
                <div className="w-1/4" />
                {/* Step 4 Text+Arrow */}
                <div className="flex flex-col items-center w-1/4">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: "4px", height: "60px", backgroundColor: "#928e8e" }} />
                    <FontAwesomeIcon icon={faLongArrowAltDown} size="1x" color="#928e8e" />
                  </div>
                  <div className="mb-2 mr-15 text-left w-[260px]">
                    <h3 className="font-bold text-gray-800 text-xl">{steps[3]?.title}</h3>
                    <p className="text-gray-900 text-sm">{steps[3]?.description}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
