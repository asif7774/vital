import React, { useState } from "react";
import { SvgIcon } from "components/atoms/svg-sprite-loader";

export interface StepperProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
}

const Stepper: React.FC<StepperProps> = ({
  value,
  defaultValue = 0,
  onChange,
  min = 0,
  max = 999,
  disabled = false,
  className = "",
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = isControlled ? value : internalValue;

  const handleDecrement = () => {
    if (disabled || currentValue <= min) {
      return;
    }
    const nextValue = currentValue - 1;
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    if (onChange) {
      onChange(nextValue);
    }
  };

  const handleIncrement = () => {
    if (disabled || currentValue >= max) {
      return;
    }
    const nextValue = currentValue + 1;
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    if (onChange) {
      onChange(nextValue);
    }
  };

  return (
    <div
      className={`inline-flex items-center border border-gray-300 rounded-md bg-white overflow-hidden ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={disabled || currentValue <= min}
        className="px-3 py-1.5 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:bg-gray-100 transition-colors flex items-center justify-center"
        aria-label="Decrease quantity"
      >
        <SvgIcon name="minus" width="16" height="16" aria-hidden={true} />
      </button>

      <div className="border-x border-gray-300 min-w-12 px-2 py-1.5 flex items-center justify-center text-center font-bold text-gray-900 select-none">
        {currentValue}
      </div>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={disabled || currentValue >= max}
        className="px-3 py-1.5 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:bg-gray-100 transition-colors flex items-center justify-center"
        aria-label="Increase quantity"
      >
        <SvgIcon name="plus" width="16" height="16" aria-hidden={true} />
      </button>
    </div>
  );
};

export default Stepper;
