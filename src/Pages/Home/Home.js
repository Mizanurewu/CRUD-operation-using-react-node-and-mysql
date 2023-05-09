import React, { useEffect, useState } from 'react';
import AllData from './AllData';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [news, setNews] = useState([]);
    //load data from api using useEffect
    console.log(news)
    const handleDelete = (id) => {
        if (window.confirm('are you sure to delete?')) {
            axios.delete(`http://localhost:5000/delete/${id}`)
            .then(res=>{
                const isDelete = res.data =='OK';
                if(isDelete){
                    const remaining = news.filter(n=>n.id !==id);
                    setNews(remaining);
                }
            })
            toast.success("Successfully  Deleted");

        }
    }
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(result => {
                setNews(result)
                console.log(result)
            })
    }
        , [])


    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

            {

                news.length > 0 ? (
                    news.map((n, index) => (
                        <AllData 
                        key={index} n={n}
                        handleDelete={handleDelete}
                        ></AllData>
                    ))
                ) : (
                    <h1 className='text-center text-2xl'>Login to load data</h1>
                )


            }
            <ToastContainer
                position="top-center"
            />
        </div>
    );
};

export default Home;