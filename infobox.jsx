import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import "./infobox.css";

export default function InfoBox({info}){
  
    
  //const INI_IMAGE="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const cold_url="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const rain_url="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
  return(
        <div className="Infobox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? rain_url:info.temp>15?HOT_URL:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity>80
          ? <ThunderstormIcon/>
          :info.temp>15
          ? <WbSunnyIcon/> 
          : <AcUnitIcon/>
          }

        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }} >
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}