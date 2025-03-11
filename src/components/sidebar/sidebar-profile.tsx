import Image from 'next/image';

export default function SidebarProfile() {
  return (
    <>
      <Image src='/imgs/main-profile-image.jpeg' width={102} height={102} alt='프로필 사진' className='rounded-full' />
      <h1 className='text-3xl'>blog by heeju</h1>
    </>
  );
}
