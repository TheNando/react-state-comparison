import cn from "classnames";
import { useState } from "react";
import benImage from "./ben.png";

export function useBen() {
  const [isShown, setIsShown] = useState(false);

  return {
    showBen: () => setIsShown(true),
    Ben: () => (
      <div
        className={cn(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
          { hidden: !isShown }
        )}
        onClick={() => setIsShown(false)}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Now THAT'S state!
        </h2>
        <img alt="Ben" className="h-[550px] mb-[110px]" src={benImage} />
      </div>
    )
  };
}
