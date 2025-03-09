import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className='mx-4 flex h-16 items-center'>
      <Link href='/'>
        <Image src='/icons/justory.jpeg' width={86} height={34} alt='justory 로고' />
      </Link>
      <div className='flex-grow'></div>
    </div>
  );
}
