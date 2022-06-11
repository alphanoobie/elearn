import React from "react";
import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";

export default function InstructorIndex() {
  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center">Instructor Dashboard</h1>
    </InstructorRoute>
  );
}
