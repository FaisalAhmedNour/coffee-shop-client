import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const {name, chef, supplier, taste, category, details, photo, _id} = useLoaderData();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffee = { name, chef, supplier, taste, category, details, photo }

        // console.log(coffee)

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }


    return (
        <div className="w-8/12 mx-auto text-center bg-[#F4F3F0] px-20 py-10">
            <h1 className="font-bold text-3xl my-5 pt-5">Update Existing Coffee Details</h1>
            <p className="text-base">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-control w-full grid grid-cols-2 mt-12">
                    <div className="mx-5 my-4">
                        <label className="label">
                            <span className="font-semibold">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full" />
                    </div>
                    <div className="mx-5 my-4">
                        <label className="label">
                            <span className="font-semibold">Chef</span>
                        </label>
                        <input type="text" name="chef" defaultValue={chef} placeholder="Enter chef name" className="input input-bordered w-full" />
                    </div>
                    <div className="mx-5 my-4">
                        <label className="label">
                            <span className="font-semibold">Supplier</span>
                        </label>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter supplier name" className="input input-bordered w-full" />
                    </div>
                    <div className="mx-5 my-4">
                        <label className="label">
                            <span className="font-semibold">Taste</span>
                        </label>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Enter taste" className="input input-bordered w-full" />
                    </div>
                    <div className="mx-5 my-4">
                        <label className="label">
                            <span className="font-semibold">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="Enter category" className="input input-bordered w-full" />
                    </div>
                    <div className="mx-5 my-4">
                        <label className="label">
                            <span className="font-semibold">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Enter details" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="mx-5 my-4">
                    <label className="label">
                        <span className="font-semibold">Photo</span>
                    </label>
                    <input type="text" name="photo" defaultValue={photo} placeholder="Paste photo URL" className="input input-bordered w-full" />
                </div>
                <div className="mx-5 my-4">
                    <input type="submit" value="Update Coffee Details" className="btn w-full" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;