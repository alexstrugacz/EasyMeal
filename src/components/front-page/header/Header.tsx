import React, { useState, useEffect } from "react";
import GetStartedButton from "../../../global/GetStartedButton";
import { TypeAnimation } from "react-type-animation";
const headers = require("./assets/headers.jpg");
const overlay = require("./assets/overlay.png");

const Header: React.FC<{}> = () => {

    return (
        <div className={"relative"}>
            <img
                style={{
                    backgroundSize: "fill",

                }}
                src={overlay}
                className={"absolute top-0 w-screen left-0 h-[754px] z-99"}
            />
            <section
                style={{
                    backgroundImage: `url(${headers})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-full h-[754px]"
            >
                <h1 className="font-Raleway text-7xl font-bold text-center text-[#0ACF83] leading-none tracking-tight order-2 w-381px h-92px pt-[200px] drop-shadow-lg">
                    EasyMeal
                </h1>
                <p className="font-Raleway text-2xl text-white leading-normal text-center order-3 w-987px h-112px pt-4 pb-6">
                    Instantly find
                    <span className="text-decoration-line: underline font-bold">
                        <TypeAnimation
                            sequence={[
                                "low-fat",
                                4000,
                                "high-protein",
                                4000,
                                "low-sugar",
                                4000,
                                "nutritious",
                                4000,
                                "low-carb",
                                4000,
                                "healthy",
                                4000,
                                () => {
                                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                                },
                            ]}
                            wrapper="span"
                            style={{ marginLeft: "8px" }}
                            cursor={true}
                            repeat={Infinity}
                        />
                    </span>
                    meals
                    <br /> using what’s already in your kitchen
                </p>


                <GetStartedButton />
            </section>
        </div>
    );
};

export default Header;
