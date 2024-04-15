import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from "react";
import instance from "../../service/AxiosOrder.jsx";
import Swal from "sweetalert2";

export default function Action(){

    console.log('run-------------')
    const [student_name, setName] = useState("");
    const [student_address, setAddress] = useState("");
    const [student_age, setAge] = useState("");
    const [student_contact, setContact] = useState("");


    const save = () => {

        instance.post('/student/save', {
            student_name: student_name,
            student_address: student_address,
            student_age:student_age,
            student_contact:student_contact
        })
            .then(function (response) {
                console.log(response);
                Swal.fire({
                    title:'Saved',
                    text:"Your work has been saved!",
                    icon:"success",
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const clear=()=>{
        Swal.fire({
            title:'Are You sure?',
            text:"Your data will be lost!",
            icon:"warning",
        })
    }


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '60ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField onChange={(val)=> setName(val.target.value)} id="Student Name" label="Name" variant="outlined"/>
            <TextField onChange={(val)=> setAddress(val.target.value)} id="Student Address" label="Address" variant="outlined"/> <br/><br/>
            <TextField onChange={(val)=> setAge(val.target.value)} id="Student Age" label="Age" variant="outlined"/>
            <TextField onChange={(val)=> setContact(val.target.value)} id="Student Contact" label="Contact" variant="outlined"/> <br/><br/>

            <Stack direction="row" spacing={120}>

                <Button variant="contained" onClick={save} color="success">
                    Save
                </Button>
                <Button variant="outlined" onClick={clear} color="error">
                    Clear
                </Button>
            </Stack>

        </Box>
    );
}
