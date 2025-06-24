import React, { useState } from 'react'
import BoxInfo from "./BoxInfo"
import SearchBox from "./SearchBox"
import "./WeatherApp.css";
const WeatherApp = () => {
    let [showCard, setShowCard] = useState(false);
    let [data, setData] = useState({
        // city: "Delhi",
        // url: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // feels_like
        //     :
        //     40.72,
        // humidity
        //     :
        //     13,
        // temp
        //     :
        //     42.76,
        // tempMax
        //     :
        //     42.76,
        // tempMin
        //     :
        //     42.76,
        // weather
        //     :
        //     "clear sky"
    })

    let updateInfo = (result) => {
        setData(result);
        setShowCard(true);
    }

    return (
        <div className='WeatherApp' style={{ textAlign: "center" }}>
            <br />
            <h1>
                Weather &nbsp; Report

            </h1> <br />
            <SearchBox updateInfo={updateInfo} /><br />
            <br />
            {showCard && <BoxInfo data={data} />}
            <br />
        </div>
    )
}

export default WeatherApp
