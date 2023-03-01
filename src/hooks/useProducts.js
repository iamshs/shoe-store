import { useQuery } from "@tanstack/react-query"

const useProducts = () =>{
    const { data:shoes ,isLoading, error } = useQuery({
        queryKey: ['productData'],
        queryFn: () =>
          fetch("http://localhost:5000/products").then(
            (res) => res.json(),
          ),
      })

      return [shoes,isLoading,error]
}

export default useProducts