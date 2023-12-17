import React from "react";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = ({ params }: UserPageProps) => {
  return <div>User: {params.username}</div>;
};

export default UserPage;
