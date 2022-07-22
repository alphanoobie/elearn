import React, { useState, useEffect } from "react";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import CourseCreateForm from "../../../../components/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { List, Avatar, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateLessonForm from "../../../../components/forms/UpdateLessonForm";

const { Item } = List;

export default function CourseEdit() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
    lessons: [],
  });

  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  //state for lesson update
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState({});
  const [uploadVideoButtonText, setUploadVideoButtonText] =
    useState("Upload Video");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    if (data) {
      setValues(data);
    }
    if (data && data.image) {
      setImage(data.image);
    }
  };

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

  const handleImageRemove = async (e) => {
    // console.log('remove inmage')
    try {
      setValues({ ...values, loading: true });
      const res = await axios.post("/api/course/remove-image", { image });
      setImage({});
      setPreview("");
      setUploadButtonText("Upload Image");
      setValues({ ...values, loading: false });
    } catch (err) {
      console.log(err);
      setValues({ ...values, loading: false });
      toast("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(values);
    try {
      const { data } = await axios.put(`/api/course/${slug}`, {
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

  const handleDrag = (e, index) => {
    // console.log('On Drag =>', index)
    e.dataTransfer.setData("itemIndex", index);
  };

  const handleDrop = async (e, index) => {
    // console.log('On Drop =>', index)

    const movingItemIndex = e.dataTransfer.getData("itemIndex");
    const targetItemIndex = index;
    let allLessons = values.lessons;

    let movingItem = allLessons[movingItemIndex];
    allLessons.splice(movingItemIndex, 1);
    allLessons.splice(targetItemIndex, 0, movingItem);

    setValues({ ...values, lessons: [...allLessons] });
    const { data } = await axios.put(`/api/course/${slug}`, {
      ...values,
      image,
    });
    toast("Lessons rearranged successfully");
  };

  const handleDelete = async (index) => {
    const answer = window.confirm("Are you sure you want to delete");
    if (!answer) return;
    let allLessons = values.lessons;
    const removed = allLessons.splice(index, 1);
    setValues({ ...values, lessons: allLessons });
    //send req to backend
    const { data } = await axios.put(`/api/course/${slug}/${removed[0]._id}`);
    console.log("LESSON DELETED =>", data);
  };

  //lesson update functions

  const handleVideo = async () => {
    //
  };

  const handleUpdateLesson = async () => {
    //
  };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center">Edit Course</h1>
      {/* {JSON.stringify(values)} */}
      <div className="pt-3 pb-3">
        {
          <CourseCreateForm
            handleSubmit={handleSubmit}
            handleImageRemove={handleImageRemove}
            handleImage={handleImage}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            preview={preview}
            uploadButtonText={uploadButtonText}
            editPage={true}
          />
        }
      </div>

      <hr />

      <div className="row pb-3">
        <div className="col lesson-list">
          <h4>{values && values.lessons && values.lessons.length} Lessons</h4>
          <List
            itemLayout="horizontal"
            onDragOver={(e) => e.preventDefault()}
            dataSource={values && values.lessons}
            renderItem={(item, index) => (
              <Item
                draggable
                onDragStart={(e) => handleDrag(e, index)}
                onDrop={(e) => handleDrop(e, index)}
              >
                <Item.Meta
                  avatar={<Avatar>{index + 1}</Avatar>}
                  title={item.title}
                  onClick={() => {
                    setVisible(true);
                    setCurrent(item);
                  }}
                ></Item.Meta>

                <DeleteOutlined
                  onClick={() => handleDelete(index)}
                  className="text-danger float-right"
                />
              </Item>
            )}
          ></List>
        </div>
      </div>

      <Modal
        title="Update lesson"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <UpdateLessonForm
          handleVideo={handleVideo}
          handleUpdateLesson={handleUpdateLesson}
          current={current}
          setCurrent={setCurrent}
          uploadVideoButtonText={uploadVideoButtonText}
          progress={progress}
          uploading={uploading}
        />
        {/* <pre>{JSON.stringify(current, null, 4)}</pre> */}
      </Modal>
    </InstructorRoute>
  );
}
