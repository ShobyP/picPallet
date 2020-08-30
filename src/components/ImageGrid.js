import React from "react";
import useFireStore from "../hooks/useFireStore";
import {motion} from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFireStore('images');
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap"
                     key={doc.id}
                     layout
                     whileHover={{opacity: 1}}
                     onClick={() => setSelectedImg(doc)}
                >
                    <motion.img src={doc.url} alt="alter pic"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{delay: 0.5}}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default ImageGrid;