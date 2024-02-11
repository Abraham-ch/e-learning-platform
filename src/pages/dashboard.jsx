import Header from "../components/Header";
import Course from "../components/Course";
import Profile from "../components/Profile";

export default function Dashboard() {
  return (
    <>
      <div className="h-screen flex flex-col w-full">
        <Header />
        <div className="my-auto max-w-6xl w-[72rem] mx-auto h-fit items-center">
          <h1 className="text-4xl font-semibold py-4 flex gap-x-3">
            Hello <Profile />
          </h1>
          <h2 className="text-3xl font-semibold pb-8">
            Welcome to your courses
          </h2>
          <div className="grid grid-cols-3 gap-x-6 bg-slate-100">
            <div className="col-span-1">
              <Course />
            </div>
            <div className="col-span-1">
              <Course />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
