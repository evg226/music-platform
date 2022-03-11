import React, {useRef} from 'react';

interface FileUploadProps{
    setFile:Function;
    accept:string
}

const FileUpload: React.FC<FileUploadProps> = ({setFile,accept,children}) => {
    const refInput=useRef<HTMLInputElement>();
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFile(e.target.files[0]);
    }
    return (
        <div style={{textAlign:"center"}} onClick={()=>refInput.current?.click()}>
            <input
                type={"file"}
                accept={accept}
                hidden
                ref={refInput}
                onChange={onChange}
            />
            {children}
        </div>
    );
};
20
export default FileUpload;