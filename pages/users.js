import User from '@/components/user';
import React from 'react'

export const getStaticProps = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data);

    return{
        props:{
            users:data,
        },
    };

}

const UsersList = ({users}) => {
  return (
    <>
        <h1>List of Users</h1>
        {users.map((user)=>{
            return(
                <div key={user.id}>
                    <User user={user}/>
                </div>
            );
        })}
    </>
  )
}

export default UsersList