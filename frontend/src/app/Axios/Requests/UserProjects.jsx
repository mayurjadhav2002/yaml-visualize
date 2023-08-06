import React, { useEffect, useState } from 'react'
import axios from 'axios'
if (typeof window !== 'undefined') {
    var user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
        // console.log(user)
    } else {

    }
}
function UserProjects(param) {
    const [projects, setProject] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;
    const getData = async (link) => {
        try {
            setLoading(true);
            console.log(link)
            const res = await axios(link, {headers: {
                Authorization: user.token
            }});
            setProject(res.data.data);

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getData(param);
    }, [param])
    return {

        projects, loading, error, getData: link => getData(link)
    }
}

export default UserProjects