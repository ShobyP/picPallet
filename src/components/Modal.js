import React from "react";
import {motion} from 'framer-motion';
import {deleteDoc} from "../hooks/useStorage";

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }
    const handleDelete = (e) => {
        deleteDoc(selectedImg);
        setSelectedImg(null);
    }

    return (
      <motion.div className="backdrop" onClick={handleClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
      >
          <motion.img src={selectedImg.url} alt="alternate src"
          initial={{y: "-100vh"}}
          animate={{y: "0vh"}}
          />
          <button className="label" onClick={handleDelete} >
              <span>-</span>
          </button>
      </motion.div>
    );
}

export default Modal;