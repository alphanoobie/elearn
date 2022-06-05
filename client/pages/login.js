import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import styles from "../public/css/register.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      //console.table({name, email, password});
      const { data } = await axios.post(`/api/login`, { email, password });
      console.log("LOGIN RESPONSE", data);
      //setLoading(false)
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <h1>Login</h1>
      <Card className={styles.card}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          labelCol={{ span: 6 }}
          labelWrap
          labelAlign="left"
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Email"
            name="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              style={{ width: 80 }}
              type="primary"
              htmlType="submit"
              disabled={!email || !password || loading}
            >
              {loading ? <SyncOutlined spin /> : "Submit"}
            </Button>
          </Form.Item>
        </Form>
        <p className="text-center p-3">
          Not yet registered?
          <Link href="/register">
            <a> Register</a>
          </Link>
        </p>
      </Card>
    </div>
  );
}
