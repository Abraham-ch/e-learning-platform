import React, { useState } from "react";
import axios from "axios";

function CourseForm() {
  const [course, setCourse] = useState({
    name: "",
    professor: "",
    price: "",
    description: "",
    modules: 0,
    order: 0,
    active: "",
    miniature: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = value;

    if (["price", "modules", "order"].includes(name) && value !== "") {
      newValue = Number(value);
    }

    setCourse({
      ...course,
      [name]: type === "checkbox" ? checked : newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course);
    // Aquí puedes enviar los datos a una API o manejarlos como necesites
    axios
      .post("http://localhost:8000/courses/api/v1/course/", course)
      .then((response) => {
        console.log(response.data);
        // Aquí puedes manejar la respuesta de la API, como mostrar un mensaje de éxito
      })
      .catch((error) => {
        console.error(error);
        // Aquí puedes manejar los errores, como mostrar un mensaje de error
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl my-10 bg-white rounded-lg "
    >
      <div className="flex gap-x-8 w-full">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre del curso
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={course.name}
            onChange={handleChange}
            className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="professor"
            className="block text-sm font-medium text-gray-700"
          >
            Profesor
          </label>
          <input
            type="text"
            id="professor"
            name="professor"
            value={course.professor}
            onChange={handleChange}
            className="mt-1 block w-2/3 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          value={course.description}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div className="flex gap-x-8">
        <div className="mb-4">
          <label
            htmlFor="modules"
            className="block text-sm font-medium text-gray-700"
          >
            Módulos
          </label>
          <input
            type="number"
            id="modules"
            name="modules"
            min="0"
            value={course.modules}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="order"
            className="block text-sm font-medium text-gray-700"
          >
            Orden
          </label>
          <input
            type="number"
            id="order"
            name="order"
            min="0"
            value={course.order}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Precio
          </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="S/00.00"
            value={course.price}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="active" className="inline-flex items-center">
          <input
            type="checkbox"
            id="active"
            name="active"
            checked={course.active}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">Activo</span>
        </label>
      </div>

      <div className="mb-4">
        <label
          htmlFor="miniature"
          className="block text-sm font-medium text-gray-700"
        >
          Miniatura (URL)
        </label>
        <input
          type="file"
          id="miniature"
          name="miniature"
          value={course.miniature}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Crear Curso
      </button>
    </form>
  );
}

export default CourseForm;
