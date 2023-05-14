import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {

    const { name, chef, supplier, taste, category, details, photo, _id } = useLoaderData();

    return (
        <div className="hero mt-20">
            <div className="hero-content flex-col lg:flex-row w-3/4  bg-base-200 py-16">
                <img src={photo} className="w-1/4 rounded-lg shadow-2xl" />
                <div className="w-1/2 ps-8">
                    <h1 className="text-2xl font-bold text-[#32325a]">Niceties</h1>
                    <p><span className="font-semibold">Name: </span>{name}</p>
                    <p><span className="font-semibold">Chef: </span>{chef}</p>
                    <p><span className="font-semibold">Supplier: </span>{supplier}</p>
                    <p><span className="font-semibold">Taste: </span>{taste}</p>
                    <p><span className="font-semibold">Category: </span>{category}</p>
                    <p><span className="font-semibold">Details: </span>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;