import axios from 'axios';
import  { useEffect, useState } from 'react'

const UserLoader = (props) => {
   const [user, setUser] = useState(null);  
  
   useEffect(() => {
     ( async () => {
            const response = await axios.get('/users/1');
            setUser(response.data);
        }
     )();
  }, [setUser]);
  

  return props.render(user)
}

export default UserLoader
