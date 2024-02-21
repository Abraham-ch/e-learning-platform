import Header from "../components/Header";
import CourseList from "../components/Courselist";
import { useEffect, useState } from "react";
import { getAllCourse } from "../api/api";

export default function Cursos() {
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
    <div className="w-full h-screen">
      <Header />
      <section className="mx-auto h-fit w-full flex flex-col my-8 max-w-6xl relative">
        <h1 className="font-semibold text-3xl self-start mt-8">
          Cursos de empresarios
        </h1>
        <h2 className="text-xl font-semibold mt-8 ">Más populares</h2>
        <hr className="border-2 rounded-xl border-black/75 mt-2" />
        <div className="my-4">
          <CourseList courses={courses} />
        </div>
        <h2 className="text-xl font-semibold mt-8 ">Recomendados</h2>
        <hr className="border-2 rounded-xl border-black/75 mt-2" />
        <div className="my-4">
          <CourseList courses={courses} />
        </div>
      </section>
    </div>
  );
}
