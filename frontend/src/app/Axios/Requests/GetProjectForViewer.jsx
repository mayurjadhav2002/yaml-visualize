import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GetProjectForViewer(param) {
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/file/share`;
    const getData = async (link) => {
        try {

            setLoading(true);
            // console.log(link)
            
            const res = await axios(link);
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

        project, loading, error, getData: link => getData(link)
    }
}

export default GetProjectForViewer