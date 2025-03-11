export default function SidebarIndex() {
  const INDEX_UNDERLINE_STYLE = 'cursor-pointer border-b-2 border-white/30 hover:border-white';
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <span className={INDEX_UNDERLINE_STYLE}>JavaScript</span>
      <span className={INDEX_UNDERLINE_STYLE}>React.js</span>
      <span className={INDEX_UNDERLINE_STYLE}>Next.js</span>
      <span className={INDEX_UNDERLINE_STYLE}>Project</span>
      <span className={INDEX_UNDERLINE_STYLE}>etc</span>
    </div>
  );
}
