import { useEffect, useState } from 'react';
import axios from "axios";

export const useResource = (resourceUrl) => {
        const [resource, setResource] = useState(null);

        useEffect(() => {
            const fetchUser = async () => {
                const response = await axios.get(resourceUrl);
                setResource(response.data);
            };
            fetchUser();
        }, [resourceUrl]);

        return resource;
}