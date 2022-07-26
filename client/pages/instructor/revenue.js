import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import InstructorRoute from "../../components/routes/InstructorRoute";
import axios, { Axios } from "axios";
import React from "react";
import {
  DollarOutlined,
  SettingOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { stripeCurrencyFormatter } from "../../utils/helpers";

export default function InstructorRevenue() {
  const [balance, setBalance] = useState({ pending: [] });

  useEffect(() => {
    sendBalanceRequest();
  }, []);

  const sendBalanceRequest = async () => {
    // console.log("SEND BALANCE REQUEST");
    const { data } = await axios.get("/api/instructor/balance");
    setBalance(data);
  };

  const handlePayoutSettings = () => {
    console.log("handle payout");
  };

  return (
    <InstructorRoute>
      <div className="container">
        <div className="row pt-2">
          <div className="col-md-8 offset-md-2 bg-light p-5">
            <h2>
              Revenue Report <DollarOutlined className="float-right" />
            </h2>
            <small>Stripe issues payouts every 48 hours</small>
            <hr />
            {/* {JSON.stringify(balance, null, 4)} */}
            <h4>
              Pending Balance
              {balance.pending &&
                balance.pending.map((bp, i) => (
                  <span key={i} className="float-right">
                    {stripeCurrencyFormatter(bp)}
                  </span>
                ))}
            </h4>
            <small>For last 48 hours</small>
            <hr />
            <h4>
              Payouts{" "}
              <SettingOutlined
                className="float-right pointer"
                onClick={handlePayoutSettings}
              />
            </h4>
            <small>
              Update your strip account details/ view previous payouts
            </small>
          </div>
        </div>
      </div>
    </InstructorRoute>
  );
}
