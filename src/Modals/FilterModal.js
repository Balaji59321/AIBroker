import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import "./../App.css";

const FilterModal = ({filter,openFilters,handleChange,submitHandler,handleCloseFilters,handleResetFilters}) => {
  return (
    <Modal
        open={openFilters}
        onClose={handleCloseFilters}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className='modalStyle'>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Filter Settings
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
                <div className='flexCol gap15'>
                    <TextField id="outlined-basic" label="Token Name" variant="outlined" value={filter.tokenName} onChange={(e) => handleChange(e, "tokenName")} />
                    <TextField id="outlined-basic" label="Value" variant="outlined" value={filter.value}  onChange={(e) => handleChange(e, "value")} />
                    <TextField id="outlined-basic" label="Holdings" variant="outlined" value={filter.holdings}  onChange={(e) => handleChange(e, "holdings")} />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sentiment</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filter.sentiment}
                            label="Sentiment"
                            onChange={(e) => handleChange(e, "sentiment")}
                        >
                            <MenuItem value={"Extreme Greed"}>Extreme Greed</MenuItem>
                            <MenuItem value={"Greed"}>Greed</MenuItem>
                            <MenuItem value={"Neutral"}>Neutral</MenuItem>
                            <MenuItem value={"Fear"}>Fear</MenuItem>
                            <MenuItem value={"Extreme Fear"}>Extreme Fear</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="outlined-basic" label="WatchList" variant="outlined" value={filter.watchList}  onChange={(e) => handleChange(e, "watchList")} />
                    <Button variant='contained' onClick={submitHandler}>Submit</Button>
                    <Button variant='contained' onClick={handleCloseFilters}>Cancel</Button>
                    <Button variant='contained' onClick={handleResetFilters}>Reset</Button>
                </div>
            </div>
            </Typography>
        </Box>
    </Modal>
  )
}

export default FilterModal