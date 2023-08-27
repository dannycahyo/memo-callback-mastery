import { useMemo } from "react";
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

  const importantUserData = useMemo(() => {
    const selectedUserData = {
      image: user?.image,
      firstName: user?.firstName,
      lastName: user?.lastName,
      username: user?.username,
      age: user?.age,
      email: user?.email,
      phone: user?.phone,
      gender: user?.gender,
      maidenName: user?.maidenName,
      birthDate: user?.birthDate,
    };

    return selectedUserData;
  }, [user]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <img src={importantUserData.image} alt="User" />
      <p>
        Name: {`${importantUserData.firstName} ${importantUserData.lastName}`}
      </p>
      <p>Maiden Name: {importantUserData.maidenName}</p>
      <p>Age: {importantUserData.age}</p>
      <p>Gender: {importantUserData.gender}</p>
      <p>Email: {importantUserData.email}</p>
      <p>Phone: {importantUserData.phone}</p>
      <p>Username: {importantUserData.username}</p>
      <p>Birth Date: {importantUserData.birthDate}</p>
    </div>
  );
};

export default UserDetail;
