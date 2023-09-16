import Public from '../layouts/Protected';
import FormBooking from '../feautres/pages/book/FormBooking';

function Book() {
  return (
    <Public>
      <div className='w-[85%] lg:w-[50%] mx-auto py-10'>
        <FormBooking />
      </div>
    </Public>
  )
}

export default Book;