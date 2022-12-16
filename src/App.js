import React from "react";
import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
