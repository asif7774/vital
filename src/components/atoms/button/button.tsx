import { forwardRef, ComponentProps } from "react";

interface ButtonProps extends Omit<ComponentProps<"button">, "className"> {
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "btn-primary", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={className}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
