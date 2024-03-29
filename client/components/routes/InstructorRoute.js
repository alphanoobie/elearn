import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import UserNav from "../nav/UserNav";
import InstructorNav from "../nav/InstructorNav";

export default function InstructorRoute({ children }) {
  const [ok, setOk] = useState(false);

  const router = useRouter();

  const fetchInstructor = async () => {
    try {
      const { data } = await axios.get("/api/current-instructor");
      //   console.log(data);
      if (data.ok) {
        setOk(true);
      }
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push("/");
    }
  };

  useEffect(() => {
    fetchInstructor();
  }, []);
  return (
    <>
      {!ok ? (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-primary"
        />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <InstructorNav />
            </div>
            <div className="col-md-10">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
