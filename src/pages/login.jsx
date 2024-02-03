import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-green-500/50">
        <div className="bg-white rounded-lg shadow-lg my-5 mx-2">
          <Link to="/">
            <div className="px-3 py-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 14l-4 -4l4 -4" />
                <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex shadow-xl max-w-3xl p-8 bg-white">
          <img
            src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-xl object-cover h-[600px] w-1/2 block"
          />

          <div className="flex flex-col mx-auto my-auto justify-center p-8 rounded-xl h-3/4">
            <h2 className="text-xl font-semibold">Log In</h2>
            <form action="" className="flex flex-col gap-y-4 py-4">
              <div>User</div>
              <input
                type="text"
                name="email"
                required
                placeholder="user@mail.com"
                className="px-4 py-2 rounded-xl border-2"
              />
              <div>Password</div>
              <input
                type="password"
                name="password"
                required
                placeholder="************"
                className="px-4 py-2 rounded-xl border-2"
              />
            </form>
            <button className="text-center border-2 py-2 px-6 rounded-xl self-center bg-blue-950 text-white font-semibold hover:scale-105 transition-all duration-500">
              Login
            </button>
            <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr class="border-gray-400" />
              <p class="text-center text-sm">Or</p>
              <hr class="border-gray-400" />
            </div>
            <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74] transition-all">
              <svg
                class="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              <p className="font-semibold">Login with Google</p>
            </button>

            <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>

            <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button class="py-2 px-5 bg-white border rounded-xl hover:bg-gray-400 hover:text-white transition-all duration-300">
                <Link to="/Register">Register</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
