import { useState } from "react";
import { useBen } from "./useBen";

export function App() {
  const { showBen, Ben } = useBen();

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const sum = value1 + value2;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <Ben />
      <div className="bg-white w-2xl rounded-3xl shadow-2xl p-12">
        <h1
          className="cursor-grab text-5xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          onClick={showBen}
        >
          Calc-You-Later! 👋
        </h1>

        <div className="space-y-10">
          {/* First Slider */}
          <div className="space-y-3">
            <label className="flex justify-between items-center">
              <span className="text-lg text-gray-700">First Number</span>
              <span className="text-2xl font-mono text-blue-600">
                {value1.toLocaleString()}
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="1000000"
              value={value1}
              onChange={(e) => setValue1(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          {/* Second Slider */}
          <div className="space-y-3">
            <label className="flex justify-between items-center">
              <span className="text-lg text-gray-700">Second Number</span>
              <span className="text-2xl font-mono text-purple-600">
                {value2.toLocaleString()}
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="1000000"
              value={value2}
              onChange={(e) => setValue2(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          {/* Sum Display */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 text-lg mb-2">Sum</p>
              <p className="text-6xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {sum.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tiny link to reactivity check */}
      <a
        href="?reactive=true"
        className="text-sm text-blue-500 mt-8 hover:underline"
      >
        Click here for a reactivity check
      </a>
    </div>
  );
}
