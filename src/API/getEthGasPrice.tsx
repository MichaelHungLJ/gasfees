import React from "react";

export const getEthGasPrice = async () => {
  const api_key = import.meta.env.VITE_ETH_API;
  const url = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${api_key}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("ETH", data.result);
    return data.result;
  } catch (error) {
    // Handle any errors that occur during the fetch request
    console.error("Error fetching gas data:", error);
    throw error;
  }
};
