import React from "react";

interface FeeData {
  FastGasPrice: string;
  LastBlock: string;
  ProposeGasPrice: string;
  SafeGasPrice: string;
  gasUsedRatio: string;
  suggestBaseFee: string;
}

export function gasHelper(data: FeeData): { name: string; gas: number }[] {
  const safe = {
    name: "Safe",
    gas: parseInt(data.SafeGasPrice),
  };

  const reccommend = {
    name: "Recommended",
    gas: parseInt(data.ProposeGasPrice),
  };

  const fast = {
    name: "Fast",
    gas: parseInt(data.FastGasPrice),
  };

  const result = [safe, reccommend, fast];

  return result;
}
