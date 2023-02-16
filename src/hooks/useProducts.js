import { useQuery } from "@tanstack/react-query"

const useProducts = () =>{
    const { data:shoes ,isLoading, error } = useQuery({
        queryKey: ['productData'],
        queryFn: () =>
          fetch("shoes.json").then(
            (res) => res.json(),
          ),
      })

      return [shoes,isLoading,error]
}

export default useProducts