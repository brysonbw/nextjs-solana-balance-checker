import React, { ChangeEvent, FormEvent, MouseEventHandler, useState } from 'react';


export default function AddressForm (props: { handler: (address: string) => void, clearAddressAndBal: () => void } ) {

    const [values, setValues] = useState({
        address: '',
      });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.handler(values.address)
      };
    
      const handleAddressInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setValues((values) => ({
          ...values,
          address: event.target.value,
        }));
      };

      const clearAddressAndBal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setValues({
            address: ''
        })
        props.clearAddressAndBal() 
    }

      return (
        <div className="mt-5">
          <form onSubmit={onSubmit}>
            <input
              id="public-key"
              className="w-full shadow-sm rounded-md py-2 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed"
              type="text"
              placeholder="Public Address, e.g. 7C4jsPZpht42Tw6MjXWF56Q5RQUocjBBmciEjDa8HRtp"
              
              value={values.address}
              onChange={handleAddressInputChange}
            />
           <div className='flex flex-col md:flex-row'>
           <button  className="my-7 bg-[#242C32] border-2  text-white py-2 px-6 rounded-md  " type="submit" >
              Check SOL Balance
            </button>
            <button  type="reset" onClick={(e) => clearAddressAndBal(e)} className="md:my-7 md:ml-2 bg-[#242C32] border-2  text-white py-2 px-6 rounded-md  "  >
              Reset
            </button>
           </div>
           
          </form>
        </div>
      );
}