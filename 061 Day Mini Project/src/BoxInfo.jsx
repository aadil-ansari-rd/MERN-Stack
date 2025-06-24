import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./BoxInfo.css"

import  SunnyIcon  from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const BoxInfo = ({ data }) => {
    let HOT_URL = "https://images.unsplash.com/photo-1667066982949-182ce6da8764?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1641330126673-340517eb434e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAINY_URL = "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className='boxInfo'>
            <div className="card-info">
                <Card style={{maxWidth:"30%"}} >
                    <CardContent>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={
                                data.humidity > 80 ? RAINY_URL : (data.temp > 15 ? HOT_URL : COLD_URL)
                            }
                            title="green iguana"
                        /> <br />
                        <Typography gutterBottom variant="h5" component="div" >

                            {data.city} {data.humidity>80 ? <ThunderstormIcon/> : (data.temp>15? <SunnyIcon/> : <AcUnitIcon/>)}
                        </Typography> 
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            
                            <p>Temperature : {data.temp}&deg; C </p>
                            <p>TempMax : {data.tempMax}&deg; C</p>
                            <p>TempMin : {data.tempMin}&deg; C</p>
                            <p>Humidity : {data.humidity}</p>
                            <p>Feels like : {data.feels_like}&deg; C  </p>
                            <p>The weather can be described as <i>{data.weather}</i> and feels like  {data.feels_like}&deg;C</p>
                           
                            <p style={{textAlign:"end"}}>By : Aadil Ansari</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}

export default BoxInfo
