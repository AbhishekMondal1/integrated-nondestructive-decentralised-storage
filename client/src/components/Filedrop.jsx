import React, { useRef } from "react";
import fileicon from "./file.svg";
const Filedrop = (props) => {
  console.log(props);
  let fileDescription = useRef(null);
  let fileDrag = useRef(null);
  let fileInputRef = useRef(null);
  const dragoverHandle = (e) => {
    e.preventDefault();
    if (!fileDrag.current.classList.contains("dragged"))
      fileDrag.current.classList.add("dragged");
  };
  const dragleaveHandle = () => {
    fileDrag.current.classList.remove("dragged");
  };
  const browseclickHandle = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="upload-container">
      <h2 className="">
        <b>
          Share File
        </b>
      </h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const description = fileDescription.value;
          props.uploadFile(description);
        }}
      >
        <div
          className="drop-zone"
          ref={fileDrag}
          onDragOver={dragoverHandle}
          onDragLeave={dragleaveHandle}
          onDrop={(e) => {
            e.preventDefault();
            fileDrag.current.classList.remove("dragged");
            props.captureDropFile(e);
          }}
        >
          <div className="icon-container">
            <img
              src={fileicon}
              draggable="false"
              className="center"
              alt="File Icon"
            />
            <img
              src={fileicon}
              draggable="false"
              className="left"
              alt="File Icon"
            />
            <img
              src={fileicon}
              draggable="false"
              className="right"
              alt="File Icon"
            />
          </div>
          <div className="file-name">{props.name} </div>
          <div class="title">
            Drop your Files here or,{" "}
            <span id="browseBtn" onClick={browseclickHandle}>
              browse
            </span>
          </div>
          <div className="form-group">
            <br></br>
          </div>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            onChange={props.captureFile}
            className="text-white text-monospace"
            accept=".jpg, .jpeg, .png, .gif, .ico, .svg, .pdf, .docx, .mp4, .mp3, .mov, .avi, .sql, .txt, .json"
          />
        </div>
            <input
              id="fileDescription"
              type="text"
              ref={(input) => {
                fileDescription = input;
              }}
              className="form-control"
              placeholder="description..."
              required
            />
          <button type="submit" className="btn-primary ">
            <b>Upload!</b>
        </button>
        {props.name ? <button className="btn-primary" type="reset" id="cancleUpload" onClick={
          props.cancleFile}>Cancle</button> : ""}
      </form>
    </div>
  );
};

export default Filedrop;
