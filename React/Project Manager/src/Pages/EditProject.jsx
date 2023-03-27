import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function EditProject() {

    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [allUsers, setAllUsers] = useState("");
    const [load, setLoad] = useState(true);
    const [assignedVal, setAssignedVal] = useState();

    async function getProjectData() {
        let res = await fetch(`http://localhost:3000/projects/${id}`);
        let project = await res.json();

        console.log(project);

        document.getElementById("title").value = project.title
        document.getElementById("description").value = project.description
        setAssignedVal(project.assinedTo);
        document.getElementById("status-select").value = project.status
        document.getElementById("endDate").value = project.endDate
        document.getElementById("categorySelect").value = project.category

        setLoading(true);
    }


    async function getUsers() {
        let response = await fetch("http://localhost:3000/users");
        let users = await response.json();

        console.log(users);

        setAllUsers(users);

        setLoad(false)
    }

    useEffect(() => {
        getUsers()
    }, [load, assignedVal])

    useEffect(() => {
        getProjectData()
    }, [])

    async function handleUpdate(e) {
        e.preventDefault();

        if (!submitFormValid()) {
            alert("All fields are neccessary!");

        } else {

            let formEl = document.forms.editProjectForm;

            let formData = new FormData(formEl);

            let jsonObj = {};
            formData.forEach((value, key) => jsonObj[key] = value);
            let json = JSON.stringify(jsonObj);

            console.log(json);

            fetch(`http://localhost:3000/projects/${id}`, {
                method: "PATCH",
                body: json,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then((res) => res.json())
                .then((json) => console.log(json))

            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
            document.getElementById("assigned").value = "";
            document.getElementById("status-select").value = "";
            document.getElementById("endDate").value = null;
            document.getElementById("categorySelect").value = "";

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
        <div className='edit-project-form flex flex-col items-center m-3 mt-1'>

            <form id='editProjectForm' className='container flex flex-col flex-wrap m-2 items-start'>
                <input className='form-control shadow appearance- border rounded w- py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="title" id="title" placeholder='Title' />
                <br />
                <textarea className='form-control shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="description" id="description" cols="50" rows="5" placeholder='Description'></textarea>
                <br />
                <select className='form-control bg-stone-200 font-semibold border border-stone-500 text-zinc-700 hover:bg-stone-300 p-2 hover:text-neutral-800 rounded' name="category" id="assigned">
                    <option value="">{assignedVal}</option>
                    {load ? "Loading User data..." : allUsers.map((user) => {
                        return (
                            <option value={user.name}>{user.name}</option>
                        )
                    })}
                </select>
                <br />
                <select name="status" className="form-control bg-stone-200 border border-stone-500 font-semibold text-zinc-700 hover:bg-stone-300 p-2 hover:text-neutral-800 rounded" id="status-select">
                    <option value="">Project Status:</option>
                    <option value="0">Ongoing</option>
                    <option value="1">Completed</option>
                </select>
                <br />
                <span>
                    <label className='font-semibold' htmlFor="endDate">Project End Date:</label>

                    <input className='form-control ml-3 border border-stone-500 bg-stone-200 font-semibold text-zinc-700 hover:bg-stone-300 p-2 hover:text-neutral-800 rounded' type="date" name='endDate' id='endDate' />
                </span>

                <br />

                <select className='form-control bg-stone-200 font-semibold border border-stone-500 text-zinc-700 hover:bg-stone-300 p-2 hover:text-neutral-800 rounded' name="category" id="categorySelect">
                    <option value="">Choose Category</option>
                    <option value="react">React</option>
                    <option value="spring-boot">Spring Boot</option>
                    <option value="django">Django</option>
                    <option value="express">Express</option>
                    <option value="data-analytics">Data Analytics</option>
                </select>
                <span>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-1 mt-3' type='submit' onClick={handleUpdate}>Update</button>
                    <Link to='/'><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-3 mt-3'>Cancel</button></Link>
                </span>


            </form>
        </div>
    )
}