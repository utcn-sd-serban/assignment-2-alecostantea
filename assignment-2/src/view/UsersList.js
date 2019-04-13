import React from "react";

const UsersList = ({users, title, newUserUsername, newUserPassword,
     onCreate, onChange}) => (
    <div>
        <h2>{ title || "Users"}</h2>
        <div>
            <label>Username: </label>
            <input value = {newUserUsername} onChange={ e => onChange("Username", e.target.value ) }/>
            <br />
            <label>Password: </label>
            <input value = {newUserPassword} onChange={ e => onChange("Password", e.target.value ) }/>
            <br />
            <button onClick={onCreate}>Create</button>
    </div>
        <hr />
        <table border = "1">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index) => (
                        <tr key = {index}>
                        <td>{user.Username}</td>
                        <td>{user.Password}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
);

export default UsersList;