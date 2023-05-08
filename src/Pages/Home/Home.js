import React, { useEffect, useState } from 'react';
import AllData from './AllData';

const Home = () => {
    const [news,setNews]=useState([]);
    //load data from api using useEffect
    useEffect(()=>{
        fetch('http://localhost:5000/news')
        .then(res=>res.json())
        .then(result=>{
            setNews(result)
            console.log(result)
        })
    }
    ,[])
    

    return (
        <div  className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
           
            {
                news.map(n=><AllData
                n={n}
                ></AllData>)

            }
        </div>
    );
};

export default Home;