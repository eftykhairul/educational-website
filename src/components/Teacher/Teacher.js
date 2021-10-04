import React, { useEffect, useState } from 'react';
import ShowTeacher from './ShowTeacher';
import './Teacher.css'

const Admission = () => {
    const [teachers,setTeachers]=useState([]);
    useEffect( ()=>{
        fetch("./tools3.JSON")
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[])
    return (
        <div className="teacher">
            {
                teachers.map(teacher=><ShowTeacher
                    key={teacher.id}
                    teacher={teacher}

                ></ShowTeacher>)
            }
        </div>
    );
};

export default Admission;