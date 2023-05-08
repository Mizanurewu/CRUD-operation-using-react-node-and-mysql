import React, { useEffect, useState } from 'react';

const Home = () => {
    const [news,setNews]=useState([]);
    //load data from api using useEffect
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(result=>{
            setNews(result)
            console.log(result)
        })
    }
    ,[])
    

    return (
        <div>
            <h1>Home{news.length}</h1>
        </div>
    );
};

export default Home;