const Table = () => {
  return (
   <table className="w-full">
    <thead className="bg-primary text-slate-200 tracking-wide">
      <tr>
        <th className="font-medium py-2">No</th>
        <th className="font-medium py-2">Customer</th>
        <th className="font-medium py-2">Email</th>
        <th className="font-medium py-2">Car</th>
        <th className="font-medium py-2">Loan Term/day</th>
        <th className="font-medium py-2">Total Price</th>
        <th className="font-medium py-2">Status</th>
        <th className="font-medium py-2"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="font-normal border-[1px] border-t-0 border-black py-1">1</th>
        <th className="font-normal border-[1px] border-t-0 border-black">Test1</th>
        <th className="font-normal border-[1px] border-t-0 border-black">test1@mail.com</th>
        <th className="font-normal border-[1px] border-t-0 border-black">Innova</th>
        <th className="font-normal border-[1px] border-t-0 border-black">3</th>
        <th className="font-normal border-[1px] border-t-0 border-black">1.200.000</th>
        <th className="font-normal border-[1px] border-t-0 border-black">Complete</th>
        <th className="font-normal border-[1px] border-t-0 border-black">
          <button className="py-[2px] px-4 bg-black text-white hover:brightness-125 mr-2 rounded-sm">Edit</button>
          <button className="py-[2px] px-4 bg-primary text-white hover:brightness-90 rounded-sm">Detail</button>
        </th>
      </tr>
      <tr>
        <th className="font-normal border-[1px] border-t-0 border-black py-1">1</th>
        <th className="font-normal border-[1px] border-t-0 border-black">Test1</th>
        <th className="font-normal border-[1px] border-t-0 border-black">test1@mail.com</th>
        <th className="font-normal border-[1px] border-t-0 border-black">Innova</th>
        <th className="font-normal border-[1px] border-t-0 border-black">3</th>
        <th className="font-normal border-[1px] border-t-0 border-black">1.200.000</th>
        <th className="font-normal border-[1px] border-t-0 border-black">Complete</th>
        <th className="font-normal border-[1px] border-t-0 border-black">
          <button className="py-[2px] px-4 bg-black text-white hover:brightness-125 mr-2 rounded-sm">Edit</button>
          <button className="py-[2px] px-4 bg-primary text-white hover:brightness-90 rounded-sm">Detail</button>
        </th>
      </tr>
      <tr>
        <th className="font-normal border-[1px] border-t-0 border-black py-1">1</th>
        <th className="font-normal border-[1px] border-t-0 border-black">Test1</th>
        <th className="font-normal border-[1px] border-t-0 border-black">test1@mail.com</th>
        <th className="font-normal border-[1px] border-t-0 border-black">Innova</th>
        <th className="font-normal border-[1px] border-t-0 border-black">3</th>
        <th className="font-normal border-[1px] border-t-0 border-black">1.200.000</th>
        <th className="font-normal border-[1px] border-t-0 border-black">Complete</th>
        <th className="font-normal border-[1px] border-t-0 border-black">
          <button className="py-[2px] px-4 bg-black text-white hover:brightness-125 mr-2 rounded-sm">Edit</button>
          <button className="py-[2px] px-4 bg-primary text-white hover:brightness-90 rounded-sm">Detail</button>
        </th>
      </tr>
    </tbody>
   </table>
  )
}

export default Table;