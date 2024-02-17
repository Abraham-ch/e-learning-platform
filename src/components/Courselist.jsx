import { useEffect, useState } from "react";
import { getAllCourse } from "../api/api";
import { Link } from "react-router-dom";

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      const res = await getAllCourse();
      console.log(res);
      setCourses(res.data.results);
    }
    loadCourses();
  }, []);

  return (
    <>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 grid-cols-2 gap-x-7 gap-y-8 backdrop-blur-xl">
        {courses.map((course) => (
          <div className="max-w-[22rem] shadow-sm">
            <div
              className="rounded-xl py-2 w-full flex flex-col"
              key={course.id}
            >
              <Link
                className="relative flex items-center justify-center group px-2"
                to={`/Cursos/${course.id}`}
              >
                <img
                  src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="rounded-sm my-2 object-cover max-h-48 w-full shadow-lg hover:brightness-75 transition-all relative"
                  title={course.name}
                />
                <div className="text-white invisible group-hover:visible font-bold absolute z-10 items-center">
                  More about <br /> {course.name}
                </div>
              </Link>
              <div className="px-2">
                <h1 className="font-semibold text-[17px]">{course.name}</h1>
                <h2 className="font-light text-[16px]">{course.professor}</h2>
                <p className="text-[14px] font-light text-gray-500">
                  {course.description}
                </p>
                <div className="font-bold mt-1 ">{course.price} S/</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
