import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersList from './UsersList';

// import { Navbar} from '../components';

import data from '../data';

const userDate = JSON.stringify(localStorage.getItem('userData'));

const Main = () => {
  const [user, setUser] = useState(JSON.parse(userDate));
  const [users, setUsers] = useState(data.users);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {    
//       navigate('/');
//     }
//   }, [navigate, user]);


  const delUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <>
      <main className='dashboard'>
        {/* <Navbar user={user} setUser={setUser} /> */}
        <div className='dashboard-page'>
          <UsersList users={users} deleteUser={delUser} />
        </div>
      </main>
    </>
  );
};

export default Main;
