import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../../context'
import axios from 'axios'

export default function UserIndex() {
    const [hidden, sethidden] = useState(true)

    const { state: { user } } = useContext(Context)


    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/current-user')
            console.log(data)
            sethidden(false)
        } catch (err) {
            console.log(err)
            sethidden(true)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <>
            {!hidden && (<h1 className='jumbotron text-center'>
                <pre> {JSON.stringify(user)}</pre>
            </h1>)}
        </>
    )
}
