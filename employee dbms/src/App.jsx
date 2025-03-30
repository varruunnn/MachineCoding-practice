import React, { use,useState,useEffect } from "react";
import "./App.css";
import data from "./data.json";
const App = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    age: "",
    dob: "",
    salary: "",
    address: "",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
  })
  const [popUp,setPopUp] = useState(false);
  useEffect(() => {
    setEmployees(data);
  },[])
  const addEmployee = () => {
    if (newEmployee.firstName && newEmployee.lastName) {
      setEmployees([
        ...employees,
        { ...newEmployee, id: employees.length + 1001 },
      ]);
      setNewEmployee({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        age: "",
        dob: "",
        salary: "",
        address: "",
        imageUrl: "",
      });
      setPopUp(false);
    }
  };
  const handleInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };
    const removeEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };
  return (
    <div className="App">
      <header>
        <h1>Employee Dbms</h1>
        <button onClick={()=>setPopUp(true)} className="addEmployee">Add Employee</button>
      </header>
      {popUp && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add New Employee</h2>
            <div className="form-container">
              <input type="text" name="firstName" placeholder="First Name" value={newEmployee.firstName} onChange={handleInputChange} />
              <input type="text" name="lastName" placeholder="Last Name" value={newEmployee.lastName} onChange={handleInputChange} />
              <input type="email" name="email" placeholder="Email" value={newEmployee.email} onChange={handleInputChange} />
              <input type="text" name="contactNumber" placeholder="Contact Number" value={newEmployee.contactNumber} onChange={handleInputChange} />
              <input type="number" name="age" placeholder="Age" value={newEmployee.age} onChange={handleInputChange} />
              <input type="date" name="dob" value={newEmployee.dob} onChange={handleInputChange} />
              <input type="number" name="salary" placeholder="Salary" value={newEmployee.salary} onChange={handleInputChange} />
              <input type="text" name="address" placeholder="Address" value={newEmployee.address} onChange={handleInputChange} />
              <input type="text" name="imageUrl" placeholder="Image URL" value={newEmployee.imageUrl} onChange={handleInputChange} />
              <button onClick={addEmployee}>Add Employee</button>
              <button className="close" onClick={() => setPopUp(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
      <div className="employee-list">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <img src={employee.imageUrl} alt="Employee" />
            <h3>{employee.firstName} {employee.lastName}</h3>
            <p>Email: {employee.email}</p>
            <p>Contact: {employee.contactNumber}</p>
            <p>Age: {employee.age}</p>
            <p>DOB: {employee.dob}</p>
            <p>Salary: {employee.salary}</p>
            <p>Address: {employee.address}</p>
            <button onClick={() => removeEmployee(employee.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
