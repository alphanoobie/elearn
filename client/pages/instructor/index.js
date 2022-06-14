import React, { useEffect, useState } from "react";
import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";

export default function InstructorIndex() {
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get("api/instructor-courses");
    setcourses(data);
  };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center">Instructor Dashboard</h1>
      <pre>{JSON.stringify(courses, null, 4)}</pre>
    </InstructorRoute>
  );
}
