import Image from 'next/image';

export default function SidebarProfile() {
  return (
    <>
      <Image
        src='/imgs/main-profile-image.jpeg'
        width={102}
        height={102}
        alt='프로필 사진'
        className='rounded-full hover:cursor-pointer'
      />
      <h1 className='text-3xl hover:cursor-pointer'>blog by heeju</h1>
    </>
  );
}
