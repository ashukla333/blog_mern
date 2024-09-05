

import { useState, useEffect } from 'react';

const userInfo = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const storedUserInfo = localStorage.getItem("userData");
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));
        }
    }, []);

    return userInfo;
};

export default userInfo;