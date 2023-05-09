import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoadData = () => {
    const items = ['all', 'business', 'sports', 'world', 'politics', 'miscellaneous', 'entertainment', 'startup', 'technology', 'hatke', 'science', 'automobile'];
    const [allNewsData, setAllNewsData] = useState([]);

    const handleLoadData = (buttonName) => {
        fetch(`https://inshorts.deta.dev/news?category=${buttonName}`)
            .then(res => res.json())
            .then(allNewsData => {
                // console.log(data)
                setAllNewsData(allNewsData)
                console.log(buttonName)
                console.log(allNewsData)
            })
        // const newses = {
        //     id: '101014',
        //     author: 'Mizanur Rahman',
        //     content: 'Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, ',
        //     date: '10 jan 2023',
        //     imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s',
        //     time: '10 pm',
        //     title: 'IEEE publication',

        // }
        console.log(buttonName)

        fetch(`http://localhost:5000/news`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'origin',
            body: JSON.stringify(allNewsData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (

        <div>
            {items.map((buttonName, index) => (
                <button
                    className='btn btn-primary'
                    key={index}
                    onClick={() => handleLoadData(buttonName)}
                    style={{ margin: '5px' }} 
                >
                    <span style={{ padding: '5px' }}>{buttonName}</span>
                </button>
            ))}
            
        </div>

    );
};

export default LoadData;