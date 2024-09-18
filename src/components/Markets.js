import React, {useEffect, useState} from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import tokens from '../store/tokens.js';
import AllTokensData, { filterMapper } from './../mockApiData/AllTokensData.js';
import Columns from '../mockApiData/Columns.js';
import TopWidgets from './TopWidgets.js';
import SignUp from './SignUp';
import FilterSection from './FilterSection.js';
import TokenCardLayout from './TokenCardLayout.js';
import { TopWigetsMapping } from '../utils/utils.js';
import ColumnModal from '../Modals/ColumnModal.js';
import './../App.css';
import "./../utils.css";
import classes from "./Markets.module.css";
import FilterModal from '../Modals/FilterModal.js';

const Markets = ({isDarkTheme}) => {
    // dispatching data to store
    const dispatch = useDispatch();
    const {setData} = tokens.actionCreators;
    useEffect(() => {
      dispatch(setData(AllTokensData));
    },[]);
    const tokenData = useSelector(tokens.selectors.getData);

    // defaults
    const defaultFilters = {
        tokenName: '',
        value: '',
        holdings: '',
        sentiment: '',
        watchList: ''
    }

    // state
    const [searchStr, setSearchStr] = useState('');
    const [open, setOpen] = useState(false);
    const [openFilters, setOpenFilters] = useState(false);
    const [filter, setFilter] = useState(defaultFilters);
    const [selectedColumns, setSelectedColumns] = useState(JSON.parse(localStorage.getItem('columns')) || []);
    
    // column configuration
    if(selectedColumns.length === 0) {
        let col = Columns.map(ele => ele.id);
        setSelectedColumns(col);
        localStorage.setItem('columns', JSON.stringify(col));
    };

    // functions
    const handleOpen = () => setOpen(true);
    const handleOpenFilters = () => setOpenFilters(true);
    const handleClose = () => setOpen(false);
    const handleCloseFilters = () => setOpenFilters(false);
    const handleResetFilters = () => setFilter(defaultFilters)
    const columnChangeHandler = (id) => {
        const columns = selectedColumns.includes(id) 
        ? selectedColumns.filter(ele => ele !== id) 
        : [...selectedColumns, id];

        localStorage.setItem('columns', JSON.stringify(columns));
        setSelectedColumns(columns);
    }
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
        console.log(path.split('.').reduce((acc, part) => acc && acc[part], obj));
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    // filter logic based on search and filter
    let filterSearchResults = tokenData.filter(ele => ele.name.toLowerCase().includes(searchStr.toLowerCase()) || ele.details.code.toLowerCase().includes(searchStr.toLowerCase()));
    for(let key in filter) {
        if(filter[key] !== '') {
            console.log(key, filter[key]);
            filterSearchResults = filterSearchResults.filter(ele => getNestedValue(ele, filterMapper[key]).toString().toLowerCase().includes(filter[key].toLowerCase()));
        }
    }

    // props for the components
    const filterProps = {
        searchHandler,
        handleOpen,
        handleOpenFilters,
        handleResetFilters
    }
    const columnModalProps = {
        open,
        handleClose,
        selectedColumns,
        columnChangeHandler
    }
    const filterModalProps = {
        filter,
        openFilters,
        handleChange,
        submitHandler,
        handleCloseFilters,
        handleResetFilters
    }

    return (
    <div className={classes.marketContainer}>
        <SignUp />
        <Box className={`margin20 ${classes.topWidgets}`}>
            {TopWigetsMapping.map(ele => <TopWidgets key={ele.title} title={ele.title} keys={ele.keys} subKey={ele.subKey} isDarkTheme={isDarkTheme} />)}
        </Box>
        <h1 className="fontSize20 mrBottom5 fontWeight500">All Tokens</h1>
        <FilterSection {...filterProps} />
        <Box>
            {filterSearchResults.map(data => (<TokenCardLayout key={data.id} tokenData={data} isDarkTheme={isDarkTheme} />))}
        </Box>
        {open && <ColumnModal {...columnModalProps} />}
        {openFilters && <FilterModal {...filterModalProps} />}
    </div>
    )
}

export default Markets;