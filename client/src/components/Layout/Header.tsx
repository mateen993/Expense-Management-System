import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(e.currentTarget.name);
  };

  return (
    <>  
      <div className='mb-2 fixed w-screen bg-slate-100 border-b-1 p-4 flex justify-between items-center'>
        <div className='flex justify-start items-center'>
          <img className='rounded-[50%]' src='logo.png' width={45} height={45} alt='logo' />
          <p className='p-2 md:block hidden'>Expense Management</p>
        </div>
        <div className='flex justify-start items-center'>
          <button name='login' className='rounded-md duration-200 p-2 m-1 hover:bg-slate-400' onClick={handleClick}>Login</button>
          <button name='signup' onClick={handleClick} className='rounded-md p-2 m-2 font-semibold duration-150 hover:scale-105 bg-yellow-400'>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Header;