import './styles.css'
import {SearchLine} from "./components/SearchLine.tsx";
import {Logo} from "./components/Logo.tsx";
import {Avatar} from "./components/Avatar.tsx";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getRestaurants} from "./api.ts";
import {Loader} from "./components/Loader";
import {Card} from "./components/Card.tsx";
import {nanoid} from "nanoid";


function App() {
    const queryClient = useQueryClient()

    const queryRooms = useQuery({
        queryKey: ['rooms'],
        queryFn: () => getRestaurants()
    }, queryClient)

    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
        // Здесь можно выполнить действия по поиску, например, сделать запрос на сервер
    };


    return (
        <>
            <header>
                <Logo/>
                <Avatar/>
            </header>
            <main>
                <SearchLine onSearch={handleSearch}/>
                <section>
                    {queryRooms.isPending && <Loader/>}
                    {queryRooms.isError && <span>Error..</span>}
                    {queryRooms.data && queryRooms.data.map(room => <Card
                       key={nanoid()} pic={room.url} name={room.name}
                        country={room.description} rating={room.raiting}/>
                    )}
                </section>
            </main>
            <footer>
                <p>Privacy Policy</p>
                <p className="corporation">2022 Eats</p>
                <p>Terms Of Service</p>
            </footer>
        </>
    )
}

export default App
