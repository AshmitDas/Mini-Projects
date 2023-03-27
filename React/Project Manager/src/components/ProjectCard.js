import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectCard({ project , setReloadComponent}) {

    async function deleteProject() {

        alert(`All the details of the ${project.title} will be deleted!`);
        await fetch(`http://localhost:3000/projects/${project.id}`, {
            method: 'DELETE'
        })

        setReloadComponent(Math.random());
    }

    return (
        <div className="w-80 max-w-lg m-2 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/project/${project.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
            </Link>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>

            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{{if(project.status)}}</p> */}

            <Link to={`/edit-project/${project.id}`}>
                <p type='submit' className="inline-flex items-center px-3 py-2 mr-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer" >
                    Edit <ion-icon name="create-outline"></ion-icon>
                </p>
            </Link>

                <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer" onClick={() => deleteProject()}>
                    Delete <ion-icon name="trash-outline"></ion-icon>
                </p>

        </div>
    )
}
