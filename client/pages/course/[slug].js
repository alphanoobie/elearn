import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Badge, Modal } from "antd";
import { currencyFormatter } from "../../utils/helpers";
import ReactPlayer from "react-player";

const SingleCourse = ({ course }) => {
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState("");

  const router = useRouter();
  const { slug } = router.query;

  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category,
  } = course;

  return (
    <>
      <div className="jumbotron bg-primary square">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-light font-weight-bold">{name}</h1>
            <p className="lead">
              {description && description.substring(0, 160)}...
            </p>
            <Badge
              count={category}
              style={{ backgroundColor: "#03a9f4" }}
              className="pb-4 mr-2"
            />
            <p> Created by {instructor.name}</p>
            <p> Last updated {new Date(updatedAt).toLocaleDateString()}</p>
            <h4 className="text-light">
              {paid
                ? currencyFormatter({ amount: price, currency: "inr" })
                : "Free"}
            </h4>
          </div>
          <div className="col-md-4">
            {lessons[0].video && lessons[0].video.Location ? (
              <div
                onClick={() => {
                  setPreview(lessons[0].video.Location);
                  setShowModal(!showModal);
                }}
              >
                <ReactPlayer
                  className="react-player-div"
                  url={lessons[0].video.Location}
                  light={image && image.Location}
                  width="100%"
                  height="225px"
                />
              </div>
            ) : (
              <>
                <img
                  src={image && image.Location}
                  alt={name}
                  className="img img-fluid"
                />
              </>
            )}
            <p>show enroll button</p>
          </div>
        </div>
      </div>

      {showModal? course.lessons[0].video.Location : 'dont show'}
    </>
  );
};

export async function getServerSideProps({ query }) {
  console.log("query");
  const { data } = await axios.get(`${process.env.API}/course/${query.slug}`);
  return {
    props: {
      course: data,
    },
  };
}
export default SingleCourse;
