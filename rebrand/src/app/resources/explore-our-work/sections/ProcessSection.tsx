import React from 'react';

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
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl ml-8 font-bold mb-6 bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent"
        >
          {title}
        </h2>
        {/* Responsive version: mobile = stacked, desktop = row with arrows */}
        <div className="block md:hidden">
          {steps.map((step, idx) => (
            <div className="flex flex-col items-center mb-10" key={idx}>
              <div className="mb-2 text-center">
                <h3 className="font-bold text-gray-800 text-xl whitespace-nowrap">{step.title}</h3>
                <p className="text-gray-900 text-sm max-w-xs text-left mx-auto">{step.description}</p>
              </div>
              <div className="relative flex justify-center w-[180px] h-[90px]">
                <svg width="180" height="90" viewBox="0 0 180 90">
                  <polygon points="0,0 140,0 180,45 140,90 0,90 40,45" fill={step.color} />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background: step.numberColor}}>
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop version: arrows and horizontal row */}
        <div className="hidden md:block">
          <div className="relative mt-60 mb-50 w-full">
            {/* Top Row: Text and Arrows for Steps 1 & 3 */}
            <div className="absolute w-full left-0" style={{top: '-197px'}}>
              <div className="flex flex-row justify-between w-full">
                {/* Step 1 Text+Arrow */}
                <div className="flex flex-col items-center w-1/4">
                  <div className="mb-2 text-left ml-10 w-[200px]">
                    <h3 className="font-bold text-gray-800 text-xl whitespace-nowrap">{steps[0]?.title}</h3>
                    <p className="text-gray-900 text-sm">{steps[0]?.description}</p>
                  </div>
                  <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="#222" strokeWidth="2" markerEnd="url(#arrowhead)" /><defs><marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#222" /></marker></defs></svg>
                </div>
                {/* Step 2: Empty */}
                <div className="w-1/4" />
                {/* Step 3 Text+Arrow */}
                <div className="flex flex-col items-center w-1/4">
                  <div className="mb-2 text-left ml-10 w-[200px]">
                    <h3 className="font-bold text-gray-800 text-xl whitespace-nowrap">{steps[2]?.title}</h3>
                    <p className="text-gray-900 text-sm">{steps[2]?.description}</p>
                    <br />
                  </div>
                  <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="#7A5A00" strokeWidth="2" markerEnd="url(#arrowhead3)" /><defs><marker id="arrowhead3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#7A5A00" /></marker></defs></svg>
                </div>
                {/* Step 4: Empty */}
                <div className="w-1/4" />
              </div>
            </div>
            {/* Chevron Row */}
            <div className="flex flex-row justify-between items-center w-full relative z-10">
              {steps.map((step, idx) => (
                <div className={`relative w-1/4 flex justify-center${idx > 0 ? ' -ml-16' : ''}`} key={idx}>
                  <svg width="260" height="180" viewBox="0 0 260 180">
                    <polygon points="0,0 200,0 260,90 200,180 0,180 60,90" fill={step.color} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background: step.numberColor}}>
                      <span className="text-white text-2xl font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom Row: Text and Arrows for Steps 2 & 4 */}
            <div className="absolute w-full left-0" style={{top: '200px'}}>
              <div className="flex flex-row justify-between w-full">
                {/* Step 1: Empty */}
                <div className="w-1/4" />
                {/* Step 2 Text+Arrow */}
                <div className="flex flex-col items-center w-1/4">
                  <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="#222" strokeWidth="2" markerEnd="url(#arrowhead2)" /><defs><marker id="arrowhead2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#222" /></marker></defs></svg>
                  <div className="mb-2 text-left w-[260px]">
                    <h3 className="font-bold text-gray-800 text-xl whitespace-nowrap">{steps[1]?.title}</h3>
                    <p className="text-gray-900 text-sm">{steps[1]?.description}</p>
                  </div>
                </div>
                {/* Step 3: Empty */}
                <div className="w-1/4" />
                {/* Step 4 Text+Arrow */}
                <div className="flex flex-col items-center w-1/4">
                  <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="#001133" strokeWidth="2" markerEnd="url(#arrowhead4)" /><defs><marker id="arrowhead4" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#001133" /></marker></defs></svg>
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
