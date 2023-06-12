import axios from 'axios';
import  { useEffect, useState } from 'react'

const UserLoader = (props) => {
   const [user, setUser] = useState(null);  
   const {userId, renderItem} = props;
  
   useEffect(() => {
     ( async () => {
            const response = await axios.get(`/users/${userId}`);
            setUser(response.data);
        }
     )();
  }, [userId]);
  

  return renderItem(user)
}

export default UserLoader
