import React, { useEffect, useState } from 'react';

const LoadData = () => {
    const items = ['all', 'business', 'sports', 'world', 'politics', 'miscellaneous', 'entertainment', 'startup', 'technology', 'hatke', 'science', 'automobile'];
    const [allNewsData, setAllNewsData] = useState([]);

    const handleLoadData = (param) => {
        // fetch(`https://inshorts.deta.dev/news?category=${param}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         setAllNewsData(data)
        //         console.log(allNewsData)
        //     })
        const newses = {
            name: 'Rumpa',
            email: 'romana@example.com',
            contact: '15222',

        }
        console.log(param)

        fetch(`http://localhost:5000/business`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            referrerPolicy: 'origin',
            body: JSON.stringify(newses),
        })
            .then((response) => response.text())
            .then((message) => console.log(message))
            .catch((err) => console.error(err));

        //     fetch(`http://localhost:5000/business`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     referrerPolicy: 'origin',
        //     body: JSON.stringify({
        //         name: 'Rumpa',
        //         email: 'romana@example.com',
        //         contact: '15222',
        //     }),
        // })
        //     .then((response) => response.text())
        //     .then((message) => console.log(message))
        //     .catch((err) => console.error(err));




    }
    return (

        <div>
            {items.map((buttonName, index) => (
                <button
                    className='btn btn-primary'
                    key={index}
                    onClick={() => handleLoadData(buttonName)}
                    style={{ margin: '5px' }} // add margin to the button
                >
                    <span style={{ padding: '5px' }}>{buttonName}</span>
                </button>
            ))}
            {/* <p>Selected button: {selectedButton}</p> */}
            <h1>all data {allNewsData.length}</h1>
        </div>

    );
};

export default LoadData;