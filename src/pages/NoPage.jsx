import Header from "../components/Header";

export default function NoPage() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Header />
        <div className="w-full my-auto flex">
          <p className="font-bold text-5xl mx-auto">Page Not Found {":("}</p>
        </div>
      </div>
    </>
  );
}
