import { useEffect } from "react";
import { useState } from "react";
import "./Home.css"
import Cards from "./Cards";

const Home = () => {

    const [allData, setAllData] = useState([]);


    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div className="m-10 flex">
            <div className="home">
                {
                    allData.map((data, idx) => <Cards key={idx} data={data}></Cards>)
                }
            </div>
            <div className="cart-container">
                <h3>this is</h3>
            </div>
        </div>
    );
};

export default Home;