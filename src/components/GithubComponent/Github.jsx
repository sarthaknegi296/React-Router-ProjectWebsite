import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/sarthaknegi296")
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300}></img>
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/sarthaknegi296")
    return response.json()
}
