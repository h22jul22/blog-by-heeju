import Image from 'next/image';
import Link from 'next/link';

export default function SidebarIcons() {
  const LOGO_UNDERLINE_STYLE = 'cursor-pointer border-b-2 border-white/30 hover:border-white px-3 py-5';
  return (
    <div className='flex items-center'>
      <Link href='https://github.com/h22jul22' className={LOGO_UNDERLINE_STYLE}>
        <Image
          src='/icons/github-logo.svg'
          width={20}
          height={20}
          alt='github-logo'
          title='고양이 아이콘 제작자: Dave Gandy - Flaticon'
        />
      </Link>
      <Link href='https://velog.io/@h22ju/posts' className={LOGO_UNDERLINE_STYLE}>
        <Image src='/icons/velog-logo.svg' width={20} height={20} alt='velog-logo' className='rounded-full' />
      </Link>
      <Link
        href='https://tangible-train-125.notion.site/1078bbf4a17b803a9967fc4986e7b3df'
        className={LOGO_UNDERLINE_STYLE}
      >
        <Image src='/icons/portfolio-icon.svg' width={20} height={20} alt='portfolio-icon' />
      </Link>
    </div>
  );
}
