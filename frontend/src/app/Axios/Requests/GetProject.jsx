import React, { useEffect, useState } from 'react'
import axios from 'axios'
if (typeof window !== 'undefined') {
    var user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
    }
}

function GetProject(param) {
    const [project, setProject] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/file/project_by_id`;
    const getData = async (link) => {
        try {

            setLoading(true);
            // console.log(link)
            
            const res = await axios(link, {headers: {
                'Authorization': user.token
            }});
            setProject(res.data);

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

        project, loading, error, getData: link => getData(link)
    }
}

export default GetProject