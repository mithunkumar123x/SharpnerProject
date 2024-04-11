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
        <StudentContext.Provider value = {{ students,addStudent }}>
            <div>
              <h1>Student Manager </h1>
              <h1>All Students:{students.length} </h1>
              <button onClick={openModal}>ADD NEW STUDENT</button>
              {showModal && <Modal closeModal={closeModal} addStudent={addStudent} student={selectedStudent} />}
              <h2>All Students</h2>
              <ul>
                {students.map((student,index) => (
                    <li key = {index}>
                        {student.name},{student.mobile},{student.address}
                        <button onClick={() => handleEdit(student)}>Edit</button>
                        <button onClick = {() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
              </ul>
            </div>
        </StudentContext.Provider>
    )
}

export default MainComponent;