/* eslint-disable react/prop-types */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { Modal } from 'flowbite-react';
import UpdateModal from "./UpdateModal";

const Table = () => {
  const [openModal, setOpenModal] = useState(null);
  const props = { openModal, setOpenModal };
  const {token} = useContext(UserContext)
  const [transactions, setTransactions] = useState();
  const [detailTransaction, setDetailTransaction] = useState();
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [transactionIdForUpdate, setTransactionIdForUpdate] = useState();
  const [currentStatusForUpdate, setCurrentStatusForUpdate] = useState();

  useEffect(() => {
    getTransactions()
  }, [openUpdateModal]);

  const getTransactions = async () => {
    const data = await axios.get("http://localhost:3003/api/transactions", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setTransactions(data.data.data)
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.get(`http://localhost:3003/api/transactions/${e.target.value}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setTransactionIdForUpdate(e.target.value);
    setCurrentStatusForUpdate(data.data.data[0].status)
    setOpenUpdateModal(true);
  }

  const handleDetail = async (e) => {
    e.preventDefault();

    const data = await axios.get(`http://localhost:3003/api/transactions/${e.target.value}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setDetailTransaction(data.data.data);
    props.setOpenModal('default');
  }


  return (
  <div className="">
    <table className="w-full">
    <thead className="bg-primary text-slate-200 tracking-wide">
      <tr>
        <th className="font-medium border-[1px] border-l-0 border-slate-50 py-2">No</th>
        <th className="font-medium border-[1px] border-slate-50 py-2">Customer</th>
        <th className="font-medium border-[1px] border-slate-50 py-2">Email</th>
        <th className="font-medium border-[1px] border-slate-50 py-2">Car</th>
        <th className="font-medium border-[1px] border-slate-50 py-2">Total Price</th>
        <th className="font-medium border-[1px] border-slate-50 py-2">Status</th>
        <th className="font-medium border-[1px] border-r-0 border-slate-50 py-2"></th>
      </tr>
    </thead>
    <tbody>
      {transactions?.map((item, index) => (
        <tr key={index}>
          <th className="font-normal border-[1px] border-t-0 border-black py-1">{index+1}</th>
          <th className="font-normal border-[1px] border-t-0 border-black">{item.customer}</th>
          <th className="font-normal border-[1px] border-t-0 border-black">{item.email}</th>
          <th className="font-normal border-[1px] border-t-0 border-black">{item.car_name}</th>
          <th className="font-normal border-[1px] border-t-0 border-black">{item.price}</th>
          <th className="font-normal border-[1px] border-t-0 border-black">{item.status}</th>
          <th className="font-normal border-[1px] border-t-0 border-black">
            <button onClick={handleUpdate} value={item.id_transaction} className="py-[2px] px-4 bg-black text-white hover:brightness-125 mr-2 rounded-sm">Update</button>
            <button onClick={handleDetail} value={item.id_transaction} className="py-[2px] px-4 bg-primary text-white hover:brightness-90 rounded-sm">Detail</button>
          </th>
        </tr>
      ))}
    </tbody>
    </table>

    {/*Modal Detail Transaction*/}
    <Modal className='h-full' show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header className='h-16 bg-primary text-white'>DETAIL TRANSACTION</Modal.Header>
        <Modal.Body className='bg-white'>
          {
            detailTransaction?.map((item, index) => (
              <div key={index}>
                <div className="space-y-2 mb-4">
                  <h2 className='text-lg font-semibold'>Renter</h2>
                  <ul className='text-grey-text flex flex-col gap-2'>
                    <li className='flex items-center gap-4'>
                      <p className="w-16 text-black">Name</p>
                      <span>: {item.customer}</span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <p className="w-16 text-black">Email</p>
                      <span>: {item.email}</span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <p className="w-16 text-black">Phone</p>
                      <span>: {item.no_hp}</span>
                    </li>
                  </ul>
                </div>

                <hr />

                <div className="mt-2 flex gap-20">
                  <ul className='text-grey-text flex flex-col gap-2'>
                      <li className='flex items-center gap-4'>
                        <p className="w-36 text-black">Transaction ID</p>
                        <span>: {item.id_transaction}</span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <p className="w-36 text-black">Car</p>
                        <span>: {item.car_name} {item.car_type}</span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <p className="w-36 text-black">Pick-up Location</p>
                        <span>: {item.pickup_location}</span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <p className="w-36 text-black">Pick-off Location</p>
                        <span>: {item.pickoff_location}</span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <p className="w-36 text-black">Pick-up Schedule</p>
                        <span>: {item.pickup_date} {item.pickup_time}</span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <p className="w-36 text-black">Pick-off Schedule</p>
                        <span>: {item.pickoff_date} {item.pickoff_time}</span>
                      </li>
                  </ul>

                  <ul className='text-grey-text flex flex-col gap-4'>
                      <li className='flex flex-col'>
                        <p className="w-36 text-black">Price</p>
                        <span>{item.price}/day</span>
                      </li>
                      <li className='flex flex-col'>
                        <p className="w-36 text-black">Status</p>
                        <span>{item.status}</span>
                      </li>
                  </ul>

                </div>
              </div>
            ))
          }
        </Modal.Body>
    </Modal>

    {/*Modal Update Status Transaction*/}
    {openUpdateModal ? <UpdateModal setOpenUpdateModal={setOpenUpdateModal} id={transactionIdForUpdate} status={currentStatusForUpdate} /> : null}
  </div>
  )
}

export default Table;