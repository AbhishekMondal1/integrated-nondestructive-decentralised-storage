import React from 'react'
import { convertBytes } from "./helpers";
import moment from "moment";
const Gridview = (props) => {
    return (
      <div>
        <div className="dashboard-card-container">
          <div className="grid">
            {props.files.map((file, key) => {
              return (
                <div className="file-dashboard" key={key}>
                  <div className="file-preview">
                    <img
                      src={
                        file.fileType == "image/gif"
                          ? "https://ipfs.infura.io/ipfs/" + file.fileHash
                          : file.fileType == "image/png"
                          ? "https://ipfs.infura.io/ipfs/" + file.fileHash
                          : file.fileType == "image/jpeg"
                          ? "https://ipfs.infura.io/ipfs/" + file.fileHash
                          : file.fileType == "image/jpg"
                          ? "https://ipfs.infura.io/ipfs/" + file.fileHash
                          : file.fileType == "video/mp4"
                          ? "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                          : file.fileType == "audio/mpeg"
                          ? "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                          : "https://png.pngtree.com/png-clipart/20200225/original/pngtree-document-icon-in-neon-style-png-image_5272367.jpg"
                      }
                    />
                  </div>
                  <div className="file-name">
                    <h5>{file.fileName} </h5>
                  </div>
                  <div className="uploadtime">
                    <span className="time">
                      {moment.unix(file.uploadTime).format("h:mm:ss A M/D/Y")}
                    </span>
                  </div>
                  <div className="file-no">
                    <span className="fileno">{file.fileId} </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default Gridview
