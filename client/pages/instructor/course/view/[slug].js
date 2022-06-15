import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import axios from "axios";
import { Avatar, Tooltip } from "antd";
import { CheckOutlined, EditOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";

export default function CourseView() {
  const [course, setCourse] = useState({});

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  return (
    <InstructorRoute>
      <div className="container-fluid pt-3">
        {/* <pr>{JSON.stringify(course, null, 4)}</pr> */}

        {course && (
          <div className="container-fluid pt-1">
            <div className="media pt-2">
              <Avatar
                size={80}
                src={course.image ? course.image.Location : "/course.png"}
              />
              <div className="media-body pl-2">
                <div className="row">
                  <div className="col">
                    <h5 className="mt-2 text-primary">{course.name}</h5>
                    <p style={{ marginTop: "-10px", fontSize: "12px" }}>
                      {course.lessons && course.lessons.length} Lessons
                    </p>
                    <p style={{ marginTop: "-10px", fontSize: "12px" }}>
                      {course.category}
                    </p>
                  </div>

                  <div className="d-flex">
                    <Tooltip title="Edit">
                      <EditOutlined
                        style={{ marginRight: 20 }}
                        className="h5 pointer text-warning"
                      />
                    </Tooltip>

                    <Tooltip title="Publish">
                      <CheckOutlined className="h5 pointer text-danger" />
                    </Tooltip>
                  </div>
                </div>
              </div>

              <hr/>

              <div className="row">
                <div className="column">
                  <ReactMarkdown children={course.description} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </InstructorRoute>
  );
}