import { useEffect, useState } from 'react';
import axios from "axios";

export const useUser = () => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            const fetchUser = async () => {
                const response = await axios.get(`/users/1`);
                setUser(response.data);
            };
            fetchUser();
        }, []);

        return user;
}