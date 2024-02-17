import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
useEffect;

export default function InfocursoID() {
  const { id } = useParams();
  const getcourse = () => {
    return axios.get(`http://localhost:8000/courses/api/v1/course/${id}`);
  };

  const [curso, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      const res = await getcourse();
      console.log(res);
      setCourses(res.data);
    }
    loadCourses();
  }, [id]);

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="flex w-4/5 mx-auto justify-between gap-x-16 py-16">
          <div className="flex flex-col gap-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold">{curso.name}</h1>
            <h2 className="text-xl font-bold">{curso.professor}</h2>
            <p className="text-pretty leading-7">
              {curso.description} Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Consequuntur saepe, cumque doloremque reiciendis
              maiores a officiis quo, at aspernatur ex delectus consequatur
              tempora itaque corporis corrupti quis voluptas fugit animi? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Hic tempora
              porro fugit eos maiores alias non libero nemo ipsa culpa
              distinctio quaerat autem, et eveniet nisi eaque delectus iusto ex?
            </p>
            <h2 className="text-xl font-bold">Syllabus</h2>
            <div className="flex flex-col gap-y-2">
              <div className="max-w-3xl flex flex-col gap-y-6">
                <details className=" open:bg-slate-800 open:text-white">
                  <summary className=" transition-all py-2 px-4 font-bold">
                    Tema 1: Lorem ipsum dolor sit amet consectetur.
                  </summary>
                  <div>
                    <ul>
                      <li className="leading-6 px-4 text-black bg-white">
                        <p className="py-2">
                          Subtema 1: Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nulla, praesentium odio possimus dolor, cum
                          suscipit enim perspiciatis sequi ipsam dolore, aperiam
                          voluptatum ea. Ullam, laborum architecto. Quo iusto
                          assumenda deserunt.
                        </p>
                      </li>
                    </ul>
                  </div>
                </details>
                <details className=" open:bg-slate-800 open:text-white">
                  <summary className=" transition-all py-2 px-4 font-bold">
                    Tema 2: Lorem ipsum dolor sit amet consectetur.
                  </summary>
                  <div>
                    <ul>
                      <li className="leading-6 px-4 text-black bg-white">
                        <p className="py-2">
                          Subtema 1: Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nulla, praesentium odio possimus dolor, cum
                          suscipit enim perspiciatis sequi ipsam dolore, aperiam
                          voluptatum ea. Ullam, laborum architecto. Quo iusto
                          assumenda deserunt.
                        </p>
                      </li>
                    </ul>
                  </div>
                </details>
                <details className=" open:bg-slate-800 open:text-white">
                  <summary className=" transition-all py-2 px-4 font-bold">
                    Tema 3: Lorem ipsum dolor sit amet consectetur.
                  </summary>
                  <div>
                    <ul>
                      <li className="leading-6 px-4 text-black bg-white">
                        <p className="py-2">
                          Subtema 1: Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nulla, praesentium odio possimus dolor, cum
                          suscipit enim perspiciatis sequi ipsam dolore, aperiam
                          voluptatum ea. Ullam, laborum architecto. Quo iusto
                          assumenda deserunt.
                        </p>
                      </li>
                    </ul>
                  </div>
                </details>
                <details className=" open:bg-slate-800 open:text-white">
                  <summary className=" transition-all py-2 px-4 font-bold">
                    Tema 4: Lorem ipsum dolor sit amet consectetur.
                  </summary>
                  <div>
                    <ul>
                      <li className="leading-6 px-4 text-black bg-white">
                        <p className="py-2">
                          Subtema 1: Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nulla, praesentium odio possimus dolor, cum
                          suscipit enim perspiciatis sequi ipsam dolore, aperiam
                          voluptatum ea. Ullam, laborum architecto. Quo iusto
                          assumenda deserunt.
                        </p>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="flex flex-col border-2 rounded-xl p-4 w-fit h-fit">
            <div className="overflow-hidden">
              <img
                src={curso.miniature}
                alt="Curso de física"
                className="object-cover overflow-hidden w-80 h-64"
              />
            </div>
            <h3 className="text-xl font-bold pt-4 pb-2">{curso.name}</h3>
            <div className="text-3xl font-extrabold pb-4">
              {curso.price} USD /{" "}
              <span className="font-bold text-gray-500/50 text-2xl line-through">
                49.99 USD
              </span>
            </div>
            <button className=" px-4 py-4 border-2 bg-blue-700 items-center hover:bg-blue-800 text-white text-center font-extrabold ">
              Añadir a la cesta
            </button>
            <a
              href="#"
              className="mt-3 px-4 py-4 border-2 border-slate-800 items-center hover:bg-slate-800 hover:text-white text-center font-extrabold "
            >
              Pagar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
