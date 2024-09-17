import React from 'react';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, TextField } from '@mui/material';
import classes from  "./Markets.module.css";;

const FilterSection = ({searchHandler, handleOpen, handleOpenFilters}) => {
  return (
    <div className={`flex gap15 ${classes.filtersAlign}`}>
    <TextField
        slotProps={{
            input: {
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            },
        }}
        id="outlined-basic"
        variant="outlined"
        placeholder="Search by token name or tag"
        size="small"
        onChange={searchHandler}
        className={classes.searchWidth}
    />
    <Button
        className={classes.iconBrColor}
        onClick={handleOpen} 
        variant="outlined"
        endIcon={<SplitscreenIcon fontSize='small' className='grey'/>}
    >
        <span className='textCaptialise grey'>Columns</span>
    </Button>
    <Button
        className={classes.iconBrColor}
        onClick={handleOpenFilters} 
        variant='outlined' 
        endIcon={<FilterAltIcon fontSize='small' className='grey'/>}
    >
        <span className='textCaptialise grey'>Filters</span>
    </Button>
</div>
  )
}

export default FilterSection