import Header from "../components/Header";
import Singupbutton from "../components/Singupbutton";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col ">
        <Header />
        <div className="flex justify-center max-w-6xl mx-auto h-full gap-x-16">
          <div className="flex flex-col gap-y-8 justify-center h-full">
            <h1 className="font-bold text-7xl text-neutral-800">
              Make learning fun!
            </h1>
            <p className="leading-7 text-xl text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              quidem quod quisquam porro.
            </p>
            <div className="text-white bg-blue-600 rounded-lg shadow-lg hover:scale-105 font-semibold transition-all w-fit px-6 py-3 text-lg">
              <Singupbutton /> for free
            </div>
          </div>
          <img
            src="https://www.valamis.com/wp-content/uploads/2022/09/continious-learning.png"
            alt=""
            className="object-cover w-2/5 h-3/5 rounded-3xl self-center"
          />
        </div>
        <div className="flex justify-center gap-x-48 w-full py-10 mx-auto bg-slate-50">
          <div className="flex items-center gap-x-3">
            <div className="rounded-full p-2 border-2 bg-gray-200">
              <svg
                className="w-10 h-10"
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
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>

            <span className="flex flex-col items-center">
              <p className="font-bold text-xl">90+</p>
              <p className="font-light text-sm text-gray-500">Users</p>
            </span>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="rounded-full p-2 border-2 bg-gray-200">
              <svg
                className="w-10 h-10"
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
                <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                <path d="M6 9l12 0" />
                <path d="M6 12l3 0" />
                <path d="M6 15l2 0" />
              </svg>
            </div>

            <span className="flex flex-col items-center">
              <p className="font-bold text-xl">100+</p>
              <p className="font-light text-sm text-gray-500">Courses</p>
            </span>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="rounded-full p-2 border-2 bg-gray-200">
              <svg width="40" height="40" viewBox="0 0 101 101" fill="none">
                <path
                  d="M20.4 19.3L32 24.4C29.7 27.8 28.5 31.7 28.5 35.8C28.5 47 37.6 56.2 48.9 56.2C60.2 56.2 69.3 47.1 69.3 35.8C69.3 31.8 68.1 27.8 65.9 24.5L76.1 19.7V39.1L73 45.7C72.8 46.2 72.8 46.7 73.1 47.1C73.4 47.5 73.9 47.8 74.4 47.8H80.3C80.8 47.8 81.3 47.6 81.5 47.1C81.8 46.7 81.8 46.2 81.6 45.7L78.9 39.1V18.4C78.9 17.6 78.8 17 77.4 16.4C77.1 16.3 49.6 4.10001 49.6 4.10001C49.2 3.90001 48.8 3.90001 48.4 4.10001L20.4 16.5C19.9 16.7 19.5 17.3 19.5 17.9C19.5 18.5 19.8 19 20.4 19.3ZM66.2 35.8C66.2 45.4 58.4 53.2 48.8 53.2C39.2 53.2 31.4 45.4 31.4 35.8C31.4 32.1 32.6 28.6 34.7 25.6L48.3 31.7C48.5 31.8 48.7 31.8 48.9 31.8C49.1 31.8 49.3 31.8 49.5 31.7L62.9 25.7C65.1 28.7 66.2 32.2 66.2 35.8ZM76.7 44.8L77.4 43.3L78 44.8H76.7ZM49 7.10001L73.3 17.9L49 28.7L24.7 17.9L49 7.10001Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2.2"
                ></path>
                <path
                  d="M49.4 59.8C29.9 59.8 14 75.7 14 95.2C14 96 14.7 96.7 15.5 96.7H83.3C84.1 96.7 84.8 96 84.8 95.2C84.8 75.7 68.9 59.8 49.4 59.8ZM17.1 93.7C17.9 76.5 32.1 62.8 49.5 62.8C66.9 62.8 81 76.6 81.8 93.7H17.1Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2.2"
                ></path>
              </svg>
            </div>

            <span className="flex flex-col items-center">
              <p className="font-bold text-xl">80+</p>
              <p className="font-light text-sm text-gray-500">Educators </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
