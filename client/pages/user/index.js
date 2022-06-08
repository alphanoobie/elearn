import React, { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

export default function UserIndex() {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
      <h1 className="jumbotron text-center">User Dashboard</h1>
    </UserRoute>
  );
}
