import React, { forwardRef } from "react";

export type ToggleSize = "sm" | "md" | "lg";

export interface ToggleProps extends Omit<
  React.ComponentProps<"input">,
  "type" | "className"
> {
  label?: string;
  description?: string;
  containerClassName?: string;
  size?: ToggleSize;
}

const trackStyles: Record<ToggleSize, string> = {
  sm: "h-5 w-9",
  md: "h-8 w-14",
  lg: "h-9 w-16",
};

const thumbStyles: Record<ToggleSize, string> = {
  sm: "size-3 peer-checked:start-4",
  md: "size-6 peer-checked:start-6",
  lg: "size-7 peer-checked:start-7",
};

const labelSizeStyles: Record<ToggleSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      description,
      containerClassName = "",
      disabled,
      size = "md",
      ...rest
    },
    ref,
  ) => {
    return (
      <label
        className={`relative inline-flex ${description ? "items-start" : "items-center"} gap-3 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${containerClassName}`}
      >
        <div
          className={`relative block ${trackStyles[size]} shrink-0 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:transparent] has-checked:bg-blue-600 ${description ? "mt-1" : ""}`}
        >
          <input
            type="checkbox"
            className="peer sr-only"
            disabled={disabled}
            ref={ref}
            {...rest}
          />
          <span
            className={`absolute inset-y-0 inset-s-0 m-1 ${thumbStyles[size]} rounded-full bg-white transition-[inset-inline-start] shadow-sm`}
          ></span>
        </div>
        {(label ?? description) && (
          <div className="flex flex-col">
            {label && (
              <span
                className={`${labelSizeStyles[size]} font-medium text-gray-900 select-none`}
              >
                {label}
              </span>
            )}
            {description && (
              <span
                className={`${labelSizeStyles[size]} text-gray-500 select-none mt-0.5`}
              >
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  },
);

Toggle.displayName = "Toggle";
export default Toggle;
