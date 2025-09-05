
import image from '../assets/chef.jpg'

export const Choice = () => {
    return <div className="min-h-screen text-foreground bg-background overflow-x-hidden z-40 sm:py-20 transition-all duration-300 relative py-10" id='Services'>
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-[40%_60%] mx-10 sm:mx-20 gap-4 z-40 mb-0 my-2">
            <div className='z-40 rounded-xl'><img src={image} alt="" className='rounded-xl drop-shadow-lg' /></div>
            <div className='z-40 text-left flex gap-2 flex-col sm:w-[90%]'>
                <h1 className='md:text-4xl text-2xl sm:text-3xl font-bold py-4 text-center sm:text-left'>Why Choose our <span className='text-orange-500'>Dishes</span>?</h1>
                <div className=' border-[1px] border-gray-600/20 p-2 rounded-xl'>
                    <h2 className='font-semibold text-lg py-1'>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
                    <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis harum recusandae esse soluta laborum quis excepturi tempora porro asperiores ducimus.</p>
                </div>
                <div className='w-full bg-primary/10 p-2 rounded-xl'>
                    <h2 className='font-semibold text-lg py-1'>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
                    <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis harum recusandae esse soluta laborum quis excepturi tempora porro asperiores ducimus.</p>
                </div>
                <div className='w-full border-[1px] border-gray-600/20 p-2 rounded-xl'>
                    <h2 className='font-semibold text-lg py-1'>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
                    <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis harum recusandae esse soluta laborum quis excepturi tempora porro asperiores ducimus.</p>
                </div>
                <div className='w-full bg-primary/10 p-2 rounded-xl'>
                    <h2 className='font-semibold text-lg py-1'>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
                    <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis harum recusandae esse soluta laborum quis excepturi tempora porro asperiores ducimus.</p>
                </div>
                

            </div>
        </div>
        <h1 className='sm:text-3xl text-2xl md:text-5xl font-bold mt-26'>Contact <span className='text-orange-500'>Us</span></h1>
    </div>
}