import { useEffect, useState } from 'react';
import axios from "axios";

export const useUser = (userId) => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            const fetchUser = async () => {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            };
            fetchUser();
        }, [userId]);

        return user;
}