import React, {useState} from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {

    const [file, setFile ] = useState(null);
    const [error, setError ] = useState(null);

    const changeHandler = (e) => {
        let selectedFile = e.target.files[0];
        const allowedFormats = ['image/jpeg', 'image/png'];
        if (selectedFile && allowedFormats.includes(selectedFile.type)){
            setFile(selectedFile);
            setError('');
        } else {
            setFile(null);
            setError("Please select and image file. (png or jpeg)")
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{error}</div> }
                { file && <div>{file.name}</div> }
                { file && <ProgressBar file={file} setFile={setFile}/> }
            </div>
        </form>

    );
}

export default UploadForm;