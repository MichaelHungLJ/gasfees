import React from "react";
import { Alchemy, Network } from "alchemy-sdk";

interface BigNumber {
  _hex: string;
  _isBigNumber: boolean;
}

interface FeeData {
  lastBaseFeePerGas: BigNumber | null;
  maxFeePerGas: BigNumber | null;
  maxPriorityFeePerGas: BigNumber | null;
  gasPrice: BigNumber | null;
}

export const getFeeData = async () => {
  const config = {
    apiKey: import.meta.env.VITE_API_KEY,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(config);

  try {
    const response: FeeData = await alchemy.core.getFeeData();
    const divisor = 10 ** 9;
    const data = {
      lastBaseFeePerGas:
        parseInt(response.lastBaseFeePerGas?._hex ?? "0", 16) / divisor,
      maxFeePerGas: parseInt(response.maxFeePerGas?._hex ?? "0", 16) / divisor,
      maxPriorityFeePerGas:
        parseInt(response.maxPriorityFeePerGas?._hex ?? "0", 16) / divisor,
      gasPrice: parseInt(response.gasPrice?._hex ?? "0", 16) / divisor,
    };
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
