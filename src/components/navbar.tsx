import { MdMenu, MdLightMode, MdOutlineSearch } from 'react-icons/md';

export default function NavBar() {
  return (
    <div className='flex h-16 items-center justify-start border-b border-gray-100'>
      <button className='h-full cursor-pointer p-3'>
        <MdMenu size={24} fill='gray' />
      </button>
      <button className='h-full cursor-pointer p-3'>
        <MdLightMode size={24} fill='gray' />
      </button>
      <button className='h-full cursor-pointer p-3'>
        <MdOutlineSearch size={24} fill='gray' />
      </button>
    </div>
  );
}
