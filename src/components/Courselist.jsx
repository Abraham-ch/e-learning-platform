import { useEffect, useState } from "react";
import { getAllCourse } from "../api/api";

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      const res = await getAllCourse();
      console.log(res);
      setCourses(res.data);
    }
    loadCourses();
  }, []);
  return (
    <>
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
