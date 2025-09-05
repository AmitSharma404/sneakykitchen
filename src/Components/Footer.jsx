import { Facebook, Heart, Instagram, Mail, Twitter } from "lucide-react"

const items = [
    {name:"Menu",href:"#Menu"},
    {name:"Contact",href:"#Contact"},
    {name:"Book A Table",href:"#BoolAtable"},
    {name:"Special Dishes",href:"#SpecialDishes"},
]

const Services = [
    {name:'Privacy Policy',href:"#privacy"},
    {name:'Features',href:"#Features"},
    {name:'News & Blogs',href:"#News"},
    {name:'Feedbacks',href:"#feedbacks"},
]

const Contact = [
    {name:"Old Town hill Lucknow UP India",href:"#Address"},
    {name:"Email:Sandy31524@gmail.com",href:"#sandy31524@gmail.com"},
    {name:"Contact:+91 1234567890",href:"#919792288"},
]

const icons = [
    {name:<Facebook/>,href:"#facebook"},
    {name:<Instagram/>,href:"#instagram"},
    {name:<Twitter/>,href:"#"}
]

export const Footer = () => {
    return <footer className=" text-foreground min-h-[350px] overflow-x-hidden bg-primary-foreground z-30 relative py-10 px-10 gap-2 transition-all duration-300" id="Contact">
        <div className="grid md:grid-cols-[30%_70%] grid-cols-1 text-left sm:gap-2 sm:py-4 ">
            <div className="px-4 sm:text-center md:text-left  text-left pb-10">
            <h2 className="sm:text-3xl text-xl font-bold ">The <span className="text-orange-500">Rasoi</span></h2>
            <p className=" text-[12px] text-foreground ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, dolor nesciunt facere harum hic architecto id ipsam illum, esse rerum sapiente!</p>
            </div>
            <div className="grid md:grid-cols-[20%_20%_20%_20%] grid-cols-2 sm:gap-4 text-left md:text-left place-items-center md:place-items-start gap-4 justify-between ">
            <div className="flex flex-col ">
                <p className="font-bold pb-2">Home</p>
                {items.map((item,key)=> (
                    <a href={item.href} key={key}
                    className="font-light text-[14px]">{item.name}</a>
                ))}
            </div>
            <div className="flex flex-col">
                <p className="font-bold pb-2">Services</p>
                {Services.map((Service,key) => (
                    <a href={Service.href} key={key} className="font-light text-[14px]">{Service.name}</a>
                ) )}
            </div>
            <div className="flex flex-col flex-wrap">
                <p className="font-bold pb-2 ">Contact us</p>
                {Contact.map((contact,key)=> (
                    <a href={contact.href} key={key} className="font-light text-[14px]">{contact.name}</a>
                ))}
            </div>
            <div className="  md:flex md:items-center flex-col md:gap-1 sm:justify-center ">
                <p className="text-orange-500 pb-1 font-semibold text-center">Follow Us</p>
                {icons.map((icon,key) => (
                    <a href={icon.href} key={key}  className="text-orange-400 py-2" size={10}>{icon.name}</a>
                ))}
            </div>
            </div>
        </div>
        <div className="py-6 flex items-center justify-center">
            <input type="email" className="bg-gray-200 rounded-tl-sm rounded-s-sm w-[280px] h-[34px] px-3 text-sm outline-0 font-semibold text-black" placeholder="Enter your email"/>
            <button className="bg-orange-400 text-white py-1 px-4 rounded-ee-sm rounded-tr-sm font-semibold cursor-pointer">Email</button>
        </div>
        <div className="flex items-center justify-center mt-4">  
            <p className="font-normal text-sm">copyright {new Date().getFullYear()}  &copy; Food Company  All right reserved. <span className="font-semibold">Made with 💙 by <a href="https://github.com/AmitSharma404" className="text-orange-500">Amit</a></span></p>
        </div>
    </footer>
}