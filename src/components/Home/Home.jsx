import { useEffect } from "react";
import { useState } from "react";
import "./Home.css"
import Cards from "./Cards";
import Cart from "./Cart";
import Swal from "sweetalert2";

const Home = () => {

    const [allData, setAllData] = useState([]);

    const [allSelected, setAllSelected] = useState([]);

    const [allTotalCost, setAllTotalCost] = useState();
    const [remaining, setRemaining] = useState(20);


    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    const handleSelectButton = data => {
        const isExit = allSelected.find(item => item.id == data.id);
        let count = data.credit;
        if (isExit) {
            return Swal.fire('already Selected item')
        } else {
            allSelected.forEach(item => {
                count = count + item.credit;

            })

            const remaining = 20 - count;
            setAllTotalCost(count)
            setRemaining(remaining)


            const newSelected = ([...allSelected, data])
            setAllSelected(newSelected)
        }

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
                <Cart allSelected={allSelected} allTotalCost={allTotalCost} remaining={remaining}></Cart>
            </div>
        </div>
    );
};

export default Home;