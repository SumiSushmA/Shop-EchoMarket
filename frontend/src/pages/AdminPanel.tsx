import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

function AdminPanel() {
  return (
    <>
      <Navigation />
      <div className='flex justify-center gap-6 items-center mt-16'>
        <button className='underline text-2xl font-bold'>
          <Link to='/admin/add-to-cart'>Create Product</Link>
        </button>
        <button className='underline text-2xl font-bold'>
          <Link to='/admin/products'>All Products</Link>
        </button>
      </div>
    </>
  );
}

export default AdminPanel;
