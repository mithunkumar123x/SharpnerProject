import React, { useState } from 'react';

const Modal = ({ addStudent , closeModal }) => {
    const [name ,setName] = useState('')
    const [mobile,setMobile] = useState('')
    const [address , setAddress] = useState('')

    const handleAdd = () => {
        addStudent({ name, mobile,address});
        closeModal()
    }

    return (
        <div>
            <form>
                <label>Name:</label>
                <input type="text" value = {name} onChange={(e) => setName(e.target.value) } />
                <label>Mobile:</label>
                <input type="number" value = {mobile} onChange={(e) => setMobile(e.target.value) } />
                <label>Address:</label>
                <input type="text" value = {address} onChange={(e) => setAddress(e.target.value) } />
                <button  className="btn w-64 rounded-full btn-outline btn-success"  onClick={handleAdd}>ADD</button>
                <button  class="btn w-64 rounded-full btn-outline border-t-pink-700"  onClick={closeModal}>CLOSE</button>
            </form>
        </div>
    )
}

export default Modal;