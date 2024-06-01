import {useEffect, useState} from "react";
import {getRestaurants, Restaurant, UpdateRestaurantRaitingArgs, updateRestaurantRating} from "../api/api.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

export const useApp = () => {
    const queryClient = useQueryClient()
    const [rooms, setRooms] = useState<Restaurant[]>([])

    const {data, isError, isPending} = useQuery({
        queryKey: ['rooms'],
        queryFn: () => getRestaurants()
    }, queryClient)

    const mutate = useMutation({
        mutationKey: ['rating'],
        mutationFn: updateRestaurantRating,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["rooms"]})
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

    const handleRating = ({id, raiting}: UpdateRestaurantRaitingArgs) => {
        mutate.mutate({id, raiting})
    }


    return {rooms, handleSearch, data, isError, isPending, handleRating}
}
