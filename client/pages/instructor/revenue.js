import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import InstructorRoute from "../../components/routes/InstructorRoute";
import axios from "axios";
import React from "react";
import {
  DollarOutlined,
  SettingOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { currencyFormatter } from "../../utils/helpers";

export default function InstructorRevenue() {
  const [balance, setBalance] = useState({ pending: [] });

  useEffect(() => {
    sendBalanceRequest();
  }, []);

  const sendBalanceRequest = async () => {
    console.log("SEND BALANCE REQUEST");
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
            <h4>
              Pending Balance <span className="float-right">0.00</span>
            </h4>
            <small>For 48 hours</small>
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
