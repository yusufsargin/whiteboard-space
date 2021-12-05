import React from 'react';
import {Observer} from "mobx-react-lite";

interface SvgContainerProps {
  id?: string
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

function SvgContainerForward({
                               id,
                               className,
                               children,
                               ...rest
                             }: SvgContainerProps, ref: React.ForwardedRef<SVGSVGElement>) {
  return (
    <Observer>
      {() => (
        <svg ref={ref} className={`wb-positioned-svg ${className}`} {...rest}>
          <g id={id} className="wb-centered-g">
            {children}
          </g>
        </svg>
      )}
    </Observer>
  );
}

export const SvgContainer = React.forwardRef<SVGSVGElement, SvgContainerProps>(SvgContainerForward)
