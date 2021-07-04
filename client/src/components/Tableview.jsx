import React from 'react';
import { convertBytes } from "./helpers";
import moment from "moment";
const Tableview = (props) => {
    return (
      <div>
        <table
          className="table-sm table-bordered text-monospace"
          //style={{ width: "1000px", maxHeight: "450px" }}
        ><thead >
        <tr >
          <th>
            id
          </th>
          <th>
            name
          </th>
          <th>
            description
          </th>
          <th>
            type
          </th>
          <th>
            size
          </th>
          <th>
            date
          </th>
          <th>
            uploader/view
          </th>
          <th>
            hash/view/get
          </th>
        </tr>
      </thead>

          {/*<Cardview/>*/}
          {props.files.map((file, key) => {
            return (
              <thead style={{ fontSize: "13px" }}  key={key}>
                <tr>
                  <td>{file.fileId}</td>
                  <td>{file.fileName}</td>
                  <td>{file.fileDescription}</td>
                  <td>{file.fileType}</td>
                  <td>{convertBytes(file.fileSize)}</td>
                  <td>
                    {moment.unix(file.uploadTime).format("h:mm:ss A M/D/Y")}
                  </td>
                  <td>
                    <a
                      href={"https://etherscan.io/address/" + file.uploader}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {file.uploader.substring(0, 10)}...
                    </a>
                  </td>
                  <td>
                    <a
                      href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {file.fileHash.substring(0, 10)}...
                    </a>
                  </td>
                </tr>
              </thead>
            );
          })}
        </table>
      </div>
    );
}

export default Tableview;
