import { motion } from "framer-motion"; // Importing the animation functionality from framer-motion

import { BenchmarkData } from "./benchmark-data"; // Importing the BenchmarkData type from the benchmark-data module
import {
  benchmarkItemVariants,
  benchmarkContainerVariants,
} from "./benchmark-variants"; // Importing animation variants for benchmark items and containers

// Functional component BenchmarkConfig with props corresponding to the BenchmarkData type
const BenchmarkConfig: React.FC<BenchmarkData> = ({
  date1,
  date2,
  date3,
  date4,
  date5,
}) => {
  return (
    // Div with animations using motion from framer-motion
    <motion.div
      className="flex flex-col gap-4 text-sm font-medium tracking-wide w-full text-white" // CSS classes for styling
      initial="initial" // Initial animation state
      whileInView="whileInView" // Animation state when the element is in view
      viewport={{ once: true, margin: "-200px" }} // Viewport settings to trigger animation
      variants={benchmarkContainerVariants} // Animation variants for the container
    >
      <h2 className="text-center text-md text-white font-semibold tracking-widest md:text-2xl">
        My Linux OS tier list.
      </h2>
      {/* Benchmark items for each Linux distribution with corresponding values and colors */}
      <BenchmarkItem title="Ubunto" value={date1.value} color="color1" />
      <BenchmarkItem title="Pop!_OS" value={date2.value} color="color2" />
      <BenchmarkItem title="ParrotOS" value={date3.value} color="color3" />
      <BenchmarkItem title="Zorin OS " value={date4.value} color="color4" />
      <BenchmarkItem title="Kali Purple" value={date5.value} color="color5" />
    </motion.div>
  );
};

// Interface defining the props for the BenchmarkItem component
interface BenchmarkItemProps {
  title: string; // Title of the benchmark item
  value: number; // Value for the benchmark item to determine the width of the bar
  color?: "color1" | "color2" | "color3" | "color4" | "color5"; // Optional color property
}

// Functional component BenchmarkItem with props for title, value, and color
const BenchmarkItem: React.FC<BenchmarkItemProps> = ({
  title,
  value,
  color = "color4", // Default color if not provided
}) => {
  return (
    <div className="flex items-center justify-between">
      {" "}
      {/* Container div for benchmark item */}
      <div className="flex w-full flex-col">
        {" "}
        {/* Flexbox for layout */}
        <span className="mb-1 text-sm md:text-lg">{title}</span>{" "}
        {/* Title of the benchmark item */}
        <motion.div
          variants={benchmarkItemVariants} // Animation variants for the item
          className={`h-[0.400rem] md:h-[0.600rem] w-full rounded-full ${
            color === "color1"
              ? "bg-red-500"
              : color === "color2"
              ? "bg-orange-500"
              : color === "color3"
              ? "bg-yellow-500"
              : color === "color4"
              ? "bg-green-500"
              : color === "color5"
              ? "bg-blue-500"
              : "bg-gray-200"
          }`} // Conditional class names for background color based on the color prop
          style={{ width: `${value}%` }} // Inline style for the width of the bar based on the value prop
        />
      </div>
    </div>
  );
};

export default BenchmarkConfig; // Exporting the BenchmarkConfig component as the default export
