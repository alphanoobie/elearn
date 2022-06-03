import React, { useState } from 'react'
import { Card, Form, Input, Button } from 'antd'
import styles from '../public/css/register.module.css'
import axios from 'axios'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        console.table({name, email, password});
        const {data} = await axios.post(`http://localhost:8000/api/register`, {name,email,password})
        console.log('REGISTER RESPONSE', data)
    }

    return (
        <div className={styles.mainWrapper}>
            <h1>Register</h1>
            <Card className={styles.card}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    labelCol={{ span: 6 }}
                    labelWrap
                    labelAlign='left'
                    onFinish = {handleSubmit}
                >
                    <Form.Item
                        label="Name"
                        name="Name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input
                            value={name}
                            onChange={e => setName(e.target.value)}

                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            value={email}
                            onChange={e => setEmail(e.target.value)}

                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    )
}