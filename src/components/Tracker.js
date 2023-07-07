import React, { useState, useEffect } from "react";
import axios from 'axios';
const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>`;
const dataUrl = `data:image/svg+xml,${encodeURIComponent(arrowSvg)}`;

export default function Tracker() {
    const [ipAddress, setIPAddress] = useState('');
    const [location, setLocation] = useState('');
    const [timezone, setTimezone] = useState('');
    const [isp, setISP] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_ZxIPaYT8ctW8S0zlJazfPprK3gRr3&ipAddress=${ipAddress}`);
          const { ip, location, isp } = response.data;
          setIPAddress(ip);
          setLocation(` ${location.region}, ${location.country}`);
          setTimezone(location.timezone);
          setISP(isp);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
            <div className="h-[35vh]  w-[100vw]  relative" >
                <img src="assets/Images/pattern-bg-desktop.png" className="w-full h-full lg:block sm:hidden" />
                <img src="assets/Images/pattern-bg-mobile.png" className=" w-full h-full lg:hidden" />
                <h1 className="absolute top-[5%] right-[43%] font-bold text-white text-2xl mx-auto">
                    IP Address Tracker
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className=" absolute top-[20%] lg:left-[40%] sm:left-[15%] mx-auto"
                >
                    <input
                        type="text" placeholder="Search for any IP address or domain"
                        value={ipAddress}
                        onChange={(e) => setIPAddress(e.target.value)}

                        className="h-10 lg:w-80 sm:w-72 rounded-l-lg outline-none p-3"
                    />
                    <button className="bg-primary-darkgray h-10 w-10 px-[3%] rounded-r-lg">
                        <img src={dataUrl} alt="arrowSvg" />
                    </button>
                </form>
                <div
                    className="absolute w-[85%] lg:h-36 sm:h-[45vh] bg-white mx-[8%] rounded-lg lg:top-[75%] sm:top-[50%] flex lg:flex-row sm:flex-col p-[3%]"
                >
                    <div className="lg:border-r-2 lg:border-solid lg:border-primary-gray lg:h-[85%] w-[25%] lg:mx-[3%] sm:mx-auto sm:mb-[4%]">
                        <h2 className="text-primary-gray font-bold "> IP ADDRESS</h2>
                        <h1 className="font-bold text-xl lg:mr-2"> {ipAddress} </h1>
                    </div>
                    <div className="lg:border-r-2 lg:border-solid lg:border-primary-gray lg:h-[85%] w-[25%] lg:mx-[2%] sm:mx-auto sm:mb-[4%]">
                        <h2 className="text-primary-gray font-bold"> LOCATION</h2>
                        <h1 className="font-bold text-lg"> {location} </h1>
                    </div>
                    <div className="lg:border-r-2 lg:border-solid lg:border-primary-gray lg:h-[85%] w-[25%] lg:mx-[3%] sm:mx-auto sm:mb-[4%]">
                        <h2 className="text-primary-gray font-bold">TIME ZONE</h2>
                        <h1 className="font-bold text-xl"> {timezone} </h1>
                    </div>
                    <div className=" w-[25%] lg:mx-[3%] sm:mx-auto sm:mb-[3%]">
                        <h2 className="text-primary-gray font-bold"> ISP </h2>
                        <h1 className="font-bold text-xl"> {isp} </h1>
                    </div>
                </div>
            </div>
            <div className="h-[65vh] w-screen bg-red-500"> 
            <img src="assets/Images/GoogleMapTA.webp" className="w-full h-full"/>   
            </div>
        </div>
    )
}