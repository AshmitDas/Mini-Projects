import React from "react";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";


export default function HomePage() {

    const [apiUrl, setApiUrl] = useState("http://localhost:3000/projects");

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reloadComponent, setReloadComponent] = useState(Math.random());

    async function getAllProjects() {
        let res = await fetch(apiUrl);

        let allProjects = await res.json();
        setProjects(allProjects);
        setLoading(false);
    }

    async function changeApiUrl(apiValue) {
        if (apiValue === "all") {
            console.log(apiValue);
            setApiUrl("http://localhost:3000/projects");
        } else if (apiValue === "1" || apiValue === "0") {
            console.log(apiValue);
            setApiUrl(`http://localhost:3000/projects?status=${apiValue}`);
        }
        else {
            console.log("error URL")
        }
    }


    useEffect(() => {
        getAllProjects()
    }, [reloadComponent, apiUrl])


    return (
        <div className="flex flex-col place-content-between">
            <span className="flex justify-between m-5 mb-1">
                        <h2 className="text-xl m-1 mb-2 font-semibold text-gray-900 hover">Projects Added So far:</h2>

                        <div className="m-1 mb-2 text-base">
                            <select className="bg-stone-200 border border-stone-500 font-semibold text-zinc-700 hover:bg-stone-300 p-2 hover:text-neutral-800 rounded" name="type" id="ptojectTypeSelect" onChange={() => changeApiUrl(document.getElementById("ptojectTypeSelect").value)}>
                                <option className="text-zinc-700 hover:text-neutral-800 p-1" value="">Select Project Type</option>
                                <option className="text-zinc-700 hover:text-neutral-800 p-1" value="all">All Projects</option>
                                <option className="text-zinc-700 hover:text-neutral-800 p-1" value="0">Ongoing</option>
                                <option className="text-zinc-700 hover:text-neutral-800 p-1" value="1">Completed</option>
                            </select>
                        </div>
                    </span>


            <div className=" m-4 border-solid flex flex-wrap">
                    


                {loading ? "Loading Projects ..." : projects.map((project) => {
                    return (
                        <ProjectCard key={project.id} project={project} setReloadComponent={setReloadComponent} />
                    )
                })}
            </div>
        </div>
    )

}