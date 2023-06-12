import { useEffect, useState } from 'react';
import axios from "axios";

export const withEditableUser = (Componet, userId) => {
    return props => {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            const fetchUser = async () => {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            };
            fetchUser();
        }, []);

        const onChangeUser = (changes) => {
            setUser({...user, ...changes});
        }

        const onSaveUser = async () => {
             const response = await axios.post(`/users`, {user});
             setOriginalUser(response.data);
             setUser(response.data);
        }

        const onResetUser = () => {
            setUser(originalUser);
        }

        return <Componet {...props}
                    user={user}
                    onChangeUser={onChangeUser}
                    onSaveUser= {onSaveUser}
                    onResetUser={onResetUser}
                   />;
    }
}