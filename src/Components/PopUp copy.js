
import React, { useState } from "react";

let PopUp = () => {
    /* let [state, setState] */
    let [popup, setPopup] = useState(false);

    let handlePopUp = () => {
        setPopup(true);
    }
    let closePopUP = () => {
        setPopup(false);
    }

    return (
        <>
            <div className="absolute top-0">
                <button onClick={handlePopUp}
                    className="text-center mx-[100px] my-3 bg-[#6A5B40] rounded-[160px] text-white h-[36px] w-[180px]" type="submit">
                    Submit</button>
                {
                    popup ?
                    <div className="flex justify-between w-[280px] h-[200px] bg-slate-500">
                        <span className="p-2">Thank you</span>
                        <span className="p-2" onClick={closePopUP}>X</span>
                    </div> : " "
                }
            </div>
        </>
    )
}

export default PopUp;