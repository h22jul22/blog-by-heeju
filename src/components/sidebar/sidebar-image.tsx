import Image from 'next/image';

export default function SidebarImage({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <Image
      src='/imgs/main-flower-image2.jpg'
      width={0}
      height={0}
      sizes={isSidebarOpen ? '100vw' : '10px'}
      layout='fill'
      alt='벗꽃 사진'
      title='Unsplash의Scott Webb'
      className={`h-screen object-cover ${isSidebarOpen ? 'absolute w-full' : 'fixed w-[10px]'} transition-all duration-300`}
    />
  );
}
