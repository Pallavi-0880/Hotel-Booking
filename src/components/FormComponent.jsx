
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav"
import "../Css/style.css"
import Typography from '@mui/material/Typography';

const FormComponent = () => {
  const location = useLocation()
  const navigate = useNavigate()
 const hotelList = location.state.hotelList
 const hotelId = location.state.hotelId

  console.log(hotelId);

  const [formData, setFormData] = useState({
    selectedDates: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    room: '',
    place: '',
    checkOutDate: '',
    checkInDate:''
  });
  // console.log(formData)
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const form = event.target
    if (form.checkValidity()) {
      let updateData = {}
      hotelList.forEach((element) => {
        if (element.id === hotelId) {
          element.Availability -= formData.room;
          updateData = { ...element }
        }
      });

      fetch(`http://localhost:3001/data/${parseInt(hotelId)}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(updateData)
      })
      navigate('/table', { state: formData })
    }
  }


  return (
    <div> 
      <Nav/>   
      <div className="input">
      <Typography variant="h5" sx={{ color: "Green" }}>
        Please fill this form
      </Typography>
        <Box
          component="form"
          sx={{ 
            "& .MuiTextField-root": { m: 1, width: "20ch" },
          }}
          noValidate
          autoComplete="off"
        >

          <TextField
            Required
            type="text"
            id="firstName"
            label="First Name"
            onChange={handleChange}
          />
          <TextField
          required
            type="text"
            id="lastName"
            label="Last Name"
            onChange={handleChange}
          />
          <TextField
            required
            type="email"
            id="email"
            label="Email"
            onChange={handleChange}
          />
          <TextField
          required
            id="phoneNumber"
            label="Phone-Number"
            type="number"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
          Required
            id="room"
            label="Select-Rooms"
            type="number"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="checkInDate"
            label="Check in date"
            type="Date"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
           <TextField
            id="checkOutDate"
            label="Check out date"
            type="Date"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />

</Box>
          <Button variant="contained" sx={{m:10, mb:3,mt:2}} type="submit" onClick={handleSubmit}>Submit</Button >
        
      </div>
    </div>
  );
};

export default FormComponent;