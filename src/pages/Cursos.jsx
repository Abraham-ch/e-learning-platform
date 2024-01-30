import Header from "../components/Header";
import { Outlet, Link } from "react-router-dom";

export default function Cursos() {
  return (
    <>
      <Header />
      <section className="grid grid-cols-3 w-4/5 items-center mx-auto py-16 gap-x-8 gap-y-8">
        <div className="flex flex-col rounded-xl border-2 p-4">
          <h2 className="font-bold text-lg">Curso 1</h2>
          <div>
            <img src="" alt="" />
          </div>
          <p className="leading-6 text-pretty py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quaerat esse reiciendis deserunt unde cum excepturi. Est dolores
            cumque porro necessitatibus ad. Aliquid mollitia vitae voluptatibus,
            impedit eius pariatur voluptatum?
          </p>
          <div className="flex w-full justify-around items-center">
            <div className="">$11.00</div>
            <Link
              to={"Curso1"}
              className="border-2 bg-slate-400 font-bold px-4 py-2 rounded-lg text-white"
            >
              Buy It!
            </Link>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border-2 p-4">
          <h2 className="font-bold text-lg">Title</h2>
          <div>
            <img src="" alt="" />
          </div>
          <p className="leading-6 text-pretty py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quaerat esse reiciendis deserunt unde cum excepturi. Est dolores
            cumque porro necessitatibus ad. Aliquid mollitia vitae voluptatibus,
            impedit eius pariatur voluptatum?
          </p>
          <div className="flex w-full justify-around items-center">
            <div className="">$11.00</div>
            <a
              href="#"
              className="border-2 bg-slate-400 font-bold px-4 py-2 rounded-lg text-white"
            >
              Buy it!
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border-2 p-4">
          <h2 className="font-bold text-lg">Title</h2>
          <div>
            <img src="" alt="" />
          </div>
          <p className="leading-6 text-pretty py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quaerat esse reiciendis deserunt unde cum excepturi. Est dolores
            cumque porro necessitatibus ad. Aliquid mollitia vitae voluptatibus,
            impedit eius pariatur voluptatum?
          </p>
          <div className="flex w-full justify-around items-center">
            <div className="">$11.00</div>
            <a
              href="#"
              className="border-2 bg-slate-400 font-bold px-4 py-2 rounded-lg text-white"
            >
              Buy it!
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border-2 p-4">
          <h2 className="font-bold text-lg">Title</h2>
          <div>
            <img src="" alt="" />
          </div>
          <p className="leading-6 text-pretty py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quaerat esse reiciendis deserunt unde cum excepturi. Est dolores
            cumque porro necessitatibus ad. Aliquid mollitia vitae voluptatibus,
            impedit eius pariatur voluptatum?
          </p>
          <div className="flex w-full justify-around items-center">
            <div className="">$11.00</div>
            <a
              href="#"
              className="border-2 bg-slate-400 font-bold px-4 py-2 rounded-lg text-white"
            >
              Buy it!
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border-2 p-4">
          <h2 className="font-bold text-lg">Title</h2>
          <div>
            <img src="" alt="" />
          </div>
          <p className="leading-6 text-pretty py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quaerat esse reiciendis deserunt unde cum excepturi. Est dolores
            cumque porro necessitatibus ad. Aliquid mollitia vitae voluptatibus,
            impedit eius pariatur voluptatum?
          </p>
          <div className="flex w-full justify-around items-center">
            <div className="">$11.00</div>
            <a
              href="#"
              className="border-2 bg-slate-400 font-bold px-4 py-2 rounded-lg text-white"
            >
              Buy it!
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border-2 p-4">
          <h2 className="font-bold text-lg">Title</h2>
          <div>
            <img src="" alt="" />
          </div>
          <p className="leading-6 text-pretty py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quaerat esse reiciendis deserunt unde cum excepturi. Est dolores
            cumque porro necessitatibus ad. Aliquid mollitia vitae voluptatibus,
            impedit eius pariatur voluptatum?
          </p>
          <div className="flex w-full justify-around items-center">
            <div className="">$11.00</div>
            <a
              href="#"
              className="border-2 bg-slate-400 font-bold px-4 py-2 rounded-lg text-white"
            >
              Buy it!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
