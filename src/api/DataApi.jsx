import axios from "axios";
import { useEffect, useState } from "react";

const getAllCourse = () => {
  return axios.get("http://localhost:8000/courses/api/v1/course/");
};

export default function DataApi() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      const res = await getAllCourse();
      console.log(res);
      setCourses(res.data.results);
    }
    loadCourses();
  }, []);

  return <></>;
}
