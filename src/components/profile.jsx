import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  return (
    <div className="flex gap-x-3 items-center">
      <img src={user.picture} alt={user.name} className="h-8 rounded-full" />
      <div>{user.name}</div>
    </div>
  );
};

export default Profile;
