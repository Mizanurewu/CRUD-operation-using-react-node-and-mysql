import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news=useLoaderData();
    const { id, author, content, date, imageUrl, time, title } = news;
    return (
        <div className="card w-[500px] bg-base-300 shadow-xl h-96 mx-auto p-4">
            <h1 className='text-xl font-semibold'>{title}</h1>
            <figure>
                <img src={imageUrl} alt="Shoes" />
            </figure>
            <p>{content }</p>
            <div className="card-body flex justify-between items-end">
                <div >
                    <p>Date:{date}</p>
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-warning">Update</button>
                    <button onClick={() => handleDelete(id)} className="btn btn-warning">Delete</button>
                </div> */}
            </div>
        </div>
    );
};

export default News;