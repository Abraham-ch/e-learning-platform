import { Link } from "react-router-dom";

export default function Course() {
  return (
    <>
      <div className="rounded-xl shadow-lg flex flex-col px-4 py-2 max-w-sm gap-y-6 bg">
        <h2 className="font-semibold text-xl pt-4">Tittle of Course</h2>
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-xl object-cover"
        />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            veritatis ducimus illum tempora obcaecati maxime rerum iure iusto
            magni consequuntur.
          </p>
        </div>
        <div className="flex flex-row justify-between px-8 font-bold items-center pb-3">
          <div className="rounded-full items-center p-2">10%</div>
          <div className="rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors duration-500 ">
            <Link to={"/Dashboard/"}>Join</Link>
          </div>
        </div>
      </div>
    </>
  );
}
