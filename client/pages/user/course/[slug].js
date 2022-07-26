import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleCourse = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({ lessons: [] });

  useEffect(() => {
    if (slug) loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  return (
    <>
      <h1>{JSON.stringify(course, null, 4)}</h1>
    </>
  );
};
export default SingleCourse;
