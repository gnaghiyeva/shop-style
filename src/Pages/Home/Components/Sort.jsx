// import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Sort = () => {
    // const[posts,setPosts] = useState();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="Age"
          
        >
          <MenuItem value='name'>Name</MenuItem>
          <MenuItem value='price'>Price</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  )
}

export default Sort