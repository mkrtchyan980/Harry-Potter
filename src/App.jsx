import { useEffect, useState } from "react";
import "./App.css";
import Error from "./components/Error";
import User from "./components/User";

function App() {
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState("");
    const [search, setSearch] = useState([]);

    const handleInput = (event) => {
        setValue(event.target.value);
        const result = users.filter((item) =>
            item.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearch(result);
    };

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <header>
                <nav>
                    <input
                        type="search"
                        placeholder="Search"
                        value={value}
                        onChange={handleInput}
                    />
                    <button>
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </nav>
            </header>
            <div className="parent">
                {search.length > 0 ? (
                    search.map((user) => {
                        return <User user={user} key={user.id} />;
                    })
                ) : (
                    <Error />
                )}
            </div>
        </div>
    );
}

export default App;
