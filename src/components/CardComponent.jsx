import * as React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Rating, fabClasses } from '@mui/material';
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom"

import "../Css/style.css"

const CardsComponent = ({ data, allData }) => {
  console.log(allData)
  const newObj = {
    hotelId: data.id,
    hotelList: allData

  }
  console.log(newObj)
  return (
    <div>
      <Card className="cardContainer"
        // variant="outlined"
        sx={{
          p: 2,
          background:'lightblue'
        
        }}
      >
        <div>
          <CardMedia
            component="img"
            minwidth="50"
            height="150"
            src={data.img}
            sx={{
              borderRadius: '6px',
              width: { xs: '100%', sm: 300 },
            }}
          />
        </div>
        <div id="cardCenter">
        <Typography variant="h5"  mt={2}>
          {data.HotelName}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1} fontWeight="regular">
          {data.Address}
        </Typography>
        <Typography variant="body2" color="green"  fontWeight="700">
          {data.text}
        </Typography>
        <Typography variant="body2" color="green"  fontWeight="700">
          {data.para}
        </Typography>
        <Typography variant="body2" color="text.secondary"  fontWeight="700">
        Availability :  {data.Availability}
        </Typography>
        </div>
        <div>
        <Rating name="read-only" value={data.Rating} sx={{mt:2,}} readOnly />
        <Typography variant="body2" fontSize={20} color="black" fontWeight="700" mt={1}>
        ₹{data.Price}
        </Typography>
        {data.Availability === 0 ?
          <>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Alert severity="error">Not Availability The room  </Alert>

          </>
          : <Link to={`/form`} className="link" state={newObj}> <Button variant="contained" sx={{mt:2,}}  >Booking</Button></Link>


        }
        </div>

       

      </Card>


    </div>
  )

}

export default CardsComponent