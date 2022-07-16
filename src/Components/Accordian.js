import React from "react";

const Accordion = ({title}) => {
    return (
        <div className="accordion" >
            <div className="accordionleading">
                <div className="container">
                    <p>{title}</p>
                    <span>x</span>
                </div>
            </div>
            <div className="accordionCantent">
                <div className="container">
                    <p>
                        Loren 1psum dolar sit amet, consectetur adipiscing elit,s
                        eiusnod tempor incididunt ut Labore et dolore magna aliqua
                        ad minin venian, quis nostrud exercitation ullamco laboris
                        aliquip ex ea connodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillun dolore eu fug
                        pariatur. Excepteur sint occaecat.
                        </p>
                </div>
            </div>
        </div >
    )
}
export default Accordion;