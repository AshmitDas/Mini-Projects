import React from 'react'

export default function Footer() {
    return (
        <>

            <footer class="p-4 bg-white dark:bg-gray-900 shadow md:flex md:items-center md:justify-between md:p-6 justify-end">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a  className="hover:cursor-pointer">Sirius™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <p  class="mr-4 hover:cursor-pointer md:mr-6 ">About</p>
                    </li>
                    <li>
                        <p class="mr-4 hover:cursor-pointer md:mr-6">Privacy Policy</p>
                    </li>
                    <li>
                        <p  class="mr-4 hover:cursor-pointer md:mr-6">Licensing</p>
                    </li>
                    <li>
                        <p class="hover:cursor-pointer">Contact</p>
                    </li>
                </ul>
            </footer>

        </>
    )
}
