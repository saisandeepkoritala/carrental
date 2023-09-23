import { useEffect, useState,useRef} from "react";
import { GoChevronDown, GoChevronRight} from "react-icons/go";

const Selection=({sel_options})=>{
    const [isSelect,SetisSelect]=useState(false);
    const [ShowContent,SetShowContent]=useState("");
    const [isHide,SetisHide]=useState(false);

    const divEl=useRef();

    useEffect(()=>{
        const handler=(e)=>{
            if(!divEl.current.contains(e.target)){
                SetisHide(false);
            }
        }
        document.addEventListener("click",handler);
        return ()=>{
            document.removeEventListener("click",handler);
        }
    },[])

    const handleClick=(label)=>{
        SetShowContent(label);
        SetisHide(!isHide);
    }

    const handleSelection=()=>{
        SetisSelect(!isSelect);
        SetisHide(!isHide); 
    }
    const renderedarray=sel_options.map((item)=>{
        return(
            <div key={item.id} className="gap">
                        <div key={item.id} className="outer3">
                            <div onClick={()=>handleClick(item.label)} className="outer4">
                                {item.label}
                            </div>
                        </div>
            </div>
        )
    })
    return(
        <div ref={divEl} className="main">
            <div className="outer2" onClick={handleSelection}>
                {ShowContent ? ShowContent:<p>Select car type</p>}
                {ShowContent ? <GoChevronRight/>:<GoChevronDown/>}
            </div>
            <>
                {isHide && renderedarray}
            </>
        </div>
    )
}

export default Selection;