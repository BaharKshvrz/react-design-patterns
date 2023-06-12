import { useEffect, useState } from 'react';
import axios from "axios";
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Componet, resourcePath, resourceName) => {
    return props => {
        const [originalData, setOriginalData] = useState(null);
        const [data, setData] = useState(null);

        useEffect(() => {
            const fetchUser = async () => {
                const response = await axios.get(resourcePath);
                setData(response.data);
            };
            fetchUser();
        }, []);

        const onChange = (changes) => {
            setData({...data, ...changes});
        }

        const onSave = async () => {
             const response = await axios.post(resourcePath, {[resourceName]: data});
             setOriginalData(response.data);
             setData(response.data);
        }

        const onReset = () => {
            setData(originalData);
        }

        const resourceProps = {
            [resourceName] : data,
            [`onChange${capitalize(resourceName)}`]: onChange,
            [`onSave${capitalize(resourceName)}`]: onSave,
            [`onReset${capitalize(resourceName)}`]: onReset,
        }

        return <Componet {...props} {...resourceProps} />;
    }
}