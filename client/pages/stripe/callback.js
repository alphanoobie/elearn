import React, {useContext, useEffect} from 'react'
import {Context} from '../../context'
import {SyncOutlined} from '@ant-design/icons'
import axios from 'axios'

export default function StripeCallback() {
    const {state:{user}} = useContext(Context)

    useEffect(()=>{
        if(user){
            axios.post('/api/get-account-status').then(res =>{
                // window.location.href='/instructor'
                console.log(res)
            })
        }
    },[user])
    return (
      <SyncOutlined spin className='d-flex justify-content-center display-1 text-danger p-5'/>

      
    )
}