import './styles.css'
import {SearchLine} from "./components/SearchLine";
import {Logo} from "./components/Logo";
import {Avatar} from "./components/Avatar";
import {Loader} from "./components/Loader";
import {nanoid} from "nanoid";
import {Card} from "./components/Card";
import {Rooms} from "./components/Rooms";
import {useApp} from "./hooks/useApp.tsx";
import {FC} from "react";


const App: FC = () => {

    const {
        rooms, handleSearch, data
        , isError, isPending,handleRating
    } = useApp()

    return (
        <>
            <header>
                <Logo/>
                <Avatar avatar={undefined}/>
            </header>
            <main>
                <SearchLine onSearch={handleSearch}/>
                <Rooms>
                    {isPending && <Loader/>}
                    {isError && <span>Error..</span>}
                    {data && rooms && rooms.map(room => <Card
                        key={nanoid()} pic={room.url} name={room.name} id={room.id}
                        country={room.description} rating={room.raiting} handleRating={handleRating}/>
                    )}
                </Rooms>
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
