import axios from "axios";
import Swal from 'sweetalert2';
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";

// eslint-disable-next-line react/prop-types
function UpdateModal({ id, status, setOpenUpdateModal }) {
  const [updateStatus, setUpdateStatus] = useState();
  const {token} = useContext(UserContext);

  const handleOnChange = (e) => {
    e.preventDefault();

    setUpdateStatus(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3003/api/transactions/update/${id}`, {
        status: updateStatus
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setOpenUpdateModal(false);

      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: `${res.data.message}`,
          confirmButtonColor: '#C05F31',
        });
      }, 200);
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
  return (
    <div className="absolute z-10 h-screen w-screen left-0 top-0">
      <div className="absolute h-screen w-screen bg-slate-800 opacity-80 left-0 top-0">
      </div>
        <div className="absolute z-20 h-screen w-screen flex justify-center items-center">
          <form onSubmit={handleSubmit} className="bg-primary w-[500px]" action="">
            <div className="flex items-center justify-between py-4 ml-4 rounded-tl rounded-tr text-white text-xl font-medium">
              <h2>
                UPDATE STATUS TRANSACTION
              </h2>
              <span onClick={() => {setOpenUpdateModal(false)}} className="mr-4 text-lg font-normal text-slate-800 hover:bg-slate-800 hover:text-white px-2 rounded cursor-pointer">X
              </span>
            </div>
            <div className="bg-white flex flex-col items-center justify-center py-6 gap-4">
              <div className="flex">
                <p className="text-lg font-semibold w-40">Transaction ID</p>
                <p className="">: {id}</p>
              </div>
              <div className="flex">
                <p className="text-lg font-semibold w-40">Current Status</p>
                <p>: {status}</p>
              </div>
              <select onChange={handleOnChange} className="border border-slate-700 w-96 h-10 rounded cursor-pointer indent-2">
                {
                  status === "Complete" ? (
                    <option value="Already Completed">Already Completed</option>
                  ) : status === "Pick-up" ? (
                    <>
                      <option hidden value="">Select Update</option>
                      <option value="Complete">Complete</option>
                    </>
                  ) : status === "Paid" ? (
                    <>
                      <option hidden value="">Select Update</option>
                      <option value="Pick-up">PickUp</option>
                      <option value="Complete">Complete</option>
                    </>
                  ) : status === "Pending" ? (
                    <>
                      <option hidden value="">Select Update</option>
                      <option value="Paid">Paid</option>
                      <option value="Pick-up">PickUp</option>
                      <option value="Complete">Complete</option>
                    </>
                  ) : ""
                }
              </select>

              <span className="w-full h-[1px] bg-slate-500 mt-4"></span>
              <button type="submit" className="bg-primary text-white px-6 py-1 rounded hover:brightness-90">Save</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default UpdateModal;