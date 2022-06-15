import React, { useEffect, useState } from "react";
import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";
import { Avatar } from "antd";
import Link from "next/link";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

export default function InstructorIndex() {
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get("api/instructor-courses");
    setcourses(data);
  };

  const myStyle = { marginTop: "-15px", fontSize: "12px" };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center">Instructor Dashboard</h1>
      {/* <pre>{JSON.stringify(courses, null, 4)}</pre> */}

      {courses &&
        courses.map((course) => (
          <>
            
            <div className="media pt-2">
              <Avatar
                size={80}
                src={course.image ? course.image.Location : "/course.png"}
              />
              <div className="media-body pl-2">
                <div className="row">
                  <div className="col-md-9">
                    <Link
                      href={`/instructor/course/view/${course.slug}`}
                      className="cursor-pointer"
                    >
                      <a className="mt-2 text-primary">
                        <h5 className="pt-2">{course.name}</h5>
                      </a>
                    </Link>
                    <p style={{ marginTop: "-10px" }}>
                      {course.lessons.length} Lessons
                    </p>
                    {course.lessons.length < 5 ? (
                      <p style={myStyle} className="text-warning">
                        Atleast 5 lessons are required to publish a course
                      </p>
                    ) : course.published ? (
                      <p style={myStyle} className="text-success">
                        Your course is live in the marketplace
                      </p>
                    ) : (
                      <p style={myStyle} className="text-success">
                        Your course is ready to be published
                      </p>
                    )}
                  </div>

                  <div className="col-md-3 mt-3 text-center">
                    {course.published ? (
                      <div>
                        <CheckCircleOutlined size='large' className="h5 pointer text-success" />
                      </div>
                    ) : (
                      <div>
                        <CloseCircleOutlined size='large' className="h5 pointer text-warning" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <hr/>
          </>
        ))}
    </InstructorRoute>
  );
}
