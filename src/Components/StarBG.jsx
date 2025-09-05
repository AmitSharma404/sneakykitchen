import { useEffect, useState } from "react"



export const StarBG = () => {

    const [stars,setStars] = useState([]);

    useEffect(() => {
        generateStar();
        function HandleGenerate(){
            generateStar();
        }

        window.addEventListener('resize',HandleGenerate)
        return () => window.removeEventListener("resize",HandleGenerate);
    },[])

    const generateStar = () => {
        const numbeOfStar = (window.innerWidth * window.innerHeight)/10000;
        const newStar = [];

        for(let i = 0;i< numbeOfStar;i++){
            newStar.push({
                id:i,
                size:Math.random() * 2 + 1,
                x:Math.random() * 100,
                y:Math.random() * 100,
                opacity:Math.random(),
            })
        }

        setStars(newStar);
    }

    return (
        <div className="min-h-screen overflow-hidden inset-0 z-0 fixed">
            {stars.map(star => (
                <div className="absolute bg-white/80 rounded-full" style={{
                    width:star.size + 'px',
                    height:star.size + 'px',
                    top:star.x + "%",
                    left:star.y + '%',
                    opacity:star.opacity,
                }}>

                </div>
            ))}
        </div>
    )
}