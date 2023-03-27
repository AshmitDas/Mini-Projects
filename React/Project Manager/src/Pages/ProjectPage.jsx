import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

export default function ProjectPage() {

  const { id } = useParams();
  let val = "";
  const [projectDetails, setProjectDetails] = useState("");


  async function getProjectDetails() {
    let response = await fetch(`http://localhost:3000/projects/${id}`);
    let project = await response.json();

    console.log(project);

    val = parseInt(project.status);

    console.log(val)

    setProjectDetails(project);
  }

  useEffect(() => {
    getProjectDetails()
  }, [])

  return (
    <div className='flex bg-stone-200 h-screen m-2'>

      <div className='flex flex-col m-5 grow'>
        <h3 className='text-gray-900 text-4xl m-2'>{projectDetails.title}</h3>
        <p className='text-gray-900 text-sm  m-2'>{projectDetails.description}</p>
        <p className='text-gray-900 text-sm m-1 ml-2'>Assigned To: {projectDetails.assinedTo}</p>
        <p className='text-gray-900 text-sm m-1 ml-2'>Status: {val ? "Completed." : "Ongoing"}</p>
        <p className='text-gray-900 text-sm m-1 ml-2'>End Date: {projectDetails.endDate}</p>
        <Link to={`/edit-project/${projectDetails.id}`}>
          <p type='submit' className="inline-flex items-center mt-2 px-3 py-2 mr-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:scale-105 hover:text-stone-200 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800 hover:cursor-pointer" >
            Edit <ion-icon name="create-outline"></ion-icon>
          </p>
        </Link>
      </div>

      <div>
        <Link to="/">
          <button type="button" class="text-gray-900 bg-stone-200 hover:bg-blue-800 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2 hover:scale-105 dark:bg-stone-200 dark:hover:bg-gray-900 hover:text-stone-200">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="sr-only">Icon description</span>
          </button>
        </Link>
      </div>



    </div>
  )
}
