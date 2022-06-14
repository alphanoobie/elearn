import React from "react";
import { Button, Select, Avatar, Badge } from "antd";

const { Option } = Select;

export default function CourseCreateForm({
  handleChange,
  handleImage,
  handleSubmit,
  values,
  setValues,
  preview,
  uploadButtonText,
  handleImageRemove,
}) {
  const children = [];
  for (let i = 100; i <= 1000; i = i + 100) {
    children.push(<Option key={i}>₹ {i}</Option>);
  }
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
              size="large"
              style={{ width: "100%" }}
              value={values.paid}
              onChange={(v) =>
                setValues({ ...values, paid: !values.v, price: 0 })
              }
            >
              <Option value={true}>Paid</Option>
              <Option value={false}>Free</Option>
            </Select>
          </div>
        </div>

        {values.paid && (
          <div className="form-group pt-3">
            <Select
              defaultValue="100"
              style={{ width: "100%" }}
              onChange={(v) => setValues({ ...values, price: v })}
              tokenSeparators={[,]}
              size="large"
            >
              {children}
            </Select>
          </div>
        )}
      </div>

      <div className="form-group pt-3">
        <input
          type="text"
          name="category"
          className="form-control"
          placeholder="Category"
          value={values.category}
          onChange={handleChange}
        />
      </div>

      <div className="form-row pt-3">
        <div className="col">
          <div className="form-group">
            <label className="btn btn-outline-secondary btn-block text-left">
              {uploadButtonText}
              <input
                type="file"
                name="image"
                onChange={handleImage}
                accept="image/*"
                hidden
              />
            </label>
          </div>
        </div>

        {preview && (
          <div className="pt-3">
            <Badge count="X" onClick={handleImageRemove}>
              <Avatar width={200} src={preview} />
            </Badge>
          </div>
        )}
      </div>

      <div className="row pt-3">
        <div className="col">
          <Button
            onClick={handleSubmit}
            disabled={values.loading || values.uploading}
            className="btn btn-primary"
            loading={values.loading}
            type="primary"
            size="large"
            shape="round"
          >
            {values.loading ? "Saving..." : "Save & Continue"}
          </Button>
        </div>
      </div>
    </form>
  );
}
