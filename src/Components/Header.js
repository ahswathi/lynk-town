import React from "react";

let Header = () => {

    return (
        <>
            <div className="header-wrapper mb-[140px] sm:mb-[180px] md:mb-[180px]  ">
                <div className="h-[280px] lg:h-[724px] md:h-[540px] sm:h-[480px] bg-[#6A5B40]">
                    <p className="logo text-white lg:text-[33px] sm:text-[26px] text-[16px] ml-[30px]  pt-2 sm:ml-20 sm:pt-2 ">Logo</p>
                    <div className="header">
                        <p className="title pt-4 lg:text-[52px] sm:text-[32px] text-[12px] text-center text-white">Create an order
                            <span className="sub-title lg:text-[52px] sm:text-[32px] text-[12px] text-center
                             text-[#6A5B40] rounded-full bg-[#EAE7E0] px-1 mx-1"> Lynk and share it</span><br />

                            <span className="sub-title lg:text-[52px] sm:text-[32px] text-[12px] text-center
                             text-[#6A5B40] rounded-full bg-[#EAE7E0] px-1 mx-1"> any where </span>in the Town</p>
                    </div>

                    {/* <svg width="1002" height="790" className=" absolute" viewBox="0 0 1402 790" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M375 166.179L375.861 165.671L375 166.179ZM735 789.179L742.677 780.554L731.368 778.218L735 789.179ZM0.299517 14.6335C80.2129 -10.4536 266.863 -15.1624 374.139 166.688L375.861 165.671C267.937 -17.2786 80.1204 -12.5208 -0.299517 12.7254L0.299517 14.6335ZM374.139 166.688C441.525 280.918 525.746 331.457 603.813 351.585C681.84 371.703 753.64 361.42 796.168 354.165L795.832 352.194C753.36 359.439 681.91 369.656 604.312 349.649C526.754 329.652 442.975 279.441 375.861 165.671L374.139 166.688ZM796.168 354.165C817.272 350.565 869.902 350.925 935.875 357.69C1001.81 364.451 1080.95 377.598 1155.03 399.513C1229.13 421.435 1298.07 452.101 1343.69 493.839C1366.49 514.699 1383.44 538.3 1392.33 564.931C1401.21 591.554 1402.05 621.268 1392.54 654.404L1394.46 654.955C1404.07 621.466 1403.24 591.336 1394.22 564.299C1385.21 537.27 1368.03 513.394 1345.04 492.363C1299.09 450.321 1229.8 419.549 1155.6 397.596C1081.37 375.636 1002.1 362.47 936.079 355.7C870.098 348.934 817.228 348.544 795.832 352.194L796.168 354.165ZM1392.54 654.404C1373.97 719.094 1326.33 751.838 1264.49 766.42C1202.59 781.015 1126.57 777.374 1051.56 769.315C976.64 761.266 902.632 748.794 845.091 745.837C816.309 744.358 791.515 745.249 772.687 750.302C753.842 755.36 740.789 764.648 735.865 780.076L737.77 780.684C742.406 766.161 754.707 757.199 773.206 752.234C791.721 747.264 816.258 746.358 844.989 747.835C902.475 750.788 976.224 763.233 1051.35 771.304C1126.38 779.365 1202.69 783.047 1264.95 768.366C1327.27 753.673 1375.63 720.542 1394.46 654.955L1392.54 654.404Z" fill="white" />
                    </svg> */}


                    <div className="flex justify-around mt-[40px] z-0  sm:mt-[60px] md:mt-[60px] lg:mt-[80px] mx-[50px] sm:mx-[100px] lg:mx-[120px] gap-8 sm:gap-14 lg:gap-34">
                        <div className="mt-[40px] sm:mt-[60px] ">
                            <img src="/images/mobile1.png" className="w-full" alt="service1" />
                        </div>
                        <div className="mobile2-img mt-[20px]">
                            <img src="/images/mobile2.png" alt="service1" />
                        </div>
                        <div className="mt-[40px] sm:mt-[60px] ">
                            <img src="/images/mobile3.png" alt="service1" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )

}

export default Header;