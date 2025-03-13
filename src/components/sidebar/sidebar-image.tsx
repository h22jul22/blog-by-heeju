import Image from 'next/image';

export default function SidebarImage() {
  return (
    <Image
      src='/imgs/main-flower-image.jpg'
      width={0}
      height={0}
      sizes='100vw'
      layout='fill'
      objectFit='cover'
      alt='벗꽃 사진'
      title='Unsplash의 Masaaki Komori'
    />
  );
}
