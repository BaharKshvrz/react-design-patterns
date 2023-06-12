import React from 'react'

function UserInfoForm({ user, onChangeUser, onSaveUser, onResetUser}) {
   const { name, age, hairColor } = user || {};

   return (
    <>
      { user ? <>
                  <label>Name:</label>
                  <input type="text" name="name" value={name} onChange={(e) => onChangeUser({name: e.target.value})}/>
                  <label>Age:</label>
                  <input type="text" name="age" value={age} onChange={(e) => onChangeUser({age: e.target.value})}/>
                  <label>Hari Color:</label>
                  <input type="text" name="hairColor" value={hairColor} onChange={(e) => onChangeUser({hairColor: e.target.value})}/>

                  <button onClick={onSaveUser}> Save Changes</button>
                  <button onClick={onResetUser}>Reset</button>
              </> 
            : ''
     }
    </>
  )
}

export default UserInfoForm
