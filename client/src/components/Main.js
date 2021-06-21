import React, { useState, useRef } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment';

const Main = (props) => {
  let fileDescription = useRef(null)
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>
                <h2 className="text-white text-monospace bg-dark"><b><ins>Share File</ins></b></h2>    
                <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = fileDescription.value
                    props.uploadFile(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="description..."
                            required />
                      </div>
                    <input type="file" onChange={props.captureFile} className="text-white text-monospace"
                    accept=".jpg, .jpeg, .png, .gif, .ico, .svg, .pdf, .docx, .mp4, .mp3, .mov, .avi, .sql, .txt, .json"/>
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                </form>
              </div>
              <p>&nbsp;</p>
              <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '10px'}}>id</th>
                    <th scope="col" style={{ width: '200px'}}>name</th>
                    <th scope="col" style={{ width: '230px'}}>description</th>
                    <th scope="col" style={{ width: '120px'}}>type</th>
                    <th scope="col" style={{ width: '90px'}}>size</th>
                    <th scope="col" style={{ width: '90px'}}>date</th>
                    <th scope="col" style={{ width: '120px'}}>uploader/view</th>
                    <th scope="col" style={{ width: '120px'}}>hash/view/get</th>
                  </tr>
                </thead>
                {/*<Cardview/>*/}
                { props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
              <div className="dashboard-card-container">
                <div className="grid">

              {props.files.map((file, key) => {
                return (
                  <div className="file-dashboard" key={key}>
                    <div className="file-preview">
                      
                      <img
                        src={ file.fileType == "image/gif" ? ("https://ipfs.infura.io/ipfs/" + file.fileHash) : 
                              file.fileType == "image/png" ? ("https://ipfs.infura.io/ipfs/" + file.fileHash) : 
                              file.fileType == "image/jpeg" ? ("https://ipfs.infura.io/ipfs/" + file.fileHash) : 
                              file.fileType == "image/jpg" ? ("https://ipfs.infura.io/ipfs/" + file.fileHash) : 
                              file.fileType == "video/mp4" ? ("https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80") : 
                              file.fileType == "audio/mpeg" ? ("https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80") : 
                              ("https://png.pngtree.com/png-clipart/20200225/original/pngtree-document-icon-in-neon-style-png-image_5272367.jpg")}
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
          </main>
        </div>
      </div>
    );
  }

export default Main;