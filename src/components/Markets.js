import React, {useEffect, useState} from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import TokenCardLayout from './TokenCardLayout.js';
import AllTokensData, { filterMapper } from './../mockApiData/AllTokensData.js';
import Columns from '../mockApiData/Columns.js';
import TopWidgets from './TopWidgets.js';
import SignUp from './SignUp';
import classes from "./Markets.module.css";
import { TopWigetsMapping } from '../utils/utils.js';
import FilterSection from './FilterSection.js';
import tokens from '../store/tokens.js';
import { useDispatch, useSelector } from 'react-redux';
import './../App.css';
import "./../utils.css";

const Markets = () => {
    // dispatching data to store
    const dispatch = useDispatch();
    const {setData} = tokens.actionCreators;
    useEffect(() => {
      dispatch(setData(AllTokensData));
    },[]);
    const tokenData = useSelector(tokens.selectors.getData);

    const [searchStr, setSearchStr] = useState('');
    // state and functions for modal   
    const [open, setOpen] = useState(false);
    const [openFilters, setOpenFilters] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpenFilters = () => setOpenFilters(true);
    const handleClose = () => setOpen(false);
    const handleCloseFilters = () => setOpenFilters(false);
    const defaultFilters = {
        tokenName: '',
        value: '',
        holdings: '',
        sentiment: 'Fear',
        watchList: ''
    }
    const handleResetFilters = () => setFilter(defaultFilters)
    const [filter, setFilter] = useState(defaultFilters);
    // column configuration
    const [selectedColumns, setSelectedColumns] = useState(JSON.parse(localStorage.getItem('columns')) || []);
    if(selectedColumns.length === 0) {
        let col = Columns.map(ele => ele.id);
        setSelectedColumns(col);
        localStorage.setItem('columns', JSON.stringify(col));
    };

    const columnChangeHandler = (id) => {
        const columns = selectedColumns.includes(id) 
        ? selectedColumns.filter(ele => ele !== id) 
        : [...selectedColumns, id];

        localStorage.setItem('columns', JSON.stringify(columns));
        setSelectedColumns(columns);
    }

    // search and filter configuration
    const handleChange = (e, type) => {
        setFilter(prev =>  ({...prev, [type]: e.target.value}));
    }

    const submitHandler = () => {
        setOpenFilters(false);
    }

    const searchHandler = (e) => {
        setSearchStr(e.target.value);
    }

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    let filterSearchResults = tokenData.filter(ele => ele.name.toLowerCase().includes(searchStr.toLowerCase()) || ele.details.code.toLowerCase().includes(searchStr.toLowerCase()));
    for(let key in filter) {
        if(filter[key] !== '') {
            filterSearchResults = filterSearchResults.filter(ele => getNestedValue(ele, filterMapper[key]).toString().toLowerCase().includes(filter[key].toLowerCase()));
        }
    }
    const filterProps = {
        searchHandler,
        handleOpen,
        handleOpenFilters
    }

    return (
    <div className={classes.marketContainer}>
        <SignUp />
        <Box className={`margin20 ${classes.topWidgets}`}>
            {TopWigetsMapping.map(ele => <TopWidgets key={ele.title} title={ele.title} keys={ele.keys} subKey={ele.subKey} />)}
        </Box>
        <h1 className="fontSize20 mrBottom5 fontWeight500">All Tokens</h1>
        <FilterSection {...filterProps} />
        <Box>
            {filterSearchResults.map(data => (<TokenCardLayout key={data.id} tokenData={data} />))}
        </Box>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Column Settings
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div>
                    {Columns.map(ele => 
                        <FormControlLabel 
                            key={ele.id} 
                            control={<Checkbox checked={selectedColumns.includes(ele.id) ? true : false} onChange={() => columnChangeHandler(ele.id)} />} label={ele.name}
                        />)
                    }
                </div>
                </Typography>
            </Box>
        </Modal>
        <Modal
            open={openFilters}
            onClose={handleCloseFilters}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.modalStyle}>
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
                                <MenuItem value={"Extreme Good"}>Extreme Greed</MenuItem>
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
    </div>
    )
}

export default Markets;