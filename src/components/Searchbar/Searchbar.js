import React, { useState } from 'react';
import './Searchbar.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box } from '@mui/system';

const Searchbar = ({handleFormSubmit}) => {
  const [term,setTerm] = useState(''); 

  const handleSubmit = () => {
    handleFormSubmit(term);
  }

  const handleChange = (e) =>{
    setTerm(e.target.value);
  }


 return(
   
    <Box sx={{
      display: 'flex',
      flexFlow: 'row'
    }}>
        <TextField
          id=""
          label=""
          onChange={handleChange} 
          sx={{
            width: 1000
          }}
        />
        <Button variant="contained" color="error" onClick={handleSubmit} sx={{
          ml: 3
        }}>
          SEARCH
        </Button> 
    </Box>
  );
}

export default Searchbar;
