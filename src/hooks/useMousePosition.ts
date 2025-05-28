import { useEffect,useState} from "react";

const useMousePosition=()=>{
    const [mousepos,setMousepos]=useState({
        x:0,
        y:0
    });
    let mouseHandle=(event:MouseEvent)=>{
        setMousepos({
            x:event.x,
            y:event.y
        })
    };
    useEffect(()=>{
        window.addEventListener('mousemove',mouseHandle);
        return ()=>{
            window.removeEventListener('mousemove',mouseHandle);
        }
    },[]);
    return mousepos;
}

export default useMousePosition;