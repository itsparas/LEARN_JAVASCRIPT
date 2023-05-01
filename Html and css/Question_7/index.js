let value = 0;

const slider = document.querySelector(".slider");
document.querySelector(".right").addEventListener("click", () => {
  if (value < 3) {
    value++;
  }
  slider.style.transform = "translate(" + value * -25 + "%";
});

document.querySelector(".left").addEventListener("click", () => {
  if (value > 0) {
    value--;
  }
  slider.style.transform = "translate(" + value * -25 + "%";
});


// import { useState } from "react";

// type CarouselProps = {
//     items: React.ReactNode[];
//   };
  
//   const StoriesCarousel: React.FC<CarouselProps> = ({ items }) => {
//     const [activeIndex, setActiveIndex] = useState(0);
  
//     const handlePrevClick = () => {
//       setActiveIndex((activeIndex - 1 + items.length) % items.length);
//     };
  
//     const handleNextClick = () => {
//       setActiveIndex((activeIndex + 1) % items.length);
//     };
  
//     const translateX = `-${activeIndex * 100}%`;
  
//     return (
//       <div className="relative w-full">
//         <div className="overflow-hidden">
//           <div
//             className="h-full w-full flex transition-transform duration-500"
//             style={{ transform: `translateX(${translateX})` }}
//           >
//             {items.map((item, index) => (
//               <div
//                 key={index}
//                 className="h-full w-full flex justify-center flex-shrink-0"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-center w-full mt-[4rem] md:mt-[6.4rem] gap-[1.6rem]">
//           <button
//             className="hover:text-brand-secondary"
//             onClick={handlePrevClick}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//           <button
//             className="hover:text-brand-secondary"
//             onClick={handleNextClick}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     );
//   };

//   export default StoriesCarousel;
