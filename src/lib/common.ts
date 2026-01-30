import * as d3 from "d3";

export const EASING_FUNCTIONS = {
  linear: d3.easeLinear,
  polyIn: d3.easePolyIn,
  polyOut: d3.easePolyOut,
  polyInOut: d3.easePolyInOut,
  quadIn: d3.easeQuadIn,
  quadOut: d3.easeQuadOut,
  quadInOut: d3.easeQuadInOut,
  cubicIn: d3.easeCubicIn,
  cubicOut: d3.easeCubicOut,
  cubicInOut: d3.easeCubicInOut,
  sinIn: d3.easeSinIn,
  sinOut: d3.easeSinOut,
  sinInOut: d3.easeSinInOut,
  expIn: d3.easeExpIn,
  expOut: d3.easeExpOut,
  expInOut: d3.easeExpInOut,
  circleIn: d3.easeCircleIn,
  circleOut: d3.easeCircleOut,
  circleInOut: d3.easeCircleInOut,
  elasticIn: d3.easeElasticIn,
  elasticOut: d3.easeElasticOut,
  elasticInOut: d3.easeElasticInOut,
  backIn: d3.easeBackIn,
  backOut: d3.easeBackOut,
  backInOut: d3.easeBackInOut,
};

export type EasingFunction = keyof typeof EASING_FUNCTIONS;

export const EASING_FUNCTION_OPTIONS: Array<{
  label: string;
  value: EasingFunction;
}> = [
  { label: "Linear", value: "linear" },
  { label: "Poly In", value: "polyIn" },
  { label: "Poly Out", value: "polyOut" },
  { label: "Poly InOut", value: "polyInOut" },
  { label: "Quad In", value: "quadIn" },
  { label: "Quad Out", value: "quadOut" },
  { label: "Quad InOut", value: "quadInOut" },
  { label: "Cubic In", value: "cubicIn" },
  { label: "Cubic Out", value: "cubicOut" },
  { label: "Cubic InOut", value: "cubicInOut" },
  { label: "Sin In", value: "sinIn" },
  { label: "Sin Out", value: "sinOut" },
  { label: "Sin InOut", value: "sinInOut" },
  { label: "Exp In", value: "expIn" },
  { label: "Exp Out", value: "expOut" },
  { label: "Exp InOut", value: "expInOut" },
  { label: "Circle In", value: "circleIn" },
  { label: "Circle Out", value: "circleOut" },
  { label: "Circle InOut", value: "circleInOut" },
  { label: "Elastic In", value: "elasticIn" },
  { label: "Elastic Out", value: "elasticOut" },
  { label: "Elastic InOut", value: "elasticInOut" },
  { label: "Back In", value: "backIn" },
  { label: "Back Out", value: "backOut" },
  { label: "Back InOut", value: "backInOut" },
];
