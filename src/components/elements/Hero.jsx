import React, { useEffect } from "react";
import { useState } from "react";
import { getBSCContractInstance } from '../../utils/web3';


const Hero = () => {

  const [max, setMax] = useState('');
  const [circular, setCircular] = useState('');
  const [fire, setFire] = useState('');

  useEffect(() => {
    const getContractData = async () => {
      try {
        const contractBsc = getBSCContractInstance()
        const tokenDecimals = await contractBsc.methods.decimals().call()
        let maxSupply = await contractBsc.methods.totalSupply().call()
        maxSupply = maxSupply / (10 ** tokenDecimals)
        let circulatingSupply = await contractBsc.methods.getCirculatingSupply().call()
        circulatingSupply = circulatingSupply / (10 ** tokenDecimals)
        let firePit = await contractBsc.methods.firePitFee().call()
        console.log({ maxSupply, circulatingSupply, firePit })
        setMax(maxSupply)
        setCircular(circulatingSupply)
        setFire(fire)
      } catch (error) {
        console.log({ error })
      }
    }
    getContractData()
  }, [])

  return (
    <>
    <div className="Hero-section pt-5">
    <div className="container">
      <div className="row">
        <div className="h1 text-white text-start card-data">Y360 Dashboard</div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card-bg">
              <div className="card-body">
                <p className="">Y360 Price</p>
                <h1 className="">$0.00</h1>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-bg">
              <div className="card-body">
                <p className="">Market Cap</p>
                <h1 className="">$336,192.07</h1>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-bg">
              <div className="card-body">
                <p className="">Circulating Supply</p>
                <h1 className="">{circular}</h1>
                <p className="">Y360</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-bg">
              <div className="card-body">
                <p className="">Backed Liquidity</p>
                <h1 className="">100%</h1>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-bg">
              <div className="card-body">
                <p className="">Next Rebase</p>
                <h1 className="">10:49</h1>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-bg">
              <div className="card-body">
                <p className="">Max Supply</p>
                <h1 className="">{max}</h1>
                <p className="">Y360</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card-data text-center">
              <p>Y360 Insurance Fund Value</p>
              <h1>$0.00</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-data text-center">
              <p>Market Value of Treasury Asset</p>
              <h1>$0.00</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-data text-center">
              <p>BNB Liquidity Value</p>
              <h1>0.00 BNB</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-data text-center">
              <p>Pool Value</p>
              <h1>$0.00</h1>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card-data text-center">
              <p># Value of FirePit [Y360]</p>
              <h1>0.00 Y360</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-data text-center">
              <p>$ Value of FirePit</p>
              <h1>$0.00</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-data text-center">
              <p>% FirePit : Supply</p>
              <h1>{fire}%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Hero;
