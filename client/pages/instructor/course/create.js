import React, { useState } from "react";
import InstructorRoute from "../../../components/routes/InstructorRoute";

export default function CourseCreate() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    uploading: false,
    paid: true,
    loading: false,
    imagePreview: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = () => {
    //
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const courseCreateForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <textarea
            name="description"
            cols="7"
            rows="7"
            value={values.description}
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </form>
    );
  };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center">Create Course</h1>
      <div className="pt-3 pb-3">{courseCreateForm()}</div>
    </InstructorRoute>
  );
}
