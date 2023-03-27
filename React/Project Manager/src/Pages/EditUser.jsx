import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

export default function EditUser() {

    let { id } = useParams();

    async function getUserData() {

        let res = await fetch(`http://localhost:3000/users/${id}`);
        let user = await res.json();

        console.log(user);

        document.getElementById("name").value = user.name;
        document.getElementById("designation").value = user.designation;
        document.getElementById("birthDate").value = user.dob;
    }

    useEffect(() => {
        getUserData()
    }, [])

    async function handleUpdate(e) {

        if (!submitFormValid()) {
            alert("All fields are neccessary!");

        } else {

            e.preventDefault();
            let formEl = document.forms.userForm;
            let formData = new FormData(formEl);

            let jsonObj = {};
            formData.forEach((value, key) => jsonObj[key] = value);
            let json = JSON.stringify(jsonObj);

            fetch(`http://localhost:3000/users/${id}`, {
                method: "PUT",
                body: json,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then((res) => res.json())
                .then((json) => console.log(json))

            document.getElementById("name").value = ""
            document.getElementById("designation").value = ""
            document.getElementById("birthDate").value = ""

            return false
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
        <div className="h-screen">
            <form className='user-form container flex flex-col flex-wrap m-2 justify-center items-center' id='userForm' action="">
                <input className='form-control shadow appearance- border rounded w- py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Name' name='name' id='name' />

                <input className='form-control shadow appearance- border rounded w- py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Designation' name='designation' id='designation' />

                <span>
                    <label className='font-semibold' htmlFor="dob">Date of Birth: </label>
                    <input className='form-control ml-3 border border-stone-500 bg-stone-200 font-semibold text-zinc-700 hover:bg-stone-300 p-2 hover:text-neutral-800 rounded' type="date" placeholder='' name='dob' id='birthDate' />
                </span>

                <span>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-1 mt-3' type='submit' onClick={handleUpdate}>Update</button>
                    <Link to='/user'><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-3 mt-3'>Cancel</button></Link>
                </span>
            </form>
        </div>
    )
}

