export const ToggleButton = ({ ...props }) => {
  return (
    <div className="mb-4">
      <input
        className="mr-2 mt-[0.3rem] h-[18px] w-[40px] appearance-none rounded-[14375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-[40px] before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:h-[16px] after:w-[16px] after:mt-[0.98px] after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-tertiary_clr checked:after:absolute checked:after:z-[2]  checked:after:ml-[2.2rem] checked:after:h-[16px] checked:after:w-[16px] checked:after:rounded-full checked:after:border-none checked:after:bg-tertiary_clr  checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12]  focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[16px] focus:after:w-[16px] focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-tertiary_clr checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100  checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-white dark:checked:bg-tertiary_clr  dark:checked:after:bg-white"
        type="checkbox"
        role="switch"
        
        {...props}
      />
    </div>
  );
};
