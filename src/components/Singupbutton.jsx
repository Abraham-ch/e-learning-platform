import { useAuth0 } from "@auth0/auth0-react";

const Singupbutton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() =>
        loginWithRedirect({
          authorizationParams: {
            screen_hint: "signup",
          },
        })
      }
    >
      Singup
    </button>
  );
};

export default Singupbutton;
