import { forwardRef, ComponentProps } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<"button">, "className">
>(({ children, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className="btn-primary"
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
