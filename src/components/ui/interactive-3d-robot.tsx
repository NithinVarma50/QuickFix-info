'use client';

import { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
    scene: string;
    className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
    return (
        <Suspense
            fallback={
                <div className="absolute inset-0 flex items-center justify-center bg-transparent z-0">
                    <svg className="animate-spin h-8 w-8 text-foreground/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
                    </svg>
                </div>
            }
        >

            <Spline
                scene={scene}
                className={className}
                style={{
                    // The built-in Spline component doesn't inherently allow hiding the logo, 
                    // but we can apply custom CSS through styled components or a global stylesheet 
                    // to `div a` elements that load the badge. 
                    // Often it's `.spline-watermark` or requires a pro account, but 
                    // standard pointer events CSS handles it nicely.
                    pointerEvents: "auto",
                }}
            />
            {/* Inline style specifically targetting spline watermarks generically */}
            <style dangerouslySetInnerHTML={{
                __html: `
              #logo a {
                 display: none !important;
              }
              .spline-watermark {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
              }
              canvas {
                outline: none !important;
              }
            `}} />
        </Suspense >
    );
}
