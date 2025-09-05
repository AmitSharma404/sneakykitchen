import { HeartIcon, Menu, SearchIcon, ShoppingBasket, ShoppingCartIcon, X } from "lucide-react";
import { useState } from "react";
import { Themetoggler } from "./Themetoggler";


const items = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#Menu" },
  { name: "Services", href: "#Services" },
  { name: "Contact", href: "#Contact" },
];

export const Navbar = () => {

  const [isMenuopen,setMenuOpen] = useState(false);

  return (
    <div className="fixed h-[70px] bg-transparent w-full flex items-center justify-between sm:px-10 px-6 text-foreground shadow-sm z-50 backdrop-blur-3xl sm:pr-16 pr-6 ">
      <div className="flex justify-between items-center gap-30">
        <div className="flex gap-2 sm:text-3xl font-bold text-xl">
        <h1>The</h1>
        <span className="text-orange-500">Rasoi</span>
        </div>

        {/* mobile version */}

        <div className={`fixed md:hidden flex flex-col inset-0 justify-center items-center bg-background/95 backdrop-blur-md w-full min-h-screen ${isMenuopen ? 
          'opacity-100 pointer-events-auto' 
          : 
          'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col space-y-8 text-xl font-semibold">
            {items.map((item,key) => (
            <a key={key} className="hover:text-orange-500" 
            href={item.href}
            onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          </div>
         
        </div>
        <div className="md:gap-8 hidden md:flex">
            {items.map((item,key)=> 
            <div key={key} className="first:bg-orange-500 first:px-6 flex justify-center items-center first:rounded-es-full py-1 first:rounded-tr-full first:text-white">
            <a href={item.href} className="font-light text-sm">{item.name}</a>
            </div>)}
        </div>
      </div>
    <div className="flex justify-around items-center gap-10">
      <div className="gap-4 lg:flex hidden">
        <SearchIcon className="h-6 w-6 cursor-pointer hover:text-orange-400 transition-colors duration-300 "/>
        <ShoppingCartIcon className="text-orange-400 cursor-pointer "/>
        <HeartIcon className="cursor-pointer hover:text-orange-400 transition-colors duration-300"/>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <button className="bg-orange-500 px-5 sm:px-8 sm:py-1 rounded-se-full rounded-es-full text-white font-semibold text-lg">Search</button>
         <Themetoggler/>
        <button className="cursor-pointer md:hidden z-50 transition-transform duration-300" onClick={() => setMenuOpen(prev => !prev)}>{isMenuopen ? <X/> : <Menu/> }</button>
      </div>
    </div>
    </div>
  );
};
