

import food from '../assets/14.png';
export const Landing = () => {
    return <div className="overflow-hidden w-full sm:pt-24 pt-10 md:grid grid-cols-[60%_40%]  sm:px-8  mt-20 px-0 relative" id='home'>
        <div className="sm:grid sm:grid-col-2 md:flex md:mt-4 flex-col p-4 justify-center sm:text-center md:text-left ">
            <h1 className='sm:text-6xl font-bold text-3xl px-4 py-2 animtaion-delay-3'>🍽️ Welcome to Food Company – Where Every Bite Tells a Story</h1>
            <h4 className='px-5 font-bold pb-2'>Deliciously Crafted, Made with Love.</h4>
            <p className='font-md mb-5 text-foreground px-5 '>Savor the taste of fresh ingredients, bold flavors, and unforgettable moments. Whether you’re craving comfort food or exploring gourmet delights, we serve more than just meals</p>
            <div className='sm:flex items-center sm:justify-center  grid grid-cols-1 gap-4 px-5 md:justify-start my-2'>
            <button className='bg-orange-500 text-white font-light text-sm sm:px-12 py-2 rounded-es-full rounded-tr-full flex justify-center  cursor-pointer hover:bg-orange-500/60 transition-colors duration-300'>
                View Menu!
            </button>
            <button className='bg-orange-300/10 text-foreground font-light px-8 py-2 rounded-es-full rounded-tr-full shadow-lg sm:px-14 text-sm cursor-pointer hover:shadow-xl transition-all duration-200 border-1 border-orange-500'>
                Order Now
            </button>
            </div>
            
        </div>
        <div className=""><img src={food} alt="img.jpg" className='object-contain drop-shadow-2xl' /></div>
    </div>
}