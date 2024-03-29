import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

export default function forgotPassword() {
  //state
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //context
  const {
    state: { user },
  } = useContext(Context);
  //router
  const router = useRouter();

  //redirect if user is logged in

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/forgot-password", { email });
      setSuccess(true);
      toast("Check your email for the secret code");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log(email, code, newPassword)
    // return
    try {
      setLoading(true);
      const { data } = await axios.post("/api/reset-password", {
        email,
        code,
        newPassword,
      });
      setEmail("");
      setCode("");
      setNewPassword("");
      setLoading(false);
      toast("Great! Now you can login with your new password");
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">
        Forgot Password
      </h1>

      <div className="container col-md-4 offset-nd-4 pd-5">
        <form onSubmit={success ? handleResetPassword : handleSubmit}>
          <input
            placeholder="Enter email"
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {success && (
            <>
              <input
                placeholder="Enter secret code"
                type="text"
                className="form-control mb-4 p-4"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />

              <input
                placeholder="Enter new password"
                type="password"
                className="form-control mb-4 p-4"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </>
          )}
          <button
            type="Submit"
            className="btn btn-primary btn-block p-2"
            disabled={loading || !email}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
