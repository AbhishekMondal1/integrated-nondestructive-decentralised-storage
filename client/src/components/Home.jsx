import React from 'react'
import { NavLink} from 'react-router-dom'
import './Home.css'
import blockapp from './bg4.png'

const Home = () => {
    return (
      <div className="homecontainer">
        <div className="header">
          <div className="app-text">
            <h1>
              INDS <br /> Integrated Nondestructive Decentralised Storage
            </h1>
            <p>
              Secured Privacy concerned Cloud Storage Application. <br />
              No 3rd party company owner can see your data.<br />
              Share files all over the world without any censorship.<br />
              Try it and share it.
            </p>
          </div>
          <NavLink className="startbtn" to="/share">Start Here</NavLink>
          <div className="app-picture">
            {/* <img src={blockapp} alt="" /> */}
          </div>
        </div>
        <div className="widthline">_</div>
        <div className="main_ipfs_about">
          <div className="ipfs_head">ABOUT IPFS</div>
          <div className="ipfs_details">
            <div className="ipfs_details1">
              <i class="bx bx-cloud-upload"></i>
              IPFS is a peer-to-peer distributed <br /> file system that connect
              all <br />
              computing devices with the <br /> same system of files.
            </div>
            <div className="ipfs_details2">
              <i class="bx bx-world"></i>
              Your files are stored on multiple <br /> computers around the
              world so <br />
              your files are completely <br /> decentralized.
            </div>
            <div className="ipfs_details3">
              <i class="bx bxs-key"></i>
              Each file and all of the blocks within <br /> it are given a
              unique fingerprint <br /> called as cryptographic hash.
            </div>
          </div>
        </div>
        <div className="images">
          <img src={blockapp} alt="" />
        </div>
        <div className="features">
          <div className="feature1">
            <h1> Secure </h1> <br /> Every file is encrypted, split into pieces,{" "}
            <br /> and stored on diverse Nodes, making data <br /> breaches a
            thing of the past. <br /> This decentralized approach also <br />{" "}
            protects your data from malicious attacks.
          </div>
          <div className="feature2">
            <h1>Private </h1> <br /> Default encryption is standard on every
            file. <br /> Everything is encrypted before being uploaded—your data{" "}
            <br /> is only in your hands and those you share it with.
          </div>
          <div className="feature3">
            <h1>Available </h1> <br/> Due to our decentralized network of Storage
            Nodes, <br /> your data is multi-region by default, <br /> always
            available when you need it and can scale with your project as it
            grows.
          </div>
        </div>
      </div>
    );
}

export default Home
