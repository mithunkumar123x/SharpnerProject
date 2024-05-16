import React, { useState } from 'react';
import Modal from './Modal'
import { StudentContext } from '../contexts/StudentContext';


function MainComponent() {
    const[students,setStudents] = useState([])
    const [showModal , setShowModal] = useState(false)
    const [selectedStudent,setSelectedStudent] = useState(null)

  const addStudent = (studentData) => {
    setStudents([...students,studentData])
  }

  const openModal = () => {
     setShowModal(true)
  } 

  const closeModal = () => {
    setShowModal(false)
  }

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  }
 
  const handleDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index,1);
    setStudents(updatedStudents)
  }
   
    return (
        <StudentContext.Provider  value = {{ students,addStudent }}>
            <div className='bg-green-400'>
              <h1>Student Manager </h1>
              <h1 className='bg-green-400'>All Students:{students.length} </h1>
              <button className=" w-64 rounded-full btn-outline btn-primary"
               onClick={openModal}>ADD NEW STUDENT</button>
              {showModal && <Modal closeModal={closeModal} addStudent={addStudent} student={selectedStudent} />}
              <h1 >All Students</h1>
              <ul>
                {students.map((student,index) => (
                    <li key = {index}>
                        {student.name},{student.mobile},{student.address}
                        <button className="btn btn-outline btn-primary"
                         onClick={() => handleEdit(student)}>Edit</button>
                        <button className="btn btn-outline btn-success"
                         onClick = {() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
              </ul>
            </div>
        </StudentContext.Provider>
    )
}

export default MainComponent;