import { HeartIcon } from 'lucide-react';
import food from '../assets/14.png'
import food1 from '../assets/egg.png'


const dishes = [
    {name:"Chicken Nuggest Garlic Butter", img:food,heading:"₹ 119",buy:'buy'},
    {name:"Chilli Prawn Noodle | Kenya ", img:food,heading:"₹ 149",buy:'buy'},
    {name:"Fried Egg and Avocado Toast", img:food1,heading:"₹ 99",buy:'buy'},
    {name:"Match Sweet potato chicken Stir Fry", img:food,heading:"₹ 449",buy:'buy'},
    {name:"Blackend Chicken Salad with Avocado", img:food,heading:"₹ 249",buy:'buy'},
    {name:"Fried Fish with Fresh Salad", img:food,heading:"₹ 319",buy:'buy'},
]

export const Dishes = () => {
  return (
    <div className="min-h-screen overflow-x-hidden z-50 sm:px-10 sm:py-20 px-2 py-10" id='Menu'>
      <div>
        <h1 className="md:text-5xl text-3xl sm:text-4xl font-bold text-foreground z-50">
          Our Popular {}
          <span className="text-orange-500 z-50">Dishes</span>
        </h1><br />
        <p className="font-extralight text-[10px] z-40 mb-6">We recommend to you our most popular dishes <br /> you should try</p>
      </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 rounded-lg'>
            {dishes.map((dish,key)=> 
            <div key={key} className='bg-primary-foreground  shadow-md rounded-xl px-4 py-3 hover:scale-104 transition-all duration-300 hover:shadow-inner-lg z-40'>
                
               <img src={dish.img} alt="img" className='drop-shadow-lg hover:scale-110 transition-transform  duration-300' />
                <p className=' font-extralight text-[10px] my-2'>{dish.name}</p>
                <div className='flex justify-between'>
                <button className='bg-orange-500 text-white font-bold text-sm px-6 py-1 rounded-es-3xl rounded-tr-3xl flex justify-center  cursor-pointer transition-transform duration-300 active:scale-90'>{dish.buy}</button>
                <h3 className='text-right font-bold'>{dish.heading}</h3>
                </div>
            </div> )}
        </div>
    </div>
  );
};
