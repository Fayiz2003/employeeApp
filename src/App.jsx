import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';

function App() {
  return (
    <Router>
      <div id='main' className="App">
        <h1 id='heading'>Employee Management</h1>
        <div id='divv'>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
