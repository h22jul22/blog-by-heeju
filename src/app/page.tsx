import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='relative min-h-screen w-full'>
        <Image
          src='/imgs/Unsplash의MasaakiKomori.jpg'
          width={0}
          height={0}
          sizes='100vw'
          layout='fill'
          objectFit='cover'
          alt='벗꽃 사진'
          title='Unsplash의 Masaaki Komori'
        />
        <div className='font-SeoulHangang-bold absolute top-0 flex h-full w-full flex-col items-center justify-center gap-2 text-white'>
          <h1 className='text-3xl'>blog by heeju</h1>
          <span className='text-lg'>희주</span>
          <div className='flex gap-3'>
            <Image
              src='/imgs/github-logo.svg'
              width={22}
              height={22}
              alt='github-logo'
              title='고양이 아이콘 제작자: Dave Gandy - Flaticon'
            />

            <Image
              src='/imgs/github-logo.svg'
              width={22}
              height={22}
              alt='github-logo'
              title='고양이 아이콘 제작자: Dave Gandy - Flaticon'
            />
            <Image
              src='/imgs/github-logo.svg'
              width={22}
              height={22}
              alt='github-logo'
              title='고양이 아이콘 제작자: Dave Gandy - Flaticon'
            />
          </div>
        </div>
      </div>
    </>
  );
}
