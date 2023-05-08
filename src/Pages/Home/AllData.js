import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadData from '../LoadData/LoadData';


const AllData = ({ n }) => {
    const { id, author, content, date, imageUrl, time, title } = n;
    const handleDelete = (id) => {
        if (window.confirm('are you sure to delete?')) {
            axios.delete(`http://localhost:5000/delete/${id}`);
            toast.success("Successfully Deleted");

        }
    }
    return (


        <div className="card w-120 bg-base-300 shadow-lg h-120 mt-5 mx-auto p-4">
            <h1 className='text-xl font-semibold'>{title}</h1>
            <figure>
                <img className='h-[200px] w-[400px]' src={imageUrl} alt="Shoes" />
            </figure>
            <p>{content.length > 200 ? (
                <>
                    {content.slice(0, 200) + "..."}
                    <Link className='bg-slate-400' to={`/news/${id}`}>Read More</Link>
                </>
            ) : (
                content
            )}
            </p>
            <div className="card-body flex justify-between">
                {/* <div >
                    
                </div> */}

            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='my-auto'>Date:{date}</p>
                </div>
                <div className="card-actions justify-end">

                    <button className="btn btn-warning">Update</button>
                    <button onClick={() => handleDelete(id)} className="btn btn-warning">Delete</button>
                </div>
            </div>
            <ToastContainer
            position="top-center"
             />

        </div>
    );
};

export default AllData;