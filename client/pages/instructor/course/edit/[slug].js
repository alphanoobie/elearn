import React, { useState, useEffect } from "react";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import CourseCreateForm from "../../../../components/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

export default function CourseEdit() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
  });

  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const router = useRouter();
  const {slug} = router.query

  useEffect(() => {
    loadCourse()
  }, [slug]);

  const loadCourse = async () => {
    const {data} = await axios.get(`/api/course/${slug}`)
    setValues(data)
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });

    //resize
    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });
        console.log("IMAGE UPLOADED", data);

        //set image in state
        setImage(data);

        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast("Image upload failed");
      }
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(values);
    try {
      const { data } = await axios.put("/api/course", {
        ...values,
        image,
      });
      toast("Course Updated");
      // router.push("/instructor");
    } catch (err) {
      toast(err.response.data);
      console.log(err);
    }
  };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center">Edit Course</h1>
      {/* {JSON.stringify(values)} */}
      <div className="pt-3 pb-3">
        {
          <CourseCreateForm
            handleSubmit={handleSubmit}
            handleImage={handleImage}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            preview={preview}
            uploadButtonText={uploadButtonText}
            editPage = {true}
          />
        }
      </div>
    </InstructorRoute>
  );
}
