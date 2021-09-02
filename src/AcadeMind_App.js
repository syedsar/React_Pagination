import React, { useEffect, useState } from 'react'
import './AcadeMind_App.css'
import AcadeMind_pagination from './Components/AcadeMind_pagination';

const AcadeMind_App = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(()=>{
        fetch(url)
        .then(response =>{
            if(response.ok) return response.json();
            throw new Error ('Something went wrong while requesting posts')
        })
        .then((posts)=>{
            console.log(posts)
            setPosts(posts)
        })
        .catch(error=>{
            setError(error.message)
        })
    },[])

    if (error) return {error}
    return (
        <div>
            {posts.length > 0 ? (
        <>
          <AcadeMind_pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={10}
            dataLimit={10}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
        </div>
    )
}

const Post = (props)=>{
    const { id, title, body } = props.data;
    return(
        <div className='post'>
            <small>{id}</small>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default AcadeMind_App
