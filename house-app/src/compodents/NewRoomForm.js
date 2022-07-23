import react from "react";
import React, {useState} from react

export const NewRoomForm = (props) => {
    const [name, setName] = useState ('');
    const [area, setArea]= useState (undefined);

    const handleAreaInput = (e){
        const init= parseInt (e, trarget, value, 10);
        setArea (int >=0 ? init '');
    }

    const onSumbit = (e)=> {
        e.preventDefault ();
        if (name && area){
            props.addNewRoom ({name, area});
            setName ('');
            setArea ('');
        }
    };
}

return (
    <div>
        <h4> Add New Room</h4>
       <form on Sumbit ={onSumbit}></form>
       <input
       type= 'text'
       placeholder= 'name'
       onChange={(e) => setName(e.target.value)}
    />
    <input
    type = 'text'
    placeholder = "area"
    onChange = {handleAreaInput}
    />
    </div>
)