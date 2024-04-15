import { useEffect, useState } from "react";
import instance from "../../service/AxiosOrder.jsx";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function View() {
  const [data, setData] = useState([]);

  useEffect(() => {
    datagannaFunctioneka();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'student_name', headerName: 'Student Name', width: 140 },
    { field: 'studentAge', headerName: 'Student Age', width: 150 }, // New column name
    { field: 'student_gender', headerName: 'Student Gender', width: 120 },
  ];

  const datagannaFunctioneka = () => {
    instance({
      method: 'get',
      url: '/getAll',
    })
      .then((response) => {
        console.log("responsee isss ", response.data);
        const array = [];
        response.data.forEach((val) => {
          array.push({
            id: val._id,
            student_name: val.name,
            age: val.age,
            studentAge: val.age, // New field for student age (optional)
            student_gender: val.gender,
          });
        });
        setData(array);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}