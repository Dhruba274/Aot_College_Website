import { cn } from "./ui/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid-dept";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


import deptnews1 from "../assets/deptNews1.png";
import deptnews2 from "../assets/deptNews2.jpeg";
import deptnews3 from "../assets/deptNews3.jpeg";
import deptnews4 from "../assets/deptNews4.jpg";

export function BentoGridDemoAcademics() {
  return (
    <BentoGrid className="max-w-3xl md:max-w-7xl mx-auto p-4" >
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Students Chapter ECE",
    description: "From Vision to Victory: Navigating the Highlights",
    header: <div className="bg-[url('./src/assets/deptNews1.png')] h-full bg-cover bg-center object-cover overflow-hidden"></div>,
    
  },
  {
    title: "Students Chapter CSE",
    description: "Legacy Unleashed: A Pinnacle of Excellence.",
    header: <div className="bg-[url('./src/assets/deptNews2.jpeg')] h-full bg-cover bg-center object-cover overflow-hidden"></div>,
    
  },
  {
    title: "IEI Students Chapter ME",
    description: "Seminar on 3D printing and prosthetics",
    header: <div className="bg-[url('./src/assets/deptNews3.jpeg')] h-full bg-cover bg-center object-cover overflow-hidden"></div>,
    
  },
  {
    title: "IEEE",
    description: "Inauguration of IEEE Student Branch at AOT",
    header: <div className="bg-[url('./src/assets/deptNews4.jpg')] h-full bg-cover bg-center object-cover overflow-hidden"></div>,
    
  },

];
