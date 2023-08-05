'use client'
import { useEffect } from 'react';
import axios from 'axios';

const Page = ({ params }) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const data = {
            short_id: params.id
        }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/share/url?short_id=${params.id}`, data);

        if (response.data && response.data.data.origin_url) {
          window.location.href = response.data.data.origin_url;
        } else {
          // Handle the case when the response doesn't have the expected data
          // For example, redirect to an error page
        //   window.location.href = '/error';
        console.log("error")
        }
      } catch (error) {
        // Handle the error if the request fails
        // For example, redirect to an error page
        // window.location.href = '/error';
        console.log("error")

      }
    }

    fetchData();
  }, [params.id]);

  return (
    <div>
      {/* You can add any loading indicator here while waiting for the redirect */}
      Loading...
    </div>
  );
};

export default Page;
