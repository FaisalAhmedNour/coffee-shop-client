import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = (props) => {

    // console.log(coffee)
    const { name, photo, chef, category, _id } = props.coffee;
    // console.log(photo)

    const handleDelete = id => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }

    return (
        <div className="card card-side bg-base-100 shadow-xl bg-[#F5F4F1] py-3 grid grid-cols-4">
            <figure><img className="w-11/12" src={photo} /></figure>
            <div className="my-auto col-span-2">
                <p className="text-md"><span className='font-semibold'>Name:</span> {name}</p>
                <p className="text-md my-4"><span className='font-semibold'>Chef: </span>{chef}</p>
                <p className="text-md"><span className='font-semibold'>Category:</span> {category}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <Link to={`/coffee-details/${_id}`} className="btn btn-xs mr-3 btn-success">View</Link>
                <Link to={`/update-coffee/${_id}`} className="btn btn-xs mr-3">Edit</Link>
                <Link onClick={() => handleDelete(_id)} className="btn btn-xs mr-3 btn-error">Delete</Link>
            </div>
        </div>
    );
};

export default CoffeeCard;