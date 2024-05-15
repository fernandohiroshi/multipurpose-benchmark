import BenchmarkConfig from "./benchmark-config";
import { BenchmarkData } from "./benchmark-data";

const BenchmarkContainer = () => {
  return (
    <div className="bg-black/10 shadow-sm shadow-white/50 max-w-[95%] md:max-w-[80%] lg:max-w-[60%] w-full h-[50%] md:h-[60%] rounded-3xl p-4 flex flex-col justify-center hover:brightness-125 ease-in-out duration-500">
      {BenchmarkData.map((benchmark, index) => (
        <BenchmarkConfig key={index.toString()} {...benchmark} />
      ))}
    </div>
  );
};

export default BenchmarkContainer;
