import { useTransform } from "framer-motion";

export default function useStaggeringEffect(
  motionValue,
  input,
  output,
  { arrayLength, index }
) {
  const increaseBy = (input[input.length - 1] - input[0]) / arrayLength;
  const start = 0 + increaseBy * index + input[0];
  const end = increaseBy * (index + 1) + input[0];

if(typeof input[1][Symbol.iterator] === "function") console.log([start, ...input[1], end])
// [0.125, 0.375, 0.625, 0.875]

  return useTransform(
    motionValue,
    typeof input[1][Symbol.iterator] === "function"
      ? [start, ...input[1], end]
      : [start, end],
    output
  );
}


// (  (increaseBy * index) + (increaseBy * (index + 1)) + (2 * input[0])  ) / 2
