import React from "react";
import { Alchemy, Network } from "alchemy-sdk";

export const getFeeData = async () => {
  const config = {
    apiKey: import.meta.env.VITE_API_KEY,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(config);

  try {
    const response: object = await alchemy.core.getFeeData();
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
