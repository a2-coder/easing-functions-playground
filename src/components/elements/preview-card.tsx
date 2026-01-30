import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as d3 from "d3";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useBoundingRect } from "@/lib/hooks";
import { Button } from "../ui/button";
import { IconPlayerPlay } from "@tabler/icons-react";
import { Spinner } from "../ui/spinner";
import { useConfigStore } from "@/store";
import { EASING_FUNCTIONS } from "@/lib/common";

const MARGINS = { top: 24, right: 24, bottom: 24, left: 24 };
const STEP = 2;

export function PreviewCard() {

    const { easing, duration } = useConfigStore();

    const container = useRef<HTMLDivElement>(null);
    const rect = useBoundingRect(container);
    const size = useMemo(() => rect?.width || 0, [rect]);
    const innerSize = useMemo(() => size - (MARGINS.left + MARGINS.right), [size]);

    const gx = useRef<SVGGElement>(null);
    const gy = useRef<SVGGElement>(null);
    const x = useMemo(() => {
        return d3.scaleLinear()
            .domain([0, duration])
            .range([MARGINS.left, size - MARGINS.right]);
    }, [size, duration]);

    const y = useMemo(() => {
        return d3.scaleLinear()
            .domain([-0.5, 1.5])
            .range([MARGINS.top, size - MARGINS.bottom]);
    }, [size]);

    // draw axis
    useEffect(() => {
        if (gx.current) {
            d3.select(gx.current).call(
                d3.axisBottom(x)
                    .tickValues(d3.range(0, duration + 1, duration / 5))
                    .tickPadding(12)
                    .tickSize(-innerSize)
                    .tickFormat((d) => `${d}ms`)
            );
        }
    }, [gx, x, innerSize, duration]);

    useEffect(() => {
        if (gy.current) {
            d3.select(gy.current).call(
                d3.axisLeft(y)
                    .ticks(4)
                    .tickPadding(4)
                    .tickSize(-innerSize)
                    .tickFormat(() => "")
            );
        }
    }, [gy, y, innerSize]);

    const ease = useMemo(() => {
        return EASING_FUNCTIONS[easing];
    }, [easing]);

    const path = useMemo(() => {
        const points = d3.range(0, duration + STEP, STEP).map((t) => {
            return [x(t), y(ease(t / duration))] as [number, number]
        })
        return d3.line().x((d) => d[0]).y((d) => d[1]).curve(d3.curveBasis)(points)
    }, [x, y, duration, ease]);

    const dot = useRef<SVGCircleElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [time, setTime] = useState(0);
    const [value, setValue] = useState(0);
    const reset = useCallback(() => {
        setTime(0)
        setValue(0)
        setIsAnimating(false);
    }, []);
    const animate = useCallback(() => {
        setIsAnimating(true);
        const t = d3.timer((elapsed) => {
            const progress = elapsed / duration;
            if (elapsed >= duration) {
                t.stop();
                // set to max
                setValue(ease(1));
                setTime(duration);
                setIsAnimating(false);
                // reset after 2 seconds
                setTimeout(() => {
                    reset();
                }, 2000);
            } else {
                const value = ease(progress);
                setValue(value);
                setTime(elapsed);
            }
        }, duration);
        return () => {
            t.stop();
            reset();
        };
    }, [reset, duration, ease]);

    // the animation preview
    const py = useRef<SVGGElement>(null);
    useEffect(() => {
        if (py.current) {
            d3.select(py.current).call(
                d3.axisRight(y)
                    .ticks(5)
                    .tickPadding(12)
                    .tickSize(10)
                    .tickFormat((d) => d.valueOf().toFixed(1))
            );
        }
    }, [py, y]);

    return (
        <Card className="gap-0">
            <CardHeader className="border-b">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>Preview the easing animation</CardDescription>
                    </div>
                    <Button variant="outline" size="icon" onClick={animate} disabled={isAnimating}>
                        <IconPlayerPlay />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <div className="flex items-end gap-0">
                    <div className="flex-1 relative">
                        <div className="flex items-center justify-between gap-4 px-6 absolute top-0 left-0 w-full">
                            <div className="space-x-1">
                                <span className="text-xs text-muted-foreground">Time</span>
                                <span className="text-xs">{time.toFixed(0)}ms</span>
                            </div>
                            <div className="space-x-1">
                                <span className="text-xs text-muted-foreground">Value</span>
                                <span className="text-xs">{ease(value).toFixed(2)}</span>
                            </div>
                        </div>
                        <div ref={container} className="w-full aspect-square flex items-center justify-center">
                            {
                                size ? (
                                    <svg className="w-full aspect-square" viewBox={`0 0 ${size} ${size}`}>
                                        <g className="preview_grid preview_grid__grid_x" ref={gx} transform={`translate(0, ${size - MARGINS.bottom})`} />
                                        <g className="preview_grid preview_grid__grid_y" ref={gy} transform={`translate(${MARGINS.left}, 0)`} />
                                        {path && <path d={path} className="stroke-blue-500/50 stroke-4 fill-none" />}
                                        <line x1={x(time)} y1={y(value)} x2={size} y2={y(value)} className="stroke-orange-500" strokeDasharray="4,4" />
                                        <circle ref={dot} cx={x(time)} cy={y(value)} r={6} className="fill-background stroke-4 stroke-blue-500" />
                                    </svg>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Spinner />
                                        <span className="text-sm text-muted-foreground">Loading...</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <svg className="flex-none w-16" viewBox={`0 0 64 ${size}`}>
                        <g className="[&_line]:stroke-border [&_path]:stroke-border" ref={py} transform={`translate(12, 0)`} />
                        <line x1={0} y1={y(value)} x2={12} y2={y(value)} className="stroke-orange-500" />
                        <circle cx={12} cy={y(ease(time / duration))} r={6} className="fill-background stroke-4 stroke-blue-500" />
                    </svg>
                </div>
            </CardContent>
        </Card>
    )
}

export default PreviewCard;