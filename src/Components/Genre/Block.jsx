import React from 'react'

const Block = ({data,idx,categories,setCategories}) => {

    // const [selected,setSelected] = useState(false);

    const handleClick=(e)=>{
        if(categories.includes(data.id)){
            categories.splice(categories.indexOf(data.id),1);
            setCategories([...categories]);
        }else{
            setCategories([...categories,data.id]);
        }
        // setSelected(!selected);
    }
  return (
    <div data={data} key={idx} style={{height:"33%",width:"28%",margin:"10px",backgroundColor:data.color,borderRadius:"20px",cursor:"pointer", border:`${categories.includes(data.id) ? "4px solid green" : "4px solid white"}`}} onClick={(e)=>handleClick(e)}>
      <div style={{color:"white",margin:"15px 0px 0px 22px", fontFamily:"DM Sans",fontWeight:"700",fontSize:"1.2rem"}} key={data.id}>{data.id}</div>
    {data.image}
    </div>
  )
}

export default Block