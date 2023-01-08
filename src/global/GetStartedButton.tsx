import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const GetStartedButton: React.FC<{}> = () => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate('/recipefinder')
    }

    return <div className="group flex justify-center">
        <div>
            <button onClick={redirect} className="font-bold font-Inter bg-[#0ACF83] hover:bg-[#0CAF70] hover:scale-105 transition-all px-10 py-1.5 rounded-full text-white mx-auto shadow-md">
                Get started
            </button>
        </div>
    </div>
};

export default GetStartedButton;
