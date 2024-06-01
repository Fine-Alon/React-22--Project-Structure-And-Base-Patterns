import {useEffect, useState} from "react";
import {Restaurant} from "../api/api.ts";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getRestaurants} from "../api.ts";

export const useApp = () => {

    const queryClient = useQueryClient()

    const [rooms, setRooms] = useState<Restaurant[]>([])

    const {data, isError, isPending} = useQuery({
        queryKey: ['rooms'],
        queryFn: () => getRestaurants()
    }, queryClient)

    useEffect(() => {
        data && setRooms(data)
    }, [data])

    const handleSearch = (query: string): void => {
        console.log('query', query)
        if (!data) return
        if (query === '') setRooms(data)

        let filteredRooms = data.filter(obj =>
            obj.name.toLowerCase().includes(query.trim().toLowerCase())
        )
        setRooms(filteredRooms)
    };


    return {rooms, handleSearch, data, isError, isPending}
}
