import { useState } from "react";

export function Reactive() {
  const [first, setValue1] = useState(0);
  let second = 0;

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white w-2xl rounded-3xl shadow-2xl p-12">
        <h1 className="cursor-grab text-5xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Reactivity Check
        </h1>

        <div className="space-y-10">
          {/* First Button */}
          <div className="space-y-3">
            <label className="flex justify-between items-center">
              <span className="text-lg text-gray-700">First Number</span>
              <span className="text-2xl font-mono text-blue-600">
                {first.toLocaleString()}
              </span>
            </label>
            {/* Button to update value 1 to demonstrate reactivity */}
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => {
                console.log(`Updating first to ${first + 1}`);
                setValue1(first + 1);
              }}
            >
              First + 1
            </button>
          </div>

          {/* Second Button */}
          <div className="space-y-3">
            <label className="flex justify-between items-center">
              <span className="text-lg text-gray-700">Second Number</span>
              <span className="text-2xl font-mono text-purple-600">
                {second.toLocaleString()}
              </span>
            </label>
            {/* Button to update value 2 to demonstrate non-reactivity */}
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => {
                console.log(`Updating second to ${second + 1}`);
                second = second + 1;
              }}
            >
              Second + 1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
