import React, { useState } from 'react';

function Create() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [age, setAge] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const addEmployee = () => {
    if (name.trim() !== '' && id.trim() !== '' && age.trim() !== '' && profileImage.trim() !== '') {
      setEmployees([...employees, { name, id, age, profileImage }]);
      setName('');
      setId('');
      setAge('');
      setProfileImage('');
    }
  };

  const deleteEmployee = index => {
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  const updateEmployee = (index, key, newValue) => {
    const newEmployees = [...employees];
    newEmployees[index][key] = newValue;
    setEmployees(newEmployees);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-semibold text-zinc-200 my-5'>Employee Management</h1>
      <div className='flex flex-col gap-2 w-1/2'>
        <input
        className='py-2 outline-none bg-transparent border-b text-zinc-200 px-1 border-zinc-600 mx-2 my-1'
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
        className='py-2 outline-none bg-transparent border-b text-zinc-200 px-1 border-zinc-600 mx-2 my-1'
          type="text"
          placeholder="ID"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <input
        className='py-2 outline-none bg-transparent border-b text-zinc-200 px-1 border-zinc-600 mx-2 my-1'
          type="text"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <input
        className='py-2 outline-none bg-transparent border-b text-zinc-200 px-1 border-zinc-600 mx-2 my-1'
          type="text"
          placeholder="Profile Image URL"
          value={profileImage}
          onChange={e => setProfileImage(e.target.value)}
        />
        <div className='flex justify-center'><button onClick={addEmployee} className='py-2 px-5 bg-blue-500 text-[0.83rem] font-semibold mt-5 w-fit rounded-lg'>Add Employee</button></div>
      </div>
      <ul className='mt-5'>
        {employees.map((employee, index) => (
          <li key={index}>
            <input
            className='py-2 outline-none px-4 rounded-lg mx-2 my-1'
              type="text"
              value={employee.name}
              onChange={e => updateEmployee(index, 'name', e.target.value)}
            />
            <input
            className='py-2 outline-none px-4 rounded-lg mx-2 my-1'
              type="text"
              value={employee.id}
              onChange={e => updateEmployee(index, 'id', e.target.value)}
            />
            <input
            className='py-2 outline-none px-4 rounded-lg mx-2 my-1'
              type="text"
              value={employee.age}
              onChange={e => updateEmployee(index, 'age', e.target.value)}
            />
            <input
            className='py-2 outline-none px-4 rounded-lg mx-2 my-1'
              type="text"
              value={employee.profileImage}
              onChange={e => updateEmployee(index, 'profileImage', e.target.value)}
            />
            <button onClick={() => deleteEmployee(index)} className='px-5 font-bold text-xs py-2 bg-red-400 rounded-lg'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Create;
