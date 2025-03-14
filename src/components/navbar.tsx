import { MdMenu, MdLightMode, MdOutlineSearch } from 'react-icons/md';

export default function NavBar() {
  const BUTTON_STYLE =
    'h-full cursor-pointer p-3 border-r border-gray-200 hover:bg-linear-to-r from-transparent via-gray-100 to-[#ECEEF0]';
  return (
    <div className='flex h-[75px] items-center justify-start border-b border-gray-100 shadow-sm'>
      <button className={BUTTON_STYLE}>
        <MdMenu size={24} fill='#a7a7a7' />
      </button>
      <button className={BUTTON_STYLE}>
        <MdLightMode size={24} fill='#a7a7a7' />
      </button>
      <button className={BUTTON_STYLE}>
        <MdOutlineSearch size={24} fill='#a7a7a7' />
      </button>
    </div>
  );
}
