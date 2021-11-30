import React, { useState } from 'react';
import './Searchbar.css';
import TextField from '@mui/material/TextField'

const Searchbar = (props) => {
  const [term,setTerm] = useState('');

  const handleSubmit = () => {
    {props.handleFormSubmit(term)}
  }

  const handleChange = (e) =>{
    setTerm(e.target.value);
  }


 return(
<form onSubmit={handleSubmit}>
    <TextField
      id=""
      label=""
      onChange={handleChange}
    />
  </form>
);
}

export default Searchbar;
