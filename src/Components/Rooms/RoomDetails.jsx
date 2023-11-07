// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RoomDetail from "./RoomDetail";

const RoomDetails = () => {
    // const [detail, setDetail] = useState({});

    // const {id} = useParams();
    

    const details = useLoaderData();
   

    // useEffect(() => {
    //     const idInt = parseInt(id)
    //     const findDetails = details.find(item => item.id === idInt  );
        
    //     setDetail(findDetails)
    // }, [details,id])
  return (
    <div> 
        <RoomDetail details={details}></RoomDetail>
    </div>
  )
}

export default RoomDetails