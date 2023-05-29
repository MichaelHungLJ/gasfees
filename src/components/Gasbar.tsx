import React, { useEffect, useState } from "react";
import { getFeeData } from "../API/getFeeData";
import { getGasPrice } from "../API/getGasPrice";
import "./Gasbar.css";

export default function Gasbar() {
  const [feeData, setFeeData] = useState<object | undefined>(undefined);

  useEffect(() => {
    const callFeeDataAPI = async () => {
      try {
        const data: object = await getFeeData();
        setFeeData(data);
      } catch (error) {
        console.error(error);
      }
    };

    callFeeDataAPI();
  }, [console.log(feeData)]);

  return (
    <div className="gas-container">
      <div className="chain-name">
        <h3>Ethereum</h3>
      </div>
      <div className="chain-gas">
        <h3>Insert gas chain here</h3>
      </div>
    </div>
  );
}
