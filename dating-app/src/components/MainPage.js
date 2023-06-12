//Add main page code 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersList from './UsersList';

// import { Navbar} from '../components';

import data from '../data';

const userDate = JSON.parse(localStorage.getItem('userData'));

const Main = () => {
  const [user, setUser] = useState(userDate);
  const [users, setUsers] = useState(data.users);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {    
//       navigate('/');
//     }
//   }, [navigate, user]);
function handleFilter(e) {
    console.log(e.target.value)
    const inputValue = e.target.value;
    const keyword = inputValue.length > 0 ? inputValue.charAt(0).toUpperCase() + inputValue.slice(1) : "";
    const filter = users.filter(user => user.location.includes(keyword));
    e.target.value.length > 0 ? setUsers(filter) : setUsers(data.users);
  }

  // function handleSelect(e){
  //   const selectedValue = e.target.value
  //   let filter;

  //   if(selectedValue === "all"){
  //       filter = users
  //   }else {
  //       filter = users.filter(user=> user.gender.toLowerCase() === selectedValue.toLowerCase())
  //   }
  //   setUsers(filter)
  // }

  const delUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <>
      <main className='dashboard'>
        {/* <Navbar user={user} setUser={setUser} /> */}
        <div>
            <label style={{marginLeft:"70px",marginTop:"50px"}}>Search location:</label>
            <input type='search' placeholder="Location"  style={{marginLeft:"10px" ,background:"", width:"200px"}}onChange={handleFilter}/>
            {/* <select onChange={handleSelect}>
                <option value="all">All</option>
                <option value="male">MALE</option>
                <option value="Female">FEMALE</option>
            </select> */}
        </div>
        <div className='dashboard-page'>
          <UsersList users={users} deleteUser={delUser} />
        </div>
      </main>
    </>
  );
};

export default Main;
