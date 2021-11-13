import React, {useState} from 'react';
import Users from "./components/Users/Users";
import db from './db/db'


function App() {

  const [users, setUsers] = useState(db)

  const addUserHandler = ((data) => {
    setUsers([
      {id: users.length + 1, ...data},
      ...users]
    )
  })

  return (
    <Users users={users} addUser={addUserHandler}/>
  );
}

export default App;
