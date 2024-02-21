import { useEffect, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import properlogo from "../resources/proper-logo.svg";
import { getAllCourse } from "../api/api";
import CourseForm from "../components/CourseForm";

const listacursos = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      try {
        const res = await getAllCourse();
        console.log(res);
        setCourses(res.data.results);
      } catch (error) {
        console.error("Error al cargar los cursos:", error);
      }
    }
    loadCourses();
  }, []);
  return (
    <>
      <ul>
        {courses.map((course) => (
          <ul
            key={course.id}
            className="grid grid-cols-8 max-w-4xl border-[1px] py-2 px-4 items-center"
          >
            <li className="col-span-2"> {course.name} </li>
            <li className="col-span-4 overflow-hidden">{course.description}</li>
            <li className="col-span-1">{course.price}</li>
            <li className="col-span-1 items-center">
              <button>
                <svg
                  className="ml-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                  <path d="M16 5l3 3" />
                </svg>
              </button>
            </li>
          </ul>
        ))}
      </ul>
    </>
  );
};

export const CoursesAdmin = () => {
  const { adminbar } = useParams();

  return (
    <>
      <div className="max-w-5xl w-full mx-auto py-16">
        <h1 className="text-4xl font-semibold">Lista de Cursos</h1>
        <p className="py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla
          vero, nostrum eos repellendus laudantium reprehenderit veniam.
          Voluptatem corrupti totam recusandae aut repellendus nam accusamus?
          Numquam optio voluptas sequi explicabo weribap
        </p>
        <ul className="grid grid-cols-8 max-w-4xl font-semibold items-center py-3 px-4 bg-[#1c1a62] text-white rounded-t-lg">
          <li className="col-span-2 ">Title</li>
          <li className="col-span-4 ">Description</li>
          <li className="col-span-1 ">Price</li>
          <li className="col-span-1 ">Edit Info </li>
        </ul>
        <div> {listacursos()} </div>

        <h2 className="text-3xl font-semibold pt-10 pb-8">Añadir cursos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui aperiam
          doloribus reprehenderit quos explicabo magnam eaque nesciunt sit
          corporis sapiente, laboriosam dolorem molestiae numquam.
        </p>
        <CourseForm />
      </div>
    </>
  );
};

export const UsersAdmin = () => {
  const { adminbar } = useParams();
  return (
    <>
      <div>Lista de Usuarios</div>
    </>
  );
};

export const NotificationsAdmin = () => {
  const { adminbar } = useParams();
  return (
    <>
      <div>Lista de notificaciones</div>
    </>
  );
};

export const SecurityAdmin = () => {
  const { adminbar } = useParams();
  return (
    <>
      <div>Lista de Seguridad</div>
    </>
  );
};

export const SettingsAdmin = () => {
  const { adminbar } = useParams();
  return (
    <>
      <div>Lista de ajustes</div>
    </>
  );
};

export default function Admin() {
  return (
    <>
      <div className="flex w-full">
        <nav className="max-w-60 w-full bg-[#1c1a62] sticky top-0 z-50 h-screen">
          <ul className="flex flex-col gap-y-2 px-4 py-4 justify-center text-[#ffff] bg-[#1c1a62] font-semibold w-full">
            <li className="mb-16">
              <Link to="/">
                <img
                  src={properlogo}
                  alt="Proper"
                  className="w-fit px-4 py-2 mx-2"
                />
              </Link>
            </li>
            <li className="w-full flex justify-center">
              <Link
                to="courses"
                className=" px-6 py-3 w-full focus:bg-white hover:brightness-[0.9] rounded-lg focus:text-[#1c1a62] text-white shadow-sm"
              >
                Courses
              </Link>
            </li>
            <li className="w-full flex justify-center">
              <Link
                to="users"
                className=" px-6 py-3 w-full focus:bg-white hover:brightness-[0.9] rounded-lg focus:text-[#1c1a62] text-white shadow-sm"
              >
                Users
              </Link>
            </li>
            <li className="w-full flex justify-center">
              <Link
                to="notifications"
                className=" px-6 py-3 w-full focus:bg-white hover:brightness-[0.9] rounded-lg focus:text-[#1c1a62] text-white shadow-sm"
              >
                Notifications
              </Link>
            </li>
            <li className="w-full flex justify-center">
              <Link
                to="security"
                className=" px-6 py-3 w-full focus:bg-white hover:brightness-[0.9] rounded-lg focus:text-[#1c1a62] text-white shadow-sm"
              >
                Security
              </Link>
            </li>
            <li className="w-full flex justify-center">
              <Link
                to="settings"
                className=" px-6 py-3 w-full focus:bg-white hover:brightness-[0.9] rounded-lg focus:text-[#1c1a62] text-white shadow-sm"
              >
                Settings
              </Link>
            </li>
            <li className="w-full flex justify-center">
              <Link
                to="/"
                className=" px-6 py-3 w-full focus:bg-white hover:brightness-[0.9] rounded-lg text-white"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-full h-full border-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}
