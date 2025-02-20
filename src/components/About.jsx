const about = () => {
    return (
        <div className="flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12 outer-html">
            <div className="flex justify-center items-center 3xl:max-w-[1280px] w-full outer1-html">
                <div className="relative opacity-100 flex justify-center items-center w-full flex-col border-2 border-sky-500 py-16 xs:px-8 px-0 3xl:max-w-[1000px] max-w-[900px] 3xl:min-h-[600px]">
                    <div className="absolute left-[-15px] top-[-15px] bg-[#0D1117FF] w-[25px] h-[25px] border-2 border-sky-500"></div>
                    <div className="absolute top-[-15px] right-[-15px] bg-[#0D1117FF] w-[25px] h-[25px] border-2 border-sky-500"></div>
                    <div className="absolute bottom-[-15px] right-[-15px] bg-[#0D1117FF] w-[25px] h-[25px] border-2 border-sky-500"></div>
                    <div className="absolute bottom-[-15px] left-[-15px] bg-[#0D1117FF] w-[25px] h-[25px] border-2 border-sky-500"></div>
                    <div className="absolute bottom-[50%] left-[-15px] bg-[#0D1117FF] w-[25px] h-[25px] border-2 border-sky-500"></div>
                    <div className="absolute bottom-[50%] right-[-15px] bg-[#0D1117FF] w-[25px] h-[25px] border-2 border-sky-500"></div>
                    <div className="absolute bottom-[-15px] left-[50%] bg-[#0D1117FF] w-[25px] h-[25px] border-2 border-sky-500"></div>
                    <div className="absolute top-[-15px] left-[50%] bg-[#0D1117FF] w-[25px] h-[25px] border-2 border-sky-500"></div>
                    <div className="flex justify-center items-center text-center mb-5">
                        <p className="flex align-center font-poppins font-medium text-[14px] leading-[20px] uppercase tracking-[2px] orange_text-gradient">
                            <span className="orange_text-gradient mr-2">About Axiom</span>
                        </p>
                    </div>
                    <h2 className="font-poppins dark:text-white text-pro-w-black font-bold md:text-[48px] md:leading-[70px] text-[40px] leading-[46px] tracking-[-0.5%] text-center mt-4">
                        Axiom <br/>
                        <span className="text-gradient">Philosophy Society</span>
                    </h2>
                    <p className="sm:w-[80%] w-[100%] text-center dark:text-[#A3B3BC] text-[#5B6478] mt-10 font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal">
                        Axiom is the philosophy society of Netaji Subhas University of Technology (NSUT) where students and faculty members come together to discuss and explore the world of philosophy.
                    </p>
                    <p className="sm:w-[80%] w-[100%] text-center dark:text-[#A3B3BC] text-[#5B6478] mt-6 font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal">
                        The aim of Axiom is to foster an appreciation for philosophical discourse. Members have the opportunity to engage in meaningful discussions, broaden their perspectives, and gain a deeper understanding of the human condition.
                    </p>
                    <div className="flex w-full sm:flex-row flex-col justify-center items-center mt-10">
                        <div
                            className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[48px]">
                            <button type="button" onClick={()=>window.open("https://www.instagram.com/axiomnsut/")}
                                    className="font-poppins font-semibold text-[14px] leading-[16px] text-white">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default about;