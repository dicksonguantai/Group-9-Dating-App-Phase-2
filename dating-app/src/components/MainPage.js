//Add main page code 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersList from './UsersList';

// import { Navbar} from '../components';

import data from '../data';

const userDate = JSON.parse(localStorage.getItem('userData'));

const Main = ({isLoggedIn}) => {
  // const [user, setUser] = useState(userDate);
  const [users, setUsers] = useState(data.users);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {    
      navigate('/main');
    }

  else{
    navigate('/')
  }
  }, [navigate,isLoggedIn]);

// useEffect (()=>{

// fetch("https://short-internal-elk.glitch.me/users")
// fetch("data.json")

// .then ((response) => response.json())
// .then((dataFetched)=> console.log(dataFetched))


// },[users])

  const delUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const filterProfiles =(e) =>{

    
    
    const checkAgainst = e.target.value
    console.log("🚀 ~ file: MainPage.js:32 ~ filterProfiles ~ checkAgainst:", checkAgainst)
    if(checkAgainst==="default"){
      setUsers(data.users)

    }

else{

    const check = e.target.id
    console.log("🚀 ~ file: MainPage.js:35 ~ filterProfiles ~ check:", check)
    
    const filteredUsers = data.users.filter((user)=>user[`${check}`] === checkAgainst);
    
    console.log("🚀 ~ file: MainPage.js:39 ~ filterProfiles ~ filteredUsers:", filteredUsers)
    setUsers(filteredUsers)
}
  }

  const searchProfiles =(e) =>{
    const checkAgainst = e.target.value
    
    if(e.target.id==="default"){
      setUsers(data.users)

    }

else{
    const foundUsers =data.users.filter((user)=>
      user.name.toLowerCase().includes(checkAgainst.toLowerCase())
    )
    setUsers(foundUsers)
}
  }

  return (
    <>
    <label for="profiles" style={{marginLeft:"25%"}}>Filter Profiles : </label>

        <select onChange = {(e)=> {
          filterProfiles(e)
        }} id="location">
        <option value="default">Select location</option>
        <option value="Nairobi">Nairobi</option>
        <option value="Mombasa">Mombasa</option>
        <option value="Nakuru">Nakuru</option>
        <option value="Kisumu">Kisumu</option>
        </select>
        &ensp;
        <select id="gender" onChange = {(e)=> {
          filterProfiles(e)
        }}>
        <option value="default">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
        <label style={{marginLeft:"150px"}}>Search User:</label>
            <input type='search' placeholder="Search By Name..."  id ="name" style={{marginLeft:"10px" ,background:""}}onChange={(e)=>searchProfiles(e)}/>
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