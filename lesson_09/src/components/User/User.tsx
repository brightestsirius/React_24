import React, { useState } from "react";

import useUser from "../../hooks/useUser";

import useActions from "../../hooks/useActions";

import Skeleton from "../Skeleton/Skeleton";

export default function User() {
  const [userId, setUserId] = useState();
  const { user, isLoading, error } = useUser();
  const { fetchUserById } = useActions();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserById(userId).then(() => {
      e.target.reset();
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User id:{" "}
          <input type="number" onChange={(e) => setUserId(e.target.value)} />
        </label>
      </form>

      {user ? (
        <ul>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      ) : isLoading ? (
        <Skeleton />
      ) : error ? (
        <p>{error}</p>
      ) : null}
    </div>
  );
}
