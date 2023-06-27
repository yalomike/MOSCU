import React from "react";
import Map from "../Images/moscumapa.jpeg";
import { Link } from "react-router-dom";

const Bookings = () => {
  return (
    <div className="bg-black md:pb-96">
      <div className="mb-4 text-center">
        <h1 className="text-white sm:text-4xl ms-11 relative text-center">
          DO YOUR BOOKINGS HERE!
        </h1>
        <Link to="/">
          <button className="text-white rounded bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 mt-5 mb-5">
            BACK HOME
          </button>
        </Link>
      </div>

      <div className="sm:w-6/12 sm:ms-96 sm:-mt-80 md:rotate-90">
        <img src={Map} alt="mapa" />
      </div>
      <div>
        <h3 className="md:text-4xl md:-mt-60 md:mb-24 text-white text-center">
          LISTA DE MESAS DISPONIBLES
        </h3>
        <div>
          <div className="grid grid-cols-1 ms-10 me-10 gap-5">
            <h1 className="text-black lg:text-3xl bg-gray-100 text-center rounded-2xl">
              PISTA GENERAL
            </h1>
          </div>
          <div className="grid grid-cols-5 ms-32 mt-10 gap-5 lg:text-3xl">
            <div className="text-white">100</div>
            <div className="text-white">101</div>
            <div className="text-white ">102</div>
            <div className="text-white ">103</div>
            <div className="text-white ">104</div>
            <div className="text-white ">105</div>
            <div className="text-white ">106</div>
            <div className="text-white ">107</div>
            <div className="text-white ">108</div>
            <div className="text-white ">109</div>
            <div className="text-white ">110</div>
            <div className="text-white ">111</div>
            <div className="text-white ">112</div>
            <div className="text-white ">113</div>
            <div className="text-white ">204</div>
            <div className="text-white ">205</div>
            <div className="text-white ">206</div>
            <div className="text-white ">207</div>
          </div>
          <h1 className="text-black lg:text-3xl bg-gray-100 text-center rounded-2xl ms-10 me-10 mt-10">
            VIP + PALCO VIP
          </h1>
          <div className="grid grid-cols-5 ms-32 mt-10 gap-5 lg:text-3xl">
            <div className="text-white">300</div>
            <div className="text-white">301</div>
            <div className="text-white ">302</div>
            <div className="text-white ">303</div>
            <div className="text-white ">304</div>
            <div className="text-white ">305</div>
            <div className="text-white ">306 ALTA</div>
            <div className="text-white ">307 ALTA</div>
            <div className="text-white ">308</div>
            <div className="text-white ">309</div>
            <div className="text-white ">400</div>
            <div className="text-white ">401</div>
            <div className="text-white ">402</div>
            <div className="text-white ">403</div>
            <div className="text-white ">404</div>
            <div className="text-white ">405</div>
            <div className="text-white ">406</div>
            <div className="text-white ">407</div>
            <div className="text-white ">408</div>
            <div className="text-white ">409</div>
            <div className="text-white ">410</div>
            <div className="text-white ">411</div>
            <div className="text-white ">412</div>
            <div className="text-white ">500</div>
            <div className="text-white ">501</div>
            <div className="text-white ">506</div>
            <div className="text-white ">507</div>
            <div className="text-white ">508</div>
            <div className="text-white ">509</div>
            <div className="text-white ">510</div>
            <div className="text-white ">511</div>
            <div className="text-white ">512</div>
            <div className="text-white ">513</div>
            <div className="text-white ">514</div>
            <div className="text-white ">515</div>
            <div className="text-white ">516</div>
            <div className="text-white ">516bis</div>
          </div>

          <h1 className="text-black lg:text-3xl bg-gray-100 text-center rounded-2xl ms-10 me-10 mt-10">
            TERRAZA VIP
          </h1>
          <div className="grid grid-cols-5 ms-32 mt-10 gap-5 lg:text-3xl">
            <div className="text-white">600</div>
            <div className="text-white">601</div>
            <div className="text-white ">602</div>
            <div className="text-white ">603</div>
            <div className="text-white ">604</div>
            <div className="text-white ">605</div>
            <div className="text-white ">606</div>
            <div className="text-white ">607</div>
            <div className="text-white ">40</div>
            <div className="text-white ">41</div>
            <div className="text-white ">42</div>
            <div className="text-white ">43</div>
            <div className="text-white ">44</div>
            <div className="text-white ">45</div>
            <div className="text-white ">46</div>
            <div className="text-white ">47</div>
          </div>
          <h1 className="text-black lg:text-3xl bg-gray-100 text-center rounded-2xl ms-10 me-10 mt-10">
            ULTRA VIP
          </h1>
          <div className="grid grid-cols-5 ms-32 mt-10 gap-5 lg:text-3xl">
            <div className="text-white">700</div>
            <div className="text-white">701</div>
            <div className="text-white ">702</div>
            <div className="text-white ">703</div>
            <div className="text-white ">704</div>
            <div className="text-white ">705</div>
            <div className="text-white ">706</div>
            <div className="text-white ">707</div>
            <div className="text-white ">708</div>
            <div className="text-white ">709</div>
            <div className="text-white ">710</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
