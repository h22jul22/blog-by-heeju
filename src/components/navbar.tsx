import { MdMenu, MdLightMode, MdOutlineSearch } from 'react-icons/md';

export default function NavBar() {
  const BUTTON_STYLE =
    'h-full cursor-pointer p-3 border-r border-gray-200 hover:bg-linear-to-r from-transparent via-gray-50 to-gray-100';
  return (
    <div className='flex h-[75px] items-center justify-start border-b border-gray-100 bg-white shadow-sm'>
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
