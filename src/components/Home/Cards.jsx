import { BsCurrencyDollar } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";

const Cards = ({ data, handleSelectButton }) => {
    const { img, name, price, details, credit } = data;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="w-full p-4 " src={img} alt="image" /></figure>
                <div className="card-body h-[320px]">
                    <h3 className="card-title">{name}</h3>
                    <p>{details}</p>
                    <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-3">
                            <BsCurrencyDollar></BsCurrencyDollar>
                            <span>  Price : {price}</span>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <BiBookOpen></BiBookOpen>
                            <span>  Credit : {credit}hr</span>
                        </div>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleSelectButton(data)} className="btn btn-primary w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;