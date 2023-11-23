import React, { useState } from "react";

import useUser from "./../../hooks/useUser";
import useActions from "./../../hooks/useActions";

import Loading from "./../Loading/Loading";
import Error from "./../Error/Error";

export default function User() {
  const { user, isLoading, error } = useUser();
  const [userId, setUserId] = useState();

  const { fetchUserById } = useActions();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchUserById(userId)
        .then(() => e.target.reset())
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
        <Loading />
      ) : error ? (
        <Error value={error} />
      ) : null}
    </div>
  );
}
 