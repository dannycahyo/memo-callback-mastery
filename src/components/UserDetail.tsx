import { useApiRequest } from "../hooks/useApiRequest";
import type { UserData } from "../types/User";

const UserDetail = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useApiRequest<UserData>({
    apiFunction: async () => {
      const response = await fetch("https://dummyjson.com/users/1");
      const userData = await response.json();
      return userData;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <img src={user?.image} alt="User" />
      <p>Name: {`${user?.firstName} ${user?.lastName}`}</p>
      <p>Maiden Name: {user?.maidenName}</p>
      <p>Age: {user?.age}</p>
      <p>Gender: {user?.gender}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Username: {user?.username}</p>
      <p>Birth Date: {user?.birthDate}</p>
    </div>
  );
};

export default UserDetail;
