import React from 'react';
import { Box, Checkbox, FormControlLabel, Modal, Typography } from '@mui/material';
import Columns from '../mockApiData/Columns.js';
import "./../App.css"

const ColumnModal = ({open,handleClose,selectedColumns,columnChangeHandler}) => {
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className='modalStyle'>
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
  )
}

export default ColumnModal;