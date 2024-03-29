import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (

        <nav class="bg-white border-gray-200 px-1 py-2.5 dark:bg-gray-900 flex">
            <div className='container flex flex-wrap items-center w-32 flex-none"'>
                <Link to={"/"} >
                    <div href="" className="flex ml-5">
                        <span className="self-start text-xl text-left font-semibold whitespace-nowrap dark:text-white">Sirius</span>
                    </div>
                </Link>
            </div>
            <div class="container flex flex-wrap items-center justify-center">

                <div class="flex md:order-2">

                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div class="relative mt-3 md:hidden">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        {/* <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." /> */}
                    </div>

                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/"><p class="block py-2 pl-3 pr-4 hover:scale-105 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" >Home</p></Link>
                        </li>
                        <li>
                            <Link to="/create-project"><p class="block py-2 pl-3 pr-4 hover:scale-105 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create a Project</p></Link>
                        </li>
                        <li>
                            <Link to="/user"><p class="block py-2 pl-3 pr-4 hover:scale-105 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Users</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
