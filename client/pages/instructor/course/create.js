import React, { useState } from "react";
import InstructorRoute from "../../../components/routes/InstructorRoute";
import { Button, Select } from 'antd'
import { SaveOutlined } from "@ant-design/icons";

const { Option } = Select

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

        <div className="form-group pt-3">
          <textarea
            name="description"
            cols="7"
            rows="7"
            value={values.description}
            className="form-control"
            onChange={handleChange}
            placeholder="Description"
          />
        </div>

        <div className="form-row pt-3">
          <div className="col">
            <div className="form-group">
              <Select
                size='large'
                style={{ width: '100%' }}
                value={values.paid}
                onChange={v => setValues({ ...values, paid: !values.paid })}
              >
                <Option value={true}>Paid</Option>
                <Option value={false}>Free</Option>
              </Select>
            </div>
          </div>
        </div>

        <div className="form-row pt-3">
          <div className="col">
            <div className="form-group">
              <label className="btn btn-outline-secondary btn-block text-left">
                {values.loading ? 'Uploading' : 'Image Upload'}
                <input type="file" name="image" onChnage={handleImage} accept="image/*" hidden />
              </label>
            </div>
          </div>
        </div>

        <div className="row pt-3" >
          <div className="col">
            <Button onClick={handleSubmit} 
            disabled={values.loading || values.uploading}
            className="btn btn-primary"
            loading={values.loading}
            type='primary'
            size="large"
            shape='round'
            >
              {values.loading ? 'Saving...' : 'Save & Continue'}
            </Button>
          </div>
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
