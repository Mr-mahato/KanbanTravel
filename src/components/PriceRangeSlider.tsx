import { useState } from "react";

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1000);
  const minLimit = 0;
  const maxLimit = 1000;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const value = Number(e.target.value);
    if (type === "min") {
      setMinValue(Math.min(value, maxValue - 1));
    } else {
      setMaxValue(Math.max(value, minValue + 1));
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6 max-w-md mx-auto">
      <div className="relative flex items-center gap-4">
        {/* Slider */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={(e) => handleSliderChange(e, "min")}
          className="absolute h-2 w-full appearance-none bg-gray-300 pointer-events-auto"
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={(e) => handleSliderChange(e, "max")}
          className="absolute h-2 w-full appearance-none bg-transparent pointer-events-auto"
        />

        {/* Slider Fill */}
        <div
          className="absolute h-2 bg-blue-500 pointer-events-none"
          style={{
            left: `${(minValue / maxLimit) * 100}%`,
            right: `${100 - (maxValue / maxLimit) * 100}%`,
          }}
        ></div>
      </div>

      {/* Min-Max Inputs */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-2 w-1/2">
          <label htmlFor="minPrice" className="text-sm font-medium">
            Min Price
          </label>
          <input
            type="number"
            id="minPrice"
            value={minValue}
            onChange={handleMinChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <label htmlFor="maxPrice" className="text-sm font-medium">
            Max Price
          </label>
          <input
            type="number"
            id="maxPrice"
            value={maxValue}
            onChange={handleMaxChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
