import { useEffect, useState } from 'react'

const useLoading = () => {

   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   const time = setTimeout(() => {
      setIsLoading(false);
      console.log("sadf");
    }, 1000);

    return () => clearTimeout(time)
  }, []);
  return {isLoading}
}

export default useLoading