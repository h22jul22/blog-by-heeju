import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className='mx-4 flex h-16 items-center'>
      <Link href='/' className='flex items-center'>
        <span className='font-moveSans text-xl'>Hottest</span>
        <Image
          src='/icons/king.svg'
          width={26}
          height={26}
          alt='왕관 아이콘'
          title='왕관 아이콘 (제작자: Rahul Kaklotar - Flaticon)'
        />
      </Link>
      <div className='flex-grow'></div>
    </div>
  );
}
