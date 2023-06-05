import React, { useEffect, useState } from "react";
import { getMaticGasPrice } from "../API/getMaticGasPrice";
import { getEthGasPrice } from "../API/getEthGasPrice";
import { getBnbGasPrice } from "../API/getBnbGasPrice";
import "./Gasbar.css";
import { gasHelper } from "../API/gasHelper";

type GasbarProps = {
  chain: string;
};

export default function Gasbar({ chain }: GasbarProps) {
  const [gasPrice, setGasPrice] = useState<{ name: string; gas: number }[]>([]);
  const [chainName, setChainName] = useState<string>("");

  useEffect(() => {
    const callFeeDataAPI = async () => {
      try {
        let data;
        if (chain === "ETH") {
          data = await getEthGasPrice();
          setChainName("Ethereum");
        } else if (chain === "MATIC") {
          data = await getMaticGasPrice();
          setChainName("Polygon");
        } else if (chain === "BNB") {
          data = await getBnbGasPrice();
          setChainName("Binance Smart Chain");
        }
        const arr = await gasHelper(data);

        setGasPrice(arr);
      } catch (error) {
        console.error(error);
      }
    };

    callFeeDataAPI();

    const interval = setInterval(callFeeDataAPI, 10000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [chain]);

  return (
    <div className="gas-container">
      <div className="chain-name">
        <span>{chainName}</span>
      </div>
      <div className="chain-gas">
        {gasPrice?.map((element) => (
          <div className="gas-price-box" key={element.name}>
            <span className="speed">{element.name}</span>
            <span className="gwei">{element.gas}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
