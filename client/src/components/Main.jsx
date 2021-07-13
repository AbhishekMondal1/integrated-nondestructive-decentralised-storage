import React, { useState, useRef } from 'react';
import Filedrop from './Filedrop';

const Main = (props) => {
    return (
      <div className="container-fluid mt-5 text-center">
            <div className="content">
              <p>&nbsp;</p>
              <Filedrop
                files={props.files}
                captureFile={props.captureFile}
                captureDropFile={props.captureDropFile}
                uploadFile={props.uploadFile}
                name={props.name}
                cancleFile={props.cancleFile}
              />
              <p>&nbsp;</p>
            </div>
        </div>
    );
  }

export default Main;