import { BsCurrencyDollar } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";

const Cards = ({ data }) => {
    const { img, name, price, details, credit } = data
    console.log(data);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-3">
                            <BsCurrencyDollar></BsCurrencyDollar>
                            <span>  Price: {price}</span>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <BiBookOpen></BiBookOpen>
                            <span>  Credit :{credit}hr</span>
                        </div>
                    </div>


                    <div className="card-actions justify-center">
                        <button className="btn btn-primary w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;