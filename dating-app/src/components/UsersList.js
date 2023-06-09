import User from './User';

const UsersList = ({ users, deleteUser }) => {
  return (
    <section className='container'>
      {users.map((user) => {
        console.log(user)
        return <User key={user.id} {...user} deleteUser={deleteUser} />;
      })}
    </section>
  );
};

export default UsersList;