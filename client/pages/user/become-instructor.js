import React, { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context";
import { Button } from "antd";
import {
  LoadingOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import UserRoute from "../../components/routes/UserRoute";

export default function BecomeInstructor() {
  //state
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);

  const becomeInstructor = () => {
    setLoading(true);
    axios
      .post("/api/make-instructor")
      .then((res) => {
        console.log(res);
        window.location.href = res.data;
      })
      .catch((err) => {
        console.log(err.response.status);
        toast("Stripe onboarding failed try again");
        setLoading(false);
      });
  };

  return (
    <>
      <h1 className="jumbotron text-center">Become Instructor</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="pt-4">
              <UserSwitchOutlined className="display-1 pb-3" />
              <br />
              <h2>Setup payout to publish courses on eLearn</h2>
              <p className="lead text-warning">
                eLearn partners with stripe to transfer earnings to your bank
                account
              </p>

              <Button
                className="mb-3"
                type="primary"
                block
                shape="round"
                icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
                size="large"
                onClick={becomeInstructor}
                disabled={
                  (user && user.role && user.role.includes("Instructor")) ||
                  loading
                }
              >
                {loading ? "Processing..." : "Payout Setup"}
              </Button>

              <p className="lead">
                {" "}
                You will be redirected to stripe to complete onboarding process{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
