import Header from "../components/Header";
import Profile from "../components/Profile";
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
      </div>
    </>
  );
}
