import React, { useContext } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { Product } from "./Products";
import api from "../api/api";
import { UserContext } from "../context/UserContextProvider";

type Props = {
  data: Product;
};

function Card(props: Props) {
  const userContext = useContext(UserContext);

  function addToCart(pid: number) {
    api
      .post(
        `/api/products/add-to-cart/${pid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userContext?.token}`,
          },
        },
      )
      .then(res => console.log(res.data));
  }

  return (
    <div className='border border-grey-300 flex flex-col max-h-[500px] bg-white shadow-2xl'>
      <img
        className='object-cover object-top h-2/3'
        src={`http://localhost:3000/uploads/${props.data.image}`}
        alt=''
      />
      <div className='px-3 py-4'>
        <div className='flex justify-between font-medium text-lg'>
          <p>{props.data.title}</p>
        </div>
        <div className='flex justify-between mt-4'>
          <p className='font-bold text-xl'>Rs.{props.data.price}</p>
          <div className='flex items-center bg-black text-white justify-center px-2 py-1'>
            <MdOutlineAdd />
            <button
              onClick={() => {
                addToCart(props.data.id);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
