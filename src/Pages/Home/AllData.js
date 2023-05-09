import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation, queryCache } from 'react-query';

const AllData = ({ n,handleDelete}) => {
    const { id, author, content, date, imageUrl, time, title } = n;
    
   
    return (
        <div className="card w-120 bg-slate-200 shadow-lg h-120 mt-5 mx-auto p-4">
            <h1 className='text-xl font-semibold my-4'>{title}</h1>
            <figure>
                <img className='h-[200px] w-[400px] rounded' src={imageUrl} alt="Shoes" />
            </figure>
            <p>{content.length > 200 ? (
                <>
                    {content.slice(0, 200) + "..."}
                    <Link className='bg-slate-400 rounded-lg px-1 font-semibold' to={`/news/${id}`}>Read More</Link>
                </>
            ) : (
                content
            )}
            </p>
            <div className="card-body flex justify-between">
            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='my-auto text-slate-600'>Date: {date}</p>
                    <p className='my-auto text-slate-600'>Time: {time}</p>
                </div>
                <div className="card-actions justify-end">

                    <Link className='btn -btn-primary' to={`/update-news/${id}`}>Update</Link>
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