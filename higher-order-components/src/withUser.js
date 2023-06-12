import { useEffect, useState } from 'react';
import axios from "axios";

export const withUser = (Componet, userId) => {
    return props => {
        const [user, setUser] = useState(null);

        useEffect(() => {

            const fetchUser = async () => {
                console.log("uvvvs", userId);

                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            };
            fetchUser();
        }, []);

        return <Componet {...props} user={user}/>;
    }
}