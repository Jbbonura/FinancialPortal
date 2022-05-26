import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import {AiOutlineHome} from "react-icons/ai"
import {RiDoorOpenLine} from "react-icons/ri"
import {BsBank} from "react-icons/bs"    

const Dashboard = () => {

    return (
        <div className="dash-content">
            <div className="dashBox">
                <p className="dash-text">Create Household</p>
                <AiOutlineHome size={56} color="white" />
            </div>
            <div className="dashBox">
                <p className="dash-text">Join Household</p>
                <RiDoorOpenLine size={56} color="white" />
            </div>
            <div className="dashBox">
                <p className="dash-text">Add Bank Account</p>
                <BsBank size={56} color="white" />
            </div>
        </div>
    )
}

export default Dashboard