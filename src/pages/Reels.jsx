import maintenance from '../images/maintanance.gif'
export const Reels = () => {

  return (
<div className='px-[15px] text-center'>
<img src={maintenance} className='w-full' />
<h1 className=' text-primary_text_clr text-[20px] mb-5'>This page is currently under development.</h1>
        <p className='text-[15px] font-light mb-3'>We appreciate your patience. In the meantime, feel free to explore our other pages.</p>
        <p className='text-[15px] font-light'>If you have any feedback or suggestions, please send them to <a href="mailto:agfrontenddeveloper@gmail.com" className=' text-secondary_clr underline'>agfrontenddeveloper@gmail.com</a>.</p>
</div>

  );
};
