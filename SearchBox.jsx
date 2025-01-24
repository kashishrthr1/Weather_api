import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    
    let[city,setCity]=useState("");
    let [err,setErr]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="bcd55b4a1bd26b820bdb387281a0f98a";

    let getWeatherInfo=async()=>{
        try {
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
             let jsResponse= await response.json();
             console.log(jsResponse);
         let res={
          city:city,
          temp:jsResponse.main.temp,
          tempMin:jsResponse.main.temp_min,
          tempMax:jsResponse.main.temp_max,
          humidity:jsResponse.main.humidity,
          feelsLike:jsResponse.main.feels_like,
          weather:jsResponse.weather[0].description,
        };
        console.log(res);
        return res;

        } catch(err){
            throw err;
        }
        
    };
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
       let newinfo=await getWeatherInfo();
       updateInfo(newinfo);
        } catch(err){
            setErr(true);
        }
        
    };
    return(
        <div className="searchbox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">
                Search
            </Button>
            {err && <p style={{color:"red"}}>no such place exist!</p>}
            </form>
         </div>
    )
}