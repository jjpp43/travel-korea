"use client";

import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import EmblaCarousel from "./components/imageCarousel";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [animateDown, setAnimateDown] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger multiple times
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
  });

  // Set the animation state when the element comes into view
  if (inView && !animateDown) {
    setAnimateDown(true);
  }

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="">
      {/* SEOUL */}
      <div className="flex flex-col justify-center items-center h-screen bg-black">
        <div className="relative">
          <Image
            alt="Picture of Seoul"
            src="/seoul.png"
            width={1280}
            height={720}
          />
          {/* Bottom Left Section */}
          <div className="flex flex-col absolute bottom-0 left-0">
            <div
              className={`font-crimson font-bold text-3xl transform transition-all duration-1000 ease-in-out ${
                animate ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              Experience the essence of South Korean Culture
            </div>
            <div className="">
              <svg
                width="940"
                height="107"
                viewBox="0 0 940 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group"
              >
                <path
                  className={`origin-bottom transition-transform duration-700 delay-500 ease-out ${
                    animate ? "translate-y-0" : "translate-y-full"
                  }`}
                  d="M940.001 105.126H828.092V92.1632H940.001V105.126ZM836.547 105.126H801.652V1.42383H836.547V105.126Z"
                  fill="white"
                />
                <path
                  className={`origin-bottom transition-transform duration-700 delay-300 ease-out ${
                    animate ? "translate-y-0" : "translate-y-full"
                  }`}
                  d="M757.842 1.42383V71.0096C757.842 78.8918 754.102 85.4681 746.621 90.7387C739.14 95.9618 729.148 99.9028 716.645 102.562C704.143 105.221 690.359 106.55 675.295 106.55C659.615 106.55 645.524 105.221 633.021 102.562C620.621 99.9028 610.834 95.9618 603.661 90.7387C596.487 85.4681 592.9 78.8918 592.9 71.0096V1.42383H627.487V71.0096C627.487 76.1852 629.435 80.4349 633.329 83.7587C637.326 87.0825 642.911 89.5516 650.084 91.166C657.258 92.7804 665.661 93.5876 675.295 93.5876C685.03 93.5876 693.434 92.7804 700.505 91.166C707.678 89.5516 713.212 87.0825 717.106 83.7587C721.001 80.4349 722.948 76.1852 722.948 71.0096V1.42383H757.842Z"
                  fill="white"
                />
                {/* O */}
                <path
                  className={`origin-bottom transition-transform duration-700 delay-200 ease-out ${
                    animate ? "translate-y-0" : "translate-y-full"
                  }`}
                  d="M555.39 56.3381C555.39 66.7368 551.599 75.6873 544.015 83.1896C536.432 90.6918 525.774 96.461 512.041 100.497C498.411 104.533 482.424 106.551 464.08 106.551C446.146 106.551 430.211 104.533 416.273 100.497C402.439 96.461 391.576 90.6918 383.685 83.1896C375.896 75.6873 372.002 66.7368 372.002 56.3381V50.2841C372.002 39.8854 375.896 30.9349 383.685 23.4327C391.473 15.8829 402.285 10.0901 416.12 6.05404C429.955 2.01801 445.839 0 463.773 0C482.117 0 498.155 2.01801 511.888 6.05404C525.62 10.0901 536.278 15.8829 543.861 23.4327C551.547 30.9349 555.39 39.8854 555.39 50.2841V56.3381ZM520.65 50.1417C520.65 42.2121 518.395 35.5408 513.886 30.1277C509.377 24.6672 502.869 20.5362 494.363 17.7348C485.96 14.8858 475.763 13.4613 463.773 13.4613C452.09 13.4613 441.996 14.8858 433.49 17.7348C424.984 20.5362 418.426 24.6672 413.814 30.1277C409.202 35.5408 406.896 42.2121 406.896 50.1417V56.3381C406.896 64.2677 409.202 70.9865 413.814 76.4945C418.528 81.955 425.138 86.1098 433.644 88.9587C442.252 91.7602 452.398 93.1609 464.08 93.1609C476.071 93.1609 486.267 91.7602 494.671 88.9587C503.177 86.1098 509.633 81.955 514.04 76.4945C518.446 70.9865 520.65 64.2677 520.65 56.3381V50.1417Z"
                  fill="white"
                />
                {/* E */}
                <path
                  className={`origin-bottom transition-transform duration-700 delay-150 ease-out ${
                    animate ? "translate-y-0" : "translate-y-full"
                  }`}
                  d="M345.872 105.126H227.661V92.1632H345.872V105.126ZM236.115 105.126H201.221V1.42383H236.115V105.126ZM330.192 58.0469H227.661V45.2266H330.192V58.0469ZM344.642 14.4578H227.661V1.42383H344.642V14.4578Z"
                  fill="white"
                />
                {/* S */}
                <path
                  className={`origin-bottom transition-transform duration-700 delay-100 ease-out ${
                    animate ? "translate-y-0" : "translate-y-full"
                  }`}
                  d="M86.2372 106.551C75.6817 106.551 65.2799 105.886 55.0319 104.557C44.8864 103.227 35.6119 101.209 27.2085 98.5027C18.9076 95.7962 12.2976 92.425 7.37858 88.3889C2.45953 84.3529 0 79.6521 0 74.2866H34.7408C34.7408 77.7053 36.0731 80.6493 38.7375 83.1184C41.5045 85.54 45.245 87.5342 49.9591 89.1012C54.7757 90.6681 60.2584 91.8314 66.4072 92.5911C72.6585 93.3034 79.2685 93.6595 86.2372 93.6595C95.8703 93.6595 103.915 93.0422 110.371 91.8077C116.93 90.5256 121.9 88.7688 125.282 86.5371C128.664 84.2579 130.355 81.6227 130.355 78.6312C130.355 75.5924 128.971 73.0283 126.204 70.9391C123.54 68.8023 118.57 66.8556 111.294 65.0987C104.017 63.2944 93.6157 61.4663 80.0883 59.6145C69.2254 58.1425 59.3361 56.4569 50.4203 54.5576C41.607 52.6582 33.921 50.4978 27.3622 48.0762C20.8035 45.6071 15.7307 42.7581 12.1439 39.5293C8.65958 36.3005 6.91742 32.5968 6.91742 28.4184C6.91742 22.9104 10.1968 18.0197 16.7555 13.7462C23.3143 9.47279 32.435 6.12526 44.1178 3.70365C55.8005 1.23455 69.3791 0 84.8537 0C101.66 0 116.059 1.44822 128.049 4.34466C140.039 7.2411 149.16 11.0872 155.411 15.8829C161.765 20.6787 164.942 25.9018 164.942 31.5522H130.047C130.047 27.9435 128.408 24.7385 125.128 21.937C121.849 19.1355 116.828 16.9513 110.064 15.3844C103.403 13.77 94.948 12.9628 84.7 12.9628C74.9643 12.9628 66.9196 13.6513 60.5658 15.0283C54.2121 16.3578 49.498 18.1859 46.4236 20.5125C43.3492 22.7917 41.812 25.4032 41.812 28.3471C41.812 31.0536 43.5541 33.4515 47.0384 35.5408C50.6253 37.63 56.108 39.5293 63.4865 41.2387C70.8651 42.9006 80.2421 44.515 91.6174 46.0819C108.322 48.2661 122.105 50.8302 132.968 53.7741C143.934 56.718 152.029 60.208 157.256 64.244C162.585 68.28 165.249 73.0283 165.249 78.4888C165.249 84.1867 161.97 89.1487 155.411 93.3746C148.955 97.6006 139.783 100.853 127.895 103.132C116.11 105.411 102.224 106.551 86.2372 106.551Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 flex flex-col items-end pb-8 pr-8">
            <div className="font-cardo flex-wrap w-80 text-lg text-end align-top">
              <TypeAnimation
                className="text-xl font-bold"
                sequence={["A DYNAMIC CITY"]}
                wrapper="span"
                speed={2}
                style={{ display: "inline-block" }}
              />
              <div className="text-lg">
                where centuries-old palaces meet cutting-edge technology,
                offering a unique glimpse into both Korea’s rich history and
                modern innovation.
              </div>
            </div>
            {/* Button Group */}
            <div className="flex flex-row gap-4 pt-8">
              <Button className="focus:outline-none font-archivo border bg-white bg-opacity-10 hover:bg-opacity-30 duration-300 h-11 px-8">
                Next
              </Button>

              <Button className="focus:outline-none font-archivo h-11 bg-white hover:bg-gray-300 duration-300 text-black px-8">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* BUSAN */}
      <div className="flex flex-col justify-center items-center h-screen bg-white">
        {/* 1280 * 720 */}
        <div className="relative w-[1280px] h-[720px]">
          {/* BUSAN Text */}
          <div className="absolute left-0 z-30">
            <svg
              width="496"
              height="118"
              viewBox="0 0 496 118"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2344 63.8125V50.4531H38.7031C45.1094 50.4531 50.1354 48.9688 53.7812 46C57.4792 43.0312 59.3281 38.8385 59.3281 33.4219C59.3281 27.4844 57.6094 23.1875 54.1719 20.5312C50.7344 17.875 45.474 16.5469 38.3906 16.5469H18V116H0.265625V2.25H38.3906C50.474 2.25 59.9271 4.69792 66.75 9.59375C73.625 14.4896 77.0625 22.224 77.0625 32.7969C77.0625 37.4844 75.8906 41.7552 73.5469 45.6094C71.2552 49.4635 67.9219 52.6146 63.5469 55.0625C59.1719 57.4583 53.9115 58.9167 47.7656 59.4375L41.9844 63.8125H13.2344ZM7.0625 116L15.9688 101.781H41.2812C48.0521 101.781 53.2083 100.062 56.75 96.625C60.3438 93.1875 62.1406 88.6562 62.1406 83.0312C62.1406 79.0729 61.4375 75.6615 60.0312 72.7969C58.6771 69.9323 56.5156 67.7188 53.5469 66.1562C50.6302 64.5938 46.776 63.8125 41.9844 63.8125H20.1875V50.4531H49.4062L53.2344 55.5312C59.1719 55.7917 64.0938 57.224 68 59.8281C71.9583 62.3802 74.9271 65.6875 76.9062 69.75C78.8854 73.7604 79.875 78.1615 79.875 82.9531C79.875 93.7344 76.4115 101.938 69.4844 107.562C62.5573 113.188 53.1562 116 41.2812 116H7.0625ZM182.688 2.25V78.5781C182.688 87.224 180.786 94.4375 176.984 100.219C173.182 105.948 168.104 110.271 161.75 113.188C155.396 116.104 148.391 117.562 140.734 117.562C132.766 117.562 125.604 116.104 119.25 113.188C112.948 110.271 107.974 105.948 104.328 100.219C100.682 94.4375 98.8594 87.224 98.8594 78.5781V2.25H116.438V78.5781C116.438 84.2552 117.427 88.9167 119.406 92.5625C121.438 96.2083 124.276 98.9167 127.922 100.688C131.568 102.458 135.839 103.344 140.734 103.344C145.682 103.344 149.953 102.458 153.547 100.688C157.193 98.9167 160.005 96.2083 161.984 92.5625C163.964 88.9167 164.953 84.2552 164.953 78.5781V2.25H182.688ZM242.609 117.562C237.245 117.562 231.958 116.833 226.75 115.375C221.594 113.917 216.88 111.703 212.609 108.734C208.391 105.766 205.031 102.068 202.531 97.6406C200.031 93.2135 198.781 88.0573 198.781 82.1719H216.438C216.438 85.9219 217.115 89.151 218.469 91.8594C219.875 94.5156 221.776 96.7031 224.172 98.4219C226.62 100.141 229.406 101.417 232.531 102.25C235.708 103.031 239.068 103.422 242.609 103.422C247.505 103.422 251.594 102.745 254.875 101.391C258.208 99.9844 260.734 98.0573 262.453 95.6094C264.172 93.1094 265.031 90.2188 265.031 86.9375C265.031 83.6042 264.328 80.7917 262.922 78.5C261.568 76.1562 259.042 74.0208 255.344 72.0938C251.646 70.1146 246.359 68.1094 239.484 66.0781C233.964 64.4635 228.938 62.6146 224.406 60.5312C219.927 58.4479 216.021 56.0781 212.688 53.4219C209.354 50.7135 206.776 47.5885 204.953 44.0469C203.182 40.5052 202.297 36.4427 202.297 31.8594C202.297 25.8177 203.964 20.4531 207.297 15.7656C210.63 11.0781 215.266 7.40625 221.203 4.75C227.141 2.04167 234.042 0.6875 241.906 0.6875C250.448 0.6875 257.766 2.27604 263.859 5.45312C269.953 8.63021 274.589 12.849 277.766 18.1094C280.995 23.3698 282.609 29.099 282.609 35.2969H264.875C264.875 31.3385 264.042 27.8229 262.375 24.75C260.708 21.6771 258.156 19.2812 254.719 17.5625C251.333 15.7917 247.036 14.9062 241.828 14.9062C236.88 14.9062 232.792 15.6615 229.562 17.1719C226.333 18.6302 223.938 20.6354 222.375 23.1875C220.812 25.6875 220.031 28.5521 220.031 31.7812C220.031 34.75 220.917 37.3802 222.688 39.6719C224.51 41.9635 227.297 44.0469 231.047 45.9219C234.797 47.7448 239.562 49.5156 245.344 51.2344C253.833 53.6302 260.839 56.4427 266.359 59.6719C271.932 62.901 276.047 66.7292 278.703 71.1562C281.411 75.5833 282.766 80.7917 282.766 86.7812C282.766 93.0312 281.099 98.474 277.766 103.109C274.484 107.745 269.823 111.312 263.781 113.812C257.792 116.312 250.734 117.562 242.609 117.562ZM308.938 116H290.5L333.625 2.25H345.188L344.562 15.375L308.938 116ZM338.547 15.375L337.844 2.25H349.406L392.688 116H374.25L338.547 15.375ZM372.688 88.1875H309.719V73.8125H372.688V88.1875ZM495.734 116H478L424.406 32.0156V116H406.672V2.25H424.406L478.156 86.3906V2.25H495.734V116Z"
                fill=""
                className="mix-blend-difference"
              />
            </svg>
          </div>
          {/* Title */}
          {/* <div className="absolute left-0 top-1/4 text-black text-start tracking-tight text-3xl font-crimson font-semibold">
            Explore the spirit
          </div> */}
          <TypeAnimation
            className="absolute left-0 top-1/4 text-black text-xl font-bold font-cardo"
            sequence={["EXPLORE THE SPIRIT"]}
            wrapper="span"
            speed={2}
            style={{ display: "inline-block" }}
          />
          {/* Button Group */}
          <div className="absolute left-0 bottom-24 flex flex-row gap-4 pt-8">
            <Button className="focus:outline-none font-archivo border-2 border-black text-black hover:bg-gray-200 duration-300 h-11 px-8">
              Next
            </Button>
            <Button className="focus:outline-none font-archivo h-11 bg-black hover:opacity-80 duration-300 text-white px-8">
              Explore
            </Button>
          </div>
          {/* Text Area */}
          <div className="font-cardo flex-wrap w-72 text-lg text-black absolute left-0 top-1/3 text-balance leading-normal">
            Busan, South Korea’s second-largest city, blends modernity and
            tradition. Enjoy stunning beaches like Haeundae, explore the lively
            Jagalchi Fish Market, and wander through Gamcheon Culture Village’s
            colorful streets. Busan offers adventure along the scenic southern
            coast, making it a must-visit destination for every traveler.
          </div>
          {/* Image */}
          <div className="absolute right-0 bottom-24 z-20">
            <Image
              alt="Picture of Busan"
              src="/busan.png"
              width={960}
              height={540}
            />
          </div>

          <div className="absolute right-64 bg-[#FDBDBD]/70 filter blur-2xl opacity-90 w-64 h-64 rounded-full"></div>
          <div className="absolute right-0 bottom-0 bg-[#BDEBFD]/70 filter blur-2xl opacity-90 w-64 h-64 rounded-full"></div>
        </div>
      </div>

      {/* SOKCHO */}
      <div className="flex flex-col justify-center items-center h-screen bg-black">
        {/* 1280 * 720 */}
        <div className="flex flex-row justify-between w-[1280px] h-[720px]">
          {/* Left Side */}
          <EmblaCarousel />
          {/* Divider */}
          <div
            className={`w-1 h-full bg-white transition-transform delay-200 duration-1000 ease-in-out ${
              animate ? "scale-y-100" : "scale-y-0"
            }`}
          ></div>
          {/* Right Side */}
          <div className="flex flex-col justify-between h-full w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="622"
              height="117"
              viewBox="0 0 622 117"
              fill="none"
            >
              <path
                d="M621.016 61.7969C621.016 73.2031 619.089 83.0208 615.234 91.25C611.38 99.4792 605.964 105.807 598.984 110.234C592.057 114.661 583.932 116.875 574.609 116.875C565.495 116.875 557.396 114.661 550.312 110.234C543.281 105.807 537.76 99.4792 533.75 91.25C529.792 83.0208 527.812 73.2031 527.812 61.7969V55.1562C527.812 43.75 529.792 33.9323 533.75 25.7031C537.708 17.4219 543.203 11.0677 550.234 6.64062C557.266 2.21354 565.339 0 574.453 0C583.776 0 591.927 2.21354 598.906 6.64062C605.885 11.0677 611.302 17.4219 615.156 25.7031C619.062 33.9323 621.016 43.75 621.016 55.1562V61.7969ZM603.359 55C603.359 46.3021 602.214 38.9844 599.922 33.0469C597.63 27.0573 594.323 22.526 590 19.4531C585.729 16.3281 580.547 14.7656 574.453 14.7656C568.516 14.7656 563.385 16.3281 559.062 19.4531C554.74 22.526 551.406 27.0573 549.062 33.0469C546.719 38.9844 545.547 46.3021 545.547 55V61.7969C545.547 70.4948 546.719 77.8646 549.062 83.9062C551.458 89.8958 554.818 94.4531 559.141 97.5781C563.516 100.651 568.672 102.188 574.609 102.188C580.703 102.188 585.885 100.651 590.156 97.5781C594.479 94.4531 597.76 89.8958 600 83.9062C602.24 77.8646 603.359 70.4948 603.359 61.7969V55Z"
                fill="url(#paint0_linear_245_317)"
              />
              <path
                d="M492.422 63.8281H431.797V49.6094H492.422V63.8281ZM435.469 115.312H417.734V1.5625H435.469V115.312ZM506.797 115.312H489.141V1.5625H506.797V115.312Z"
                fill="url(#paint1_linear_245_317)"
              />
              <path
                d="M398.828 78.6719C398.151 85.9635 396.068 92.5 392.578 98.2812C389.141 104.062 384.297 108.62 378.047 111.953C371.797 115.234 364.062 116.875 354.844 116.875C345.677 116.875 337.708 114.688 330.938 110.312C324.167 105.938 318.906 99.7656 315.156 91.7969C311.458 83.776 309.609 74.375 309.609 63.5938V53.3594C309.609 42.526 311.484 33.125 315.234 25.1562C319.036 17.1875 324.401 11.0156 331.328 6.64062C338.255 2.21354 346.458 0 355.938 0C364.792 0 372.266 1.64062 378.359 4.92188C384.505 8.20312 389.271 12.7604 392.656 18.5938C396.042 24.4271 398.099 31.1198 398.828 38.6719H381.172C380.234 31.0677 377.891 25.1302 374.141 20.8594C370.443 16.5365 364.375 14.375 355.938 14.375C349.635 14.375 344.375 15.9375 340.156 19.0625C335.99 22.1875 332.839 26.6406 330.703 32.4219C328.568 38.2031 327.5 45.1302 327.5 53.2031V63.5938C327.5 71.1458 328.438 77.8646 330.312 83.75C332.24 89.5833 335.208 94.1927 339.219 97.5781C343.281 100.911 348.49 102.578 354.844 102.578C360.781 102.578 365.547 101.641 369.141 99.7656C372.734 97.8906 375.443 95.1823 377.266 91.6406C379.141 88.0469 380.443 83.724 381.172 78.6719H398.828Z"
                fill="url(#paint2_linear_245_317)"
              />
              <path
                d="M230.312 115.312H212.578V1.5625H230.312V115.312ZM252.188 55.625L225.703 83.3594L222.656 65.3125L241.953 42.5L277.266 1.5625H298.75L252.188 55.625ZM241.016 60.8594L252.578 47.9688L301.562 115.312H280.469L241.016 60.8594Z"
                fill="url(#paint3_linear_245_317)"
              />
              <path
                d="M191.641 61.7969C191.641 73.2031 189.714 83.0208 185.859 91.25C182.005 99.4792 176.589 105.807 169.609 110.234C162.682 114.661 154.557 116.875 145.234 116.875C136.12 116.875 128.021 114.661 120.938 110.234C113.906 105.807 108.385 99.4792 104.375 91.25C100.417 83.0208 98.4375 73.2031 98.4375 61.7969V55.1562C98.4375 43.75 100.417 33.9323 104.375 25.7031C108.333 17.4219 113.828 11.0677 120.859 6.64062C127.891 2.21354 135.964 0 145.078 0C154.401 0 162.552 2.21354 169.531 6.64062C176.51 11.0677 181.927 17.4219 185.781 25.7031C189.688 33.9323 191.641 43.75 191.641 55.1562V61.7969ZM173.984 55C173.984 46.3021 172.839 38.9844 170.547 33.0469C168.255 27.0573 164.948 22.526 160.625 19.4531C156.354 16.3281 151.172 14.7656 145.078 14.7656C139.141 14.7656 134.01 16.3281 129.688 19.4531C125.365 22.526 122.031 27.0573 119.688 33.0469C117.344 38.9844 116.172 46.3021 116.172 55V61.7969C116.172 70.4948 117.344 77.8646 119.688 83.9062C122.083 89.8958 125.443 94.4531 129.766 97.5781C134.141 100.651 139.297 102.188 145.234 102.188C151.328 102.188 156.51 100.651 160.781 97.5781C165.104 94.4531 168.385 89.8958 170.625 83.9062C172.865 77.8646 173.984 70.4948 173.984 61.7969V55Z"
                fill="url(#paint4_linear_245_317)"
              />
              <path
                d="M43.8281 116.875C38.4635 116.875 33.1771 116.146 27.9688 114.688C22.8125 113.229 18.099 111.016 13.8281 108.047C9.60938 105.078 6.25 101.38 3.75 96.9531C1.25 92.526 0 87.3698 0 81.4844H17.6562C17.6562 85.2344 18.3333 88.4635 19.6875 91.1719C21.0938 93.8281 22.9948 96.0156 25.3906 97.7344C27.8385 99.4531 30.625 100.729 33.75 101.562C36.9271 102.344 40.2865 102.734 43.8281 102.734C48.724 102.734 52.8125 102.057 56.0938 100.703C59.4271 99.2969 61.9531 97.3698 63.6719 94.9219C65.3906 92.4219 66.25 89.5312 66.25 86.25C66.25 82.9167 65.5469 80.1042 64.1406 77.8125C62.7865 75.4688 60.2604 73.3333 56.5625 71.4062C52.8646 69.4271 47.5781 67.4219 40.7031 65.3906C35.1823 63.776 30.1562 61.9271 25.625 59.8438C21.1458 57.7604 17.2396 55.3906 13.9062 52.7344C10.5729 50.026 7.99479 46.901 6.17188 43.3594C4.40104 39.8177 3.51562 35.7552 3.51562 31.1719C3.51562 25.1302 5.18229 19.7656 8.51562 15.0781C11.849 10.3906 16.4844 6.71875 22.4219 4.0625C28.3594 1.35417 35.2604 0 43.125 0C51.6667 0 58.9844 1.58854 65.0781 4.76562C71.1719 7.94271 75.8073 12.1615 78.9844 17.4219C82.2135 22.6823 83.8281 28.4115 83.8281 34.6094H66.0938C66.0938 30.651 65.2604 27.1354 63.5938 24.0625C61.9271 20.9896 59.375 18.5938 55.9375 16.875C52.5521 15.1042 48.2552 14.2188 43.0469 14.2188C38.099 14.2188 34.0104 14.974 30.7812 16.4844C27.5521 17.9427 25.1562 19.9479 23.5938 22.5C22.0312 25 21.25 27.8646 21.25 31.0938C21.25 34.0625 22.1354 36.6927 23.9062 38.9844C25.7292 41.276 28.5156 43.3594 32.2656 45.2344C36.0156 47.0573 40.7812 48.8281 46.5625 50.5469C55.0521 52.9427 62.0573 55.7552 67.5781 58.9844C73.151 62.2135 77.2656 66.0417 79.9219 70.4688C82.6302 74.8958 83.9844 80.1042 83.9844 86.0938C83.9844 92.3438 82.3177 97.7865 78.9844 102.422C75.7031 107.057 71.0417 110.625 65 113.125C59.0104 115.625 51.9531 116.875 43.8281 116.875Z"
                fill="url(#paint5_linear_245_317)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_245_317"
                  x1="574.414"
                  y1="0"
                  x2="574.414"
                  y2="116.875"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAEDE" />
                  <stop offset="1" stopColor="#9AC8DF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_245_317"
                  x1="462.266"
                  y1="1.5625"
                  x2="462.266"
                  y2="115.312"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAEDE" />
                  <stop offset="1" stopColor="#9AC8DF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_245_317"
                  x1="354.219"
                  y1="0"
                  x2="354.219"
                  y2="116.875"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAEDE" />
                  <stop offset="1" stopColor="#9AC8DF" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_245_317"
                  x1="257.07"
                  y1="1.5625"
                  x2="257.07"
                  y2="115.312"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAEDE" />
                  <stop offset="1" stopColor="#9AC8DF" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_245_317"
                  x1="145.039"
                  y1="0"
                  x2="145.039"
                  y2="116.875"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAEDE" />
                  <stop offset="1" stopColor="#9AC8DF" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_245_317"
                  x1="41.9922"
                  y1="0"
                  x2="41.9922"
                  y2="116.875"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAEDE" />
                  <stop offset="1" stopColor="#9AC8DF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex flex-col gap-4">
              {/* Heading */}
              <div className="inline-block">
                <TypeAnimation
                  className="text-white text-xl font-bold font-cardo"
                  sequence={["QUAINT GETAWAY"]}
                  wrapper="span"
                  speed={2}
                  style={{ display: "inline-block" }}
                />
              </div>
              {/* Text Area */}
              <div className="font-cardo text-lg text-balance leading-normal w-[630px] text-start ">
                Sokcho is one of the most nature friendly and environmentally
                clean cities in South Korea. With beautiful scenaries of the sea
                and mountains.
              </div>
            </div>

            {/* Image - bottom right */}
            <div className="relative">
              <Image
                alt="Picture of sokcho"
                src="/sokcho4.png"
                width={630}
                height={420}
              />
              {/* Button Group */}
              <div className="absolute right-8 bottom-8 flex flex-row gap-4 pt-8 z-10">
                <Button className="focus:outline-none font-archivo border bg-white bg-opacity-10 hover:bg-opacity-30 duration-300 h-11 px-8">
                  Next
                </Button>
                <Button className="focus:outline-none font-archivo h-11 bg-white hover:bg-gray-300 duration-300 text-black px-8">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* YEOSU */}
      <div className="flex flex-col justify-center items-center h-screen bg-white">
        {/* 1280 * 720 */}
        <div className="relative w-[1280px] h-[720px]">
          <div className="flex flex-col gap-8">
            {/* YEOSU Title */}
            <svg
              ref={ref}
              xmlns="http://www.w3.org/2000/svg"
              width="488"
              height="117"
              viewBox="0 0 488 117"
              fill="none"
            >
              <path
                d="M487.422 1.5625V77.8906C487.422 86.5365 485.521 93.75 481.719 99.5312C477.917 105.26 472.839 109.583 466.484 112.5C460.13 115.417 453.125 116.875 445.469 116.875C437.5 116.875 430.339 115.417 423.984 112.5C417.682 109.583 412.708 105.26 409.062 99.5312C405.417 93.75 403.594 86.5365 403.594 77.8906V1.5625H421.172V77.8906C421.172 83.5677 422.161 88.2292 424.141 91.875C426.172 95.5208 429.01 98.2292 432.656 100C436.302 101.771 440.573 102.656 445.469 102.656C450.417 102.656 454.688 101.771 458.281 100C461.927 98.2292 464.74 95.5208 466.719 91.875C468.698 88.2292 469.688 83.5677 469.688 77.8906V1.5625H487.422Z"
                fill="black"
                className={`origin-top transition-transform duration-700 delay-100 ease-out ${
                  animateDown ? "-scale-y-full" : "scale-y-0"
                }`}
              />
              <path
                d="M347.031 116.875C341.667 116.875 336.38 116.146 331.172 114.688C326.016 113.229 321.302 111.016 317.031 108.047C312.812 105.078 309.453 101.38 306.953 96.9531C304.453 92.526 303.203 87.3698 303.203 81.4844H320.859C320.859 85.2344 321.536 88.4635 322.891 91.1719C324.297 93.8281 326.198 96.0156 328.594 97.7344C331.042 99.4531 333.828 100.729 336.953 101.562C340.13 102.344 343.49 102.734 347.031 102.734C351.927 102.734 356.016 102.057 359.297 100.703C362.63 99.2969 365.156 97.3698 366.875 94.9219C368.594 92.4219 369.453 89.5312 369.453 86.25C369.453 82.9167 368.75 80.1042 367.344 77.8125C365.99 75.4688 363.464 73.3333 359.766 71.4062C356.068 69.4271 350.781 67.4219 343.906 65.3906C338.385 63.776 333.359 61.9271 328.828 59.8438C324.349 57.7604 320.443 55.3906 317.109 52.7344C313.776 50.026 311.198 46.901 309.375 43.3594C307.604 39.8177 306.719 35.7552 306.719 31.1719C306.719 25.1302 308.385 19.7656 311.719 15.0781C315.052 10.3906 319.688 6.71875 325.625 4.0625C331.562 1.35417 338.464 0 346.328 0C354.87 0 362.188 1.58854 368.281 4.76562C374.375 7.94271 379.01 12.1615 382.188 17.4219C385.417 22.6823 387.031 28.4115 387.031 34.6094H369.297C369.297 30.651 368.464 27.1354 366.797 24.0625C365.13 20.9896 362.578 18.5938 359.141 16.875C355.755 15.1042 351.458 14.2188 346.25 14.2188C341.302 14.2188 337.214 14.974 333.984 16.4844C330.755 17.9427 328.359 19.9479 326.797 22.5C325.234 25 324.453 27.8646 324.453 31.0938C324.453 34.0625 325.339 36.6927 327.109 38.9844C328.932 41.276 331.719 43.3594 335.469 45.2344C339.219 47.0573 343.984 48.8281 349.766 50.5469C358.255 52.9427 365.26 55.7552 370.781 58.9844C376.354 62.2135 380.469 66.0417 383.125 70.4688C385.833 74.8958 387.188 80.1042 387.188 86.0938C387.188 92.3438 385.521 97.7865 382.188 102.422C378.906 107.057 374.245 110.625 368.203 113.125C362.214 115.625 355.156 116.875 347.031 116.875Z"
                fill="black"
                className={`origin-top transition-transform duration-700 delay-150 ease-out ${
                  animateDown ? "-scale-y-full" : "scale-y-0"
                }`}
              />
              <path
                d="M288.438 61.7969C288.438 73.2031 286.51 83.0208 282.656 91.25C278.802 99.4792 273.385 105.807 266.406 110.234C259.479 114.661 251.354 116.875 242.031 116.875C232.917 116.875 224.818 114.661 217.734 110.234C210.703 105.807 205.182 99.4792 201.172 91.25C197.214 83.0208 195.234 73.2031 195.234 61.7969V55.1562C195.234 43.75 197.214 33.9323 201.172 25.7031C205.13 17.4219 210.625 11.0677 217.656 6.64062C224.688 2.21354 232.76 0 241.875 0C251.198 0 259.349 2.21354 266.328 6.64062C273.307 11.0677 278.724 17.4219 282.578 25.7031C286.484 33.9323 288.438 43.75 288.438 55.1562V61.7969ZM270.781 55C270.781 46.3021 269.635 38.9844 267.344 33.0469C265.052 27.0573 261.745 22.526 257.422 19.4531C253.151 16.3281 247.969 14.7656 241.875 14.7656C235.938 14.7656 230.807 16.3281 226.484 19.4531C222.161 22.526 218.828 27.0573 216.484 33.0469C214.141 38.9844 212.969 46.3021 212.969 55V61.7969C212.969 70.4948 214.141 77.8646 216.484 83.9062C218.88 89.8958 222.24 94.4531 226.562 97.5781C230.938 100.651 236.094 102.188 242.031 102.188C248.125 102.188 253.307 100.651 257.578 97.5781C261.901 94.4531 265.182 89.8958 267.422 83.9062C269.661 77.8646 270.781 70.4948 270.781 61.7969V55Z"
                fill="black"
                className={`origin-top transition-transform duration-700 delay-200 ease-out ${
                  animateDown ? "-scale-y-full" : "scale-y-0"
                }`}
              />
              <path
                d="M181.953 115.312H121.875V101.094H181.953V115.312ZM126.172 115.312H108.438V1.5625H126.172V115.312ZM173.984 63.6719H121.875V49.6094H173.984V63.6719ZM181.328 15.8594H121.875V1.5625H181.328V15.8594Z"
                fill="black"
                className={`origin-top transition-transform duration-700 delay-300 ease-out ${
                  animateDown ? "-scale-y-full" : "scale-y-0"
                }`}
              />
              <path
                d="M47.5781 56.9531L75.3125 1.5625H95.0781L56.4844 73.2031V115.312H38.5938V73.2031L0 1.5625H19.9219L47.5781 56.9531Z"
                fill="black"
                className={`origin-top transition-transform duration-700 delay-500 ease-out ${
                  animateDown ? "-scale-y-full" : "scale-y-0"
                }`}
              />
            </svg>
            {/* Divider */}
            <div
              className={`h-1 w-[740px] bg-black transition-transform origin-left delay-200 duration-1000 ease-in-out ${
                animate ? "scale-x-100" : "scale-x-0"
              }`}
            ></div>
            <div className="flex flex-col gap-6 pt-2">
              {/* Small heading */}
              <div className="inline-block">
                <TypeAnimation
                  className="text-black text-xl font-bold font-cardo justify-start"
                  sequence={["VIBRANT COASTAL CITY"]}
                  wrapper="span"
                  speed={2}
                  style={{ display: "inline-block" }}
                />
              </div>
              {/* Text Area */}
              <div className="font-cardo flex-wrap w-1/2 text-lg text-black text-balance leading-normal">
                Yeosu is known for its breathtaking ocean views, picturesque
                islands, and rich maritime history. Famous for hosting the 2012
                World Expo, Yeosu offers a blend of cultural attractions, fresh
                seafood, and scenic spots like Odongdo Island and the Yeosu
                Maritime Cable Car. This beautiful harbor city is a paradise for
                nature lovers and explorers alike.
              </div>
              {/* Button Group */}
              <div className="flex flex-row gap-4 z-10 pt-6">
                <Button className="focus:outline-none font-archivo border-2 border-black text-black hover:bg-gray-200 duration-300 h-11 px-8">
                  Next
                </Button>
                <Button className="focus:outline-none font-archivo h-11 bg-black hover:opacity-80 duration-300 text-white px-8">
                  Explore
                </Button>
              </div>{" "}
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-full flex flex-row justify-between items-end">
            {/* Left most image */}
            <div className="hover:scale-105 duration-300 ease-in-out">
              <Image
                alt="Picture of sokcho"
                src="/yeosu1.png"
                width={360}
                height={240}
              />
            </div>
            {/* Middle image */}
            <div className="hover:scale-105 duration-300 ease-in-out">
              <Image
                alt="Picture of sokcho"
                src="/yeosu2.png"
                width={320}
                height={320}
              />
            </div>
            {/* Right most image */}
            <div className="self-start flex flex-col hover:scale-105 duration-300 ease-in-out">
              <div className="relative ">
                <Image
                  className=""
                  alt="Picture of sokcho"
                  src="/yeosu3.png"
                  width={480}
                  height={640}
                />
                <div className="absolute bottom-0 left-0 tracking-tight text-3xl font-crimson font-semibold">
                  Where Coastal Beauty
                </div>
              </div>
              <div className="self-end tracking-tight text-3xl font-crimson font-semibold text-black">
                Meets Cultural Heritage
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
