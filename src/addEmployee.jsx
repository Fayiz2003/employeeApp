import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from './api';

const AddEmployee = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('active');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email) {
      setError('Please fill out all fields');
      return;
    }

    const newEmployee = { userName, email, status };
    await addEmployee(newEmployee);
    navigate('/');
  };

  return (
    <div>
      <h2 className='text-primary'>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label className='label1' style={{marginRight:'50px'}}>Username:</label>
        <input className='w-75' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <br />

        <label className='label1' style={{marginRight:'90px'}}>Email:</label>
        <input className='w-75' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label className='label1' style={{marginRight:'80px'}}>Status:</label>
        <select className='w-75' value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />

        <button className='btn btn-success' type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
