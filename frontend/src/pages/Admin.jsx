import Table from "../feautres/pages/admin/Table";
import Protected from "../layouts/Protected";

const Admin = () => {
  return (
    <Protected>
      <section className="w-[80%] mx-auto">
        <h1 className="py-4 text-lg">Data Transactions</h1>
        <Table />
      </section>
    </Protected>
  )
}

export default Admin;