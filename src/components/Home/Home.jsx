import { useEffect } from "react";
import { useState } from "react";
import "./Home.css"
import Cards from "./Cards";
import Cart from "./Cart";

const Home = () => {

    const [allData, setAllData] = useState([]);

    const [allSelected, setAllSelected] = useState([]);


    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    const handleSelectButton = data => {
        const newSelected = ([...allSelected, data])
        setAllSelected(newSelected)
    }

    return (
        <div className="m-10 flex">
            <div className="home">
                {
                    allData.map((data) => <Cards
                        key={data.id}
                        handleSelectButton={handleSelectButton}
                        data={data}></Cards>)
                }
            </div>
            <div className="cart-container bg-base-100 shadow-xl">
                <Cart allSelected={allSelected}></Cart>
            </div>
        </div>
    );
};

export default Home;