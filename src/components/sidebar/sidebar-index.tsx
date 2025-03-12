export default function SidebarIndex() {
  const INDEX_UNDERLINE_STYLE = 'cursor-pointer border-b-2 border-white/30 hover:border-white';
  return (
    <ul className='flex flex-col items-center justify-center gap-4'>
      <li className={INDEX_UNDERLINE_STYLE}>JavaScript</li>
      <li className={INDEX_UNDERLINE_STYLE}>React.js</li>
      <li className={INDEX_UNDERLINE_STYLE}>Next.js</li>
      <li className={INDEX_UNDERLINE_STYLE}>Project</li>
      <li className={INDEX_UNDERLINE_STYLE}>etc</li>
    </ul>
  );
}
