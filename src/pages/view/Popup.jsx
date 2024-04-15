// import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from "react";
import instance from "../../service/AxiosOrder.jsx";


export default function Popup({handleClose, open, updateData}) {


    const [student_name, setName] = useState(updateData?.student_name);
    const [student_address, setAddress] = useState(updateData?.student_address);
    const [student_age, setAge] = useState(updateData?.age);
    const [student_contact, setContact] = useState(updateData?.phoneno);

    useEffect(() => {
        console.log('run')
    }, []);
    const update = () => {
        instance.put(`/student/update/${updateData.id}`, {
            student_name: student_name,
            student_address: student_address,
            student_age: student_age,
            student_contact: student_contact
        })
            .then(function (response) {
                handleClose();

            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Update Student"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField value={student_name} onChange={(val) => setName(val.target.value)} id="Student Name"
                                   label="Name" variant="outlined"/>
                        <TextField value={student_address} onChange={(val) => setAddress(val.target.value)}
                                   id="Student Address" label="Address" variant="outlined"/> <br/><br/>
                        <TextField value={student_age} onChange={(val) => setAge(val.target.value)} id="Student Age"
                                   label="Age" variant="outlined"/>
                        <TextField value={student_contact} onChange={(val) => setContact(val.target.value)}
                                   id="Student Contact" label="Contact" variant="outlined"/> <br/><br/>


                    </Box>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancal</Button>
                <Button onClick={update} autoFocus>
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
}