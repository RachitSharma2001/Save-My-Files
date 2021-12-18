import React from 'react';
import download from './Images/download.png';
import LS from './Images/LS.png';
import mkdir from './Images/mkdir.png';
import Terminal from './Images/Terminal.png';
import upload from './Images/upload.png';
export default function About(props){
    return (
        <div className = "AboutPage">
            <h1>&nbsp;About </h1>
            <p> 
                &nbsp;&nbsp;This is a system where you can upload your local files to the cloud for safe keeping.<br/>
                &nbsp;&nbsp;It also allows for an easy method for 
                organizing those files into their own directories and sub-directories, in much the same way you can organize files on a Linux 
                terminal. <br/>
                &nbsp;&nbsp;When you first log in, you are greeted by a terminal:
            </p>
            &nbsp;&nbsp;<img src={Terminal} height={300} width={800}/><br/><br/>
            <p>&nbsp;&nbsp;If you type ls, you will see that you already have one directory made for you, called home. You are not allowed 
                to add any other files or directories outside the home directory.
            </p>
            &nbsp;&nbsp;<img src={LS} height={100} width={700}/><br/><br/>
            <p>&nbsp;&nbsp;You can start using the <b> makedir </b> command to make directories for organizing your files. For example: </p>
            &nbsp;&nbsp;<img src={mkdir} height={100} width={700}/><br/><br/>
            <p>&nbsp;&nbsp;Inside directories, you can use the <b>upload</b> command to upload local files: </p>
            &nbsp;&nbsp;<img src={upload} height={400} width={900}/><br/>
            <p>&nbsp;&nbsp;And then, any time you need that file again, or if you are on a different device and want to download that 
                file to that device, just download it using the <b>download</b> command: </p> 
            <img src={download} height={500} width={700}/>
        </div>
    )
}