import Image from 'next/image';
import Link from 'next/link';

export default function MainIndex() {
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
        <div className='font-SeoulHangang-bold absolute top-0 flex h-full w-full flex-col items-center justify-center gap-8 text-white'>
          <Image
            src='/imgs/heeju.jpg'
            width={102}
            height={102}
            alt='프로필 사진'
            className='rounded-full'
            style={{
              width: '102px',
              height: '102px',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
          <h1 className='text-3xl'>blog by heeju</h1>
          <div className='flex flex-col items-center justify-center gap-4'>
            <span className='text-lg'>JavaScript</span>
            <span className='text-lg'>React.js</span>
            <span className='text-lg'>Next.js</span>
            <span className='text-lg'>Project</span>
            <span className='text-lg'>etc</span>
          </div>
          <div className='flex items-center gap-6'>
            <Link href='https://github.com/h22jul22'>
              <Image
                src='/icons/github-logo.svg'
                width={22}
                height={24}
                alt='github-logo'
                title='고양이 아이콘 제작자: Dave Gandy - Flaticon'
              />
            </Link>
            <Link href='https://velog.io/@h22ju/posts'>
              <Image src='/icons/velog-logo.svg' width={24} height={24} alt='velog-logo' className='rounded-full' />
            </Link>
            <Link href='https://tangible-train-125.notion.site/1078bbf4a17b803a9967fc4986e7b3df'>
              <Image
                src='/icons/portfolio-icon.svg'
                width={22}
                height={22}
                alt='icon-portfolio'
                title='브랜드 및 로고 아이콘 제작자: Freepik - Flaticon'
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
