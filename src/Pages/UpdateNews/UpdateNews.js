import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateNews = () => {
    const news = useLoaderData();
    console.log(news);
    const { id, author, content, date, imageUrl, time, title } = news;
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const author = form.author.value;
        const title = form.title.value;
        const imageUrl = form.imageUrl.value;
        const time = form.time.value;
        const date = form.date.value;
        const content = form.content.value;
        console.log(author, title, imageUrl, time, date, content);

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, title, imageUrl, time, date, content})
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log(error));

    }
    return (
        <div className='w-3/5 mx-auto'>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Author</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={author}
                        placeholder="author"
                        className="input input-bordered"
                        name='author'
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={title}
                        placeholder="Title"
                        className="input input-bordered"
                        name='title'
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={imageUrl}
                        placeholder="ImageUrl"
                        className="input input-bordered"
                        name='imageUrl'
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Time</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={time}
                        placeholder="Time"
                        className="input input-bordered"
                        name='time'
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={date}
                        placeholder="Date"
                        className="input input-bordered"
                        name='date'
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Content</span>
                    </label>
                    <textarea
                        placeholder="Content"
                        defaultValue={content}
                        className="w-full h-40 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name='content'

                    ></textarea>

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type='submit' value='Update' />
                </div>
            </form>
        </div>
    );
};

export default UpdateNews;