import {
  forwardRef,
  ComponentProps,
  RefAttributes,
  ForwardRefExoticComponent,
  SVGProps,
} from "react";

export interface CardProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  title: string;
  description: string;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  href: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, Icon, href, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="card hover-lift"
        {...rest}
      >
        <div>
          <span className="absolute right-3 bottom-3 flex items-center justify-center rounded-md opacity-10">
            <Icon className="h-12 w-12 text-white" aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-col h-full">
          <h3 className="card-header">{title}</h3>
          <p className="card-body">{description}</p>
          <div className="card-footer">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              Visit documentation →
            </a>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
