import axios from "axios";
import CourseCard from "../components/cards/CourseCard";

const Index = ({ courses }) => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };

  //   fetchCourses();
  // }, []);

  return (
    <>
      <h1 className="jumbotron text-center bg-primary border-r-6">
        E-Learn App
      </h1>

      <div className="container-fluid">
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              {/* <pr>{JSON.stringify(course, null, 4)}</pr> */}
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
