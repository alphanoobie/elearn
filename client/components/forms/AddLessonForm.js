import { Button } from "antd";

import React from "react";

export default function AddLessonForm({
  values,
  setValues,
  handleAddLesson,
  uploading,
  uploadButtonText,
  handleVideo
}) {
  return (
    <div className="container pt-3">
      <form onSubmit={handleAddLesson}>
        <input
          type="text"
          className="form-control square"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          value={values.title}
          placeholder="Title"
          autoFocus
          required
        />

        <textarea
          className="form-control mt-3"
          cols="7"
          rows="7"
          onChange={(e) => setValues({ ...values, content: e.target.value })}
          value={values.content}
          placeholder="Content"
        />

        <label className="btn btn-dark btn-block text-left mt-3">
            {uploadButtonText}
          <input onChange={handleVideo} type="file" accept="video/*" hidden />
        </label>

        <Button
          onClick={handleAddLesson}
          className="col mt-3"
          size="large"
          type="primary"
          loading={uploading}
          shape="round"
          style={{display:'block'}}
        >
          Save
        </Button>
      </form>
    </div>
  );
}
