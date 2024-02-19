import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaTrashCan } from "react-icons/fa6";
import { message } from 'antd';

const EditProjects = () => {
    const [projects, setProjects] = useState([]);

    const getAllProjects = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_URL}/api/projects/all-projects`
            );
            setProjects(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProjects = async (projectId) => {
        if(window.confirm('Projeyi Silmek istediğinize emin misiniz?')){
            try {
                const response = await axios.delete(
                    `${process.env.REACT_APP_SERVER_URL}/api/projects/delete-project`,{
                        data: { projectId: projectId },
                        headers: { 'Content-type': 'application/json; charset=UTF-8' }
                    }
                )
                message.success(response.data);
                getAllProjects();
            } catch (error) {
                message.error(error)
            }   
        }
    }

    useEffect(() => {
        getAllProjects();
    }, [])

    return (
        <div className='flex flex-col py-10 justify-center items-center w-full'>
            <h2 className='text-3xl font-bold mb-5'>Proje Düzenleme</h2>
            {
                projects.length === 0 && (
                    <div className='flex justify-center items-center'>
                        <h1 className='text-3xl font-bold'>Şuanda oluşturulmuş bir proje bulunmamaktadır.</h1>
                    </div>
                )
            }
            {
                projects && projects.map((project) => (
                    <div 
                        key={project._id}
                        className='flex justify-between items-center mt-3 bg-gray-300 w-[300px] px-5 rounded-lg'
                    >
                        <span>{project.title}</span>
                        <button
                            className='w-[30px] h-[30px] flex items-center justify-center m-1 rounded-lg hover:bg-gray-700 hover:text-white'
                            onClick={() => {
                                deleteProjects(project._id);
                            }}
                        >
                            <FaTrashCan />
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default EditProjects