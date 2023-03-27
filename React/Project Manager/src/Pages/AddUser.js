import React from 'react'
import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddUser() {

  const apiUrl = "http://localhost:3000/users";
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);


  async function getALLUsers() {

    let res = await fetch(apiUrl);
    let allUsers = await res.json();

    setUsers(allUsers);
    setLoading(false);
  }

  useEffect(() => {
    getALLUsers();
  }, [reload])


  async function handleSubmit(e) {

    if (!submitFormValid()) {
      alert("All fields are neccessary!");

    } else {

      e.preventDefault();
      let formEl = document.forms.userForm;
      let formData = new FormData(formEl);

      let jsonObj = {};
      formData.forEach((value, key) => jsonObj[key] = value);
      let json = JSON.stringify(jsonObj);

      fetch("http://localhost:3000/users", {
        method: "POST",
        body: json,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
        .then((res) => {
          res.json();
          toast.success("Registration Successfull!")
        })
        .then((json) => console.log(json))
        .catch((err) => {
          console.log(err);
          toast.error("User cannot be added!")
        })

      document.getElementById("name").value = ""
      document.getElementById("designation").value = ""
      document.getElementById("birthDate").value = ""

      setReload((r) => !r);

      return false;
    }

  }

  function submitFormValid() {
    let formDatas = Array.from(document.getElementsByClassName('form-control'));
    for (let field of formDatas) {
      if (field.value === "")
        return;
    }
    return true;
  }

  return (
    <div>
      <span className='flex m-3'>
        <div className='flex flex-col items-center m-3 mt-1 grow'>
          <form className='user-form container flex flex-col flex-wrap m-2 justify-center items-center' id='userForm' action="">
            <input className='form-control shadow appearance- border rounded w- py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Name' name='name' id='name' />

            <input className='form-control shadow appearance- border rounded w- py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Designation' name='designation' id='designation' />

            <span>
              <label className='font-semibold' htmlFor="dob">Date of Birth: </label>
              <input className='form-control ml-3 border border-stone-500 bg-stone-200 font-semibold text-zinc-700 hover:bg-stone-300 p-2 hover:text-neutral-800 rounded' type="date" placeholder='' name='dob' id='birthDate' />
            </span>

            <span>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-1 mt-3' type='submit' onClick={handleSubmit}>Register</button>
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-3 mt-3'>Cancel</button>
            </span>
          </form>
        </div>

        <div className='flex flex-col grow items-center'>
          <h2 className='text-lg text-gray-900 font-semibold mb-5'>Registered Users:</h2>
          <div>
            {loading ? "Loading Users ..." : users.map((user) => {
              return (
                <UserCard key={user.id} user={user} setReload={setReload} />
              )
            })}
          </div>
        </div>
      </span>
    </div>
  )
}