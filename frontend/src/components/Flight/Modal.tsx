import React, { useState } from "react";
import { ButtonBox } from "./styles";
type Props = {
  closeModal: any
}

const NewAreaModal = ({ closeModal }:Props) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
}
  return(
<div className="modalBackground">
  <div className="modalContainer">
    <button onClick={() => closeModal(false)}> X </button>
    <h1>Are you sure you want to continue?</h1>
    <div className="body">
      <p>The next page is modal</p>
      <div className="footer">
        <button onClick={()=> closeModal(false)}>Cancel</button>
        <button>Continue</button>
      </div>
    </div>
  </div>
</div>  )
}
export default NewAreaModal