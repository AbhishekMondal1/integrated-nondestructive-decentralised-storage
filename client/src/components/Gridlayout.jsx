import React from "react";
import { convertBytes } from "./helpers";
import moment from "moment";
import './Gridlayout.css';
const Gridlayout = (props) => {
  return (
    <>
      <div className="files-container">
        <div className="files-grid">
          {props.files.map((file, key) => {
            return (
              <div className="files-card" key={key}>
                <div className="files-preview">
                  <a href={"https://ipfs.infura.io/ipfs/" + file.fileHash}>
                    {
                        file.fileType == "image/gif" ? (
                        <img src={"https://ipfs.infura.io/ipfs/" + file.fileHash}/>
                        ) : file.fileType == "image/png" ? (
                          <img src={"https://ipfs.infura.io/ipfs/" + file.fileHash}/>
                        ) : file.fileType == "image/jpeg" ? (
                            <img src={"https://ipfs.infura.io/ipfs/" + file.fileHash}/>
                        ) : file.fileType == "image/jpg" ? (
                              <img src={"https://ipfs.infura.io/ipfs/" + file.fileHash}/>
                        ) : file.fileType == "video/mp4" ? (
                                <img src={"https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"}/>
                        ) : file.fileType == "audio/mpeg" ? (
                          <i class="bx bx-equalizer"></i>
                                ) : (
                                    <i class='bx bxs-file-txt'></i>
                          //"https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                             //       <img src={"https://png.pngtree.com/png-clipart/20200225/original/pngtree-document-icon-in-neon-style-png-image_5272367.jpg"}/>
                        )
                      }
                  </a>
                </div>
                <div className="files-details">
                  <div className="files-name">
                    {file.fileName.substring(0, 20)}...
                  </div>
                  <div className="straightline"></div>
                  <div className="files-size-date">
                    <div className="files-size-details">
                      <div className="files-size">
                        File Size:{" "}
                        <div className="files-size-convert">
                          {convertBytes(file.fileSize)}
                        </div>
                      </div>
                    </div>
                    <div className="file-upload-time">
                      Upload Time:
                      <div className="files-upload-time">
                        {moment.unix(file.uploadTime).format("h:mm:ss A ")}
                      </div>
                      <div className="files-upload-date">
                        {moment.unix(file.uploadTime).format("M/D/Y")}
                      </div>
                    </div>
                  </div>
                  <div className="files-no">
                    <span className="fileno">{file.fileId} </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gridlayout;
