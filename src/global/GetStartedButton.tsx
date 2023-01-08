import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const GetStartedButton: React.FC<{}> = () => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate('/recipefinder')
    }

    return <div className="group flex justify-center">
        <div>
            <button onClick={redirect} className="bg-[#0ACF83] hover:bg-[#0CAF70] hover:scale-105 transition-all px-16 py-1.5 rounded-full text-white mx-auto">
                Get started
            </button>
        </div>
    </div>
};

export default GetStartedButton;
