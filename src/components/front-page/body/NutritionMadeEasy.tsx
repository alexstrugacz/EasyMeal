import React from "react";

const NutritionMadeEasy: React.FC<{}> = () => {
    return <div className="w-full h-full pt-8 bg-white">
        <div className="text-center">
            <h1 className="font-bold font-Inter text-4xl text-[#252B42]">Nutrition Made Easy</h1>
            <h2 className="font-regular font-Inter text-xl mt-4 text-[#374754]">Find super nutritious meals in just <br></br>3 simple steps</h2>
        </div>
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow">
                    <svg className="ml-[17vh] mt-[5vh]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="89" height="88" viewBox="0 0 89 88" fill="none">
                        <g filter="url(#filter0_d_13_54)">
                            <rect x="4.5" width="80" height="80" rx="40" fill="#14FFBC" />
                        </g>
                        <rect x="21.5" y="18" width="45" height="45" fill="url(#pattern0)" />
                        <defs>
                            <filter id="filter0_d_13_54" x="0.5" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_54" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_54" result="shape" />
                            </filter>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_13_54" transform="scale(0.0104167)" />
                            </pattern>
                            <image id="image0_13_54" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5UlEQVR4nO3daYxeUxjA8QdFV1tQIkQtoYSINbUlpCRCSu3ShAoV8QFRSyokU0qEaAiJLZkgQRtSYmkiti/WVglRJZG29qhJUW1lzDvzl8ecD++Hd2bee+859yz3/D72wz09z5l77znnuc95RbIsy7Isy7IsyxIHjAdOAuYDLwEfA98CG4ABYBOwzvz7E8Bc4EDf/+/oAccDvcAWyvkImAdM8d2XqABHAe9jz2/A1cC2vvsWPOAS81hxYSUwzXcfgwfMBL5yNAh9wCm++xg8YAdgoaO7YStwsu8+RgE4DvjGwSDoDGqq7/5FAZgCvOJgEJ6TJgAmAmcAB1W4xjbAvZYHYBA4RFIEbAecB7wB/NPWaV1ALdY5fsnr3gQMWRyERZIShv9SdSq5tovO61x/dtH5uVkR2/KBpALYC3inRBBWAScUbOtBSwPQJykAjgV+rfg8fhyYVOBOW2JhAAYkkT2bP7BDF2DTu2x3MvBzxfY2SsyAvSv+5Xeiu5szx2h3d+AFC22tkVgx/Bh4Fzf6gQtGaPdCs8FmwxKJFXAZbukgnNXW3p7Ai5bbuFFiBIwD1uOePo4OBy4Ffndw/QMkRsD51OdvR9ddKbECzgbeA1rE6yqJHTAVuBZYQVx05jZRUgIcAzzrMKNl0w2SKuBgs0q1uWlmk+5TjZfUMXxH6HsiNLOlKRherM01udgQvCZNBOwBLPcc/HjSkMChwDLgVeBus/yfZuFuuAX419MAnCuRZLLuGiVIXwI9wBEV2pgBfF9z8J+S0AG7FdxcW2GyX+NKJm80EVMHTYNOlpCZ7d3PS3ZwvVmMFRoI4FHc+ws4TEIGTAA+tdDZ1e27l2O0eT/uaZbtHAkd8LTlji/VreNR2tOXeh0WSIN3NTcAszq0dwf1eF5nXRIyk1P90WEQhoAHdGZl2tMpaB20LmCChA64taaAvA7cVlNba3RCIaEDdrTwRUFotD/7SwyAi0jLn8CREgsHyW2f+sf6jCXE4ofNpGEguu1l/Q6TNLSAORIb4DriNwhcITHSz8GBo83U8G3zDI3JkNb/SiqAXYBrLNfmunSzJF4Ut8zc4iGaL01gPgfUgQjJ7dLQoumvfUceWCgNP63kPo+PpcW+YxAEU2r6S83Bf1hipXW5ZmbTa6acszTvW/Ga+1RIXRb1WPB7+qMZ4SWqq8dPTFaqVK4U+wXTnTwZe/B1OtmND4ErdX+oy+v24N5DUQdfmdu36JcN80b7sqGm4N8jicxaNpYMgD7fZ3gK/gJJAXBqxUDoe2JRWy63p4a9neslFbpXYikwy2t44baSKBWKNNvVAi6X1ACfEb5+/SZJUtTlUTE+bQHOlFRZPDjDVc3v6ZKygGt3+3SBKKkzxzKGZp1W3UgTODpToYpVWpAhTQF8QTjeAnaSJgFeJgy9wPbSNMCdngM/aOoA4t7RLAs4zWPwN3UqzGgUc5iSrSO9ivhOv6bw3f8gAI/UHPw3gV199zsYehRXTcfGtMwx8/9vXWfVsmJFrQVOzEEf+S7YGfjBUfCfadz8vsKRwmV/haiTn7S8yXe/oqLV6xYGYas5xGOS7/5EyfwQmhZPl8nX6hHB+/nuQ/SAfQscIbbZ/Cpd2AddxEizUeZ0Q32et6cIV5v9m4uTO9Ix8FVzns1kWZZlWZZlWZZlWZZJkP4DaDXmuT16GyoAAAAASUVORK5CYII=" />
                        </defs>
                    </svg>
                    <a href="/" className="flex flex-wrap no-underline hover:no-underline">
                        <div className="w-full font-bold text-xl text-gray-800 px-6 pt-8">Input your ingredients</div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            If available, use ingredients already in your pantry to generate meals
                        </p>
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <svg className="ml-[17vh] mt-[5vh]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="88" height="88" viewBox="0 0 88 88" fill="none">
                            <g filter="url(#filter0_d_15_65)">
                                <rect x="4" width="80" height="80" rx="40" fill="#14FFBC" />
                            </g>
                            <rect x="21.5" y="18" width="45" height="45" fill="url(#pattern0)" />
                            <defs>
                                <filter id="filter0_d_15_65" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_65" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_65" result="shape" />
                                </filter>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_15_65" transform="scale(0.0104167)" />
                                </pattern>
                                <image id="image0_15_65" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4ElEQVR4nO3avctPYRwG8NtriEFRyEBisLCIwWhhsJksBkqZpQwsVjIYTFYyPKMkk81AKYMkxaIoL+UlefnoKSMWPb/7vs99ff6Bc77f61z9+t3nlBIREREREREREfEX4p8W/MH59+WjJIC6EkBlCaCyBFBZAqgsAVQ28/8vmDOuuZkv/A8BbMQ74/mAzaUFOGk8p0orsBj3jOM+lpSWYAe+mL5v2F1ahHOm70JpFZbjsel6ipWlZdiL76bnJw6UHuCK6blWeoE1eGk63mB96QkOmY6jpUe4qX+3S6+wAW/16xO2lZ7huH6dLr3DItzVn0dYVqYA2/FZP35gX5kSnNWPS2VqsBQPte8FVpcpwp4OjikOlynDZe26UaYOq/Bce95jUxkBDmrPiTISXNeO+depi8pIsA6va28eX7GzjAjHam8f58vIcKfi8p9gRRkZtuBjpVeM+2vP3wScqRDA1dpzt3ZM8WCGy3+FtbXnbgp2/f7oaRaO1J63Sbg4g+Xfqj1n68cUzxZw+fM/9ltrzxkREREREdE0/6n2/XdPAkgAQ5MGJIChSQMSwNCkAQlgaNKABDA0aUACGJo0IAEMTRqQAIYmDUgAQ5MGJIChSQMSwNCkARERERERERERUabhFz7URE1oET69AAAAAElFTkSuQmCC" />
                            </defs>
                        </svg>
                        <div className="w-full font-bold text-xl text-gray-800 px-6 pt-8">Set your nutrition goals</div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Set your goal to lose fat, gain muscle, lose weight, etc
                        </p>
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <svg className="ml-[17vh] mt-[5vh]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="88" height="88" viewBox="0 0 88 88" fill="none">
                            <g filter="url(#filter0_d_15_65)">
                                <rect x="4" width="80" height="80" rx="40" fill="#14FFBC" />
                            </g>
                            <rect x="21.5" y="18" width="45" height="45" fill="url(#pattern0)" />
                            <defs>
                                <filter id="filter0_d_15_65" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_65" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_65" result="shape" />
                                </filter>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_15_65" transform="scale(0.0104167)" />
                                </pattern>
                                <image id="image0_15_65" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4ElEQVR4nO3avctPYRwG8NtriEFRyEBisLCIwWhhsJksBkqZpQwsVjIYTFYyPKMkk81AKYMkxaIoL+UlefnoKSMWPb/7vs99ff6Bc77f61z9+t3nlBIREREREREREfEX4p8W/MH59+WjJIC6EkBlCaCyBFBZAqgsAVQ28/8vmDOuuZkv/A8BbMQ74/mAzaUFOGk8p0orsBj3jOM+lpSWYAe+mL5v2F1ahHOm70JpFZbjsel6ipWlZdiL76bnJw6UHuCK6blWeoE1eGk63mB96QkOmY6jpUe4qX+3S6+wAW/16xO2lZ7huH6dLr3DItzVn0dYVqYA2/FZP35gX5kSnNWPS2VqsBQPte8FVpcpwp4OjikOlynDZe26UaYOq/Bce95jUxkBDmrPiTISXNeO+depi8pIsA6va28eX7GzjAjHam8f58vIcKfi8p9gRRkZtuBjpVeM+2vP3wScqRDA1dpzt3ZM8WCGy3+FtbXnbgp2/f7oaRaO1J63Sbg4g+Xfqj1n68cUzxZw+fM/9ltrzxkREREREdE0/6n2/XdPAkgAQ5MGJIChSQMSwNCkAQlgaNKABDA0aUACGJo0IAEMTRqQAIYmDUgAQ5MGJIChSQMSwNCkARERERERERERUabhFz7URE1oET69AAAAAElFTkSuQmCC" />
                            </defs>
                        </svg>
                        <div className="w-full font-bold text-xl text-gray-800 px-6 pt-8">Find nutritious meals</div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Find super nutritious meals you can make!
                        </p>
                    </a>
                </div>

            </div>


        </div>


    </div>
};

export default NutritionMadeEasy;