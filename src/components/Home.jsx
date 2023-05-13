import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {

    const coffees = useLoaderData();
    // console.log(coffees)
    return (
        <div className="w-8/12 mx-auto text-center mb-10">
            <p className=" mt-8 font-medium">--- Sip & Savor ---</p>
            <h1 className="text-center text-4xl font-semibold">Our Popular Products</h1>
            <Link to="/add-coffee"><button className="btn btn-sm btn-[#E3B577] content-center  my-4">Add Coffee</button></Link>
            <div className=" grid grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;