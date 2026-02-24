import React, { useEffect, useState } from "react";
let initFormState = {
  username: "",
  email: "",
  password: "",
};
function Users() {
  const [users, setUsers] = useState([]);
  const [userForm, setUserform] = useState(initFormState);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  async function getUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/users");
      if (!res.ok) {
        let errorText = await res.text();
        throw new Error(errorText);
      }
      let data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function postUsers(postData) {
    try {
      setSubmitLoading(true);
      let res;
      if (userForm.id) {
        res = await fetch("https://fakestoreapi.com/users/" + userForm.id, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(postData),
        });
      } else
        res = await fetch("https://fakestoreapi.com/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(postData),
        });
      if (!res.ok) {
        let errorText = await res.text();
        throw new Error(errorText);
      }
      setUserform(initFormState);
      await getUsers();
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoading(false);
    }
  }
  async function onDelete(user) {
    try {
      await fetch("https://fakestoreapi.com/users/" + user.id, {
        method: "DELETE",
      });
      console.log(user.name.firstname, "deleted");
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  }
  function onSubmit() {
    postUsers(userForm);
  }
  function onEditClick(user) {
    console.log(user, "to be edited");
    setUserform({
      username: user.username,
      email: user.email,
      password: user.password,
      id: user.id,
    });
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div>
        <label htmlFor="username">
          Username :
          <input
            value={userForm.username}
            onChange={(e) => {
              setUserform((prev) => ({ ...prev, username: e.target.value }));
            }}
            type="text"
            name="username"
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email :
          <input
            value={userForm.email}
            onChange={(e) => {
              setUserform((prev) => ({ ...prev, email: e.target.value }));
            }}
            type="text"
            name="email"
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password :
          <input
            value={userForm.password}
            onChange={(e) => {
              setUserform((prev) => ({ ...prev, password: e.target.value }));
            }}
            type="password"
            name="password"
          />
        </label>
      </div>
      <button disabled={submitLoading} onClick={onSubmit}>
        {userForm.id ? "Update" : "Submit"}
      </button>
      {loading ? (
        <div>Loading.....</div>
      ) : (
        <>
          {users.map((user) => (
            <div key={user.id}>
              {user.email}
              <button onClick={() => onDelete(user)}> Delete</button>{" "}
              <button onClick={() => onEditClick(user)}>Edit</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Users;
