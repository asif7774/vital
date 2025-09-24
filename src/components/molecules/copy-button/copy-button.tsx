import { ComponentProps, forwardRef, useMemo, useState } from "react";
import {
  CheckCircleIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

interface Props
  extends Omit<ComponentProps<"div">, "className" | "onClick" | "title"> {
  text: string;
}

const CopyButton = forwardRef<HTMLDivElement, Props>(
  ({ text, ...rest }, ref) => {
    const [copied, setCopied] = useState(false);
    const onClick = () => {
      navigator.clipboard?.writeText(text).then(() => setCopied(true));
    };

    const Icon = useMemo(
      () => (copied ? CheckCircleIcon : DocumentDuplicateIcon),
      [copied]
    );
    const title = copied ? "Copied" : "Click to copy to clipboard";

    return (
      <div
        {...rest}
        ref={ref}
        role="button"
        className="btn-secondary"
        onClick={onClick}
        title={title}
      >
        <span className="text-gray-900">
          <span className="inline text-gray-500" aria-hidden="true">
            ${" "}
          </span>
          {text}
        </span>
        <span className="sr-only">(click to copy to clipboard)</span>
        <div>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    );
  }
);

export default CopyButton;
