import Image from 'next/image';

export default function SidebarImage({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <Image
      src='/imgs/main-flower-image.jpg'
      width={0}
      height={0}
      sizes='100vw'
      layout='intrinsic'
      alt='벗꽃 사진'
      title='Unsplash의 Masaaki Komori'
      className={`relative min-h-screen object-cover ${isSidebarOpen ? 'w-full' : 'w-[10px]'} transition-all duration-300`}
    />
  );
}
