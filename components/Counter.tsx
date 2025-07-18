// // 'use client';
// // import { useEffect, useState } from 'react';

// // export default function HomesCleanedStat() {
// //   const [count, setCount] = useState(1);

// //   useEffect(() => {
// //     let start = 1;
// //     const end = 1000;
// //     const duration = 5000; // total animation time in ms
// //     const stepTime = Math.max(Math.floor(duration / end), 1);

// //     const timer = setInterval(() => {
// //       start += 10;
// //       if (start >= end) {
// //         clearInterval(timer);
// //         setCount(end);
// //       } else {
// //         setCount(start);
// //       }
// //     }, stepTime);

// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <div className="flex flex-col items-center">
// //       <p className="text-3xl font-bold text-green-600 mb-2">{count}+</p>
// //       <p className="text-sm font-medium text-gray-700">Homes Cleaned</p>
// //     </div>
// //   );
// // }

// 'use client';

// import { useEffect, useRef, useState } from 'react';

// export default function HomesCleanedStat() {
//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           animateCount();
//           setHasAnimated(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, [hasAnimated]);

//   const animateCount = () => {
//     let start = 0;
//     const end = 1000;
//     const duration = 2000;
//     const stepTime = Math.max(Math.floor(duration / end), 1);

//     const timer = setInterval(() => {
//       start += 10;
//       if (start >= end) {
//         clearInterval(timer);
//         setCount(end);
//       } else {
//         setCount(start);
//       }
//     }, stepTime);
//   };

//   // Format the number with commas
//   const formattedCount = new Intl.NumberFormat().format(count);

//   return (
//     <div ref={ref} className="flex flex-col items-center">
//       <p className="text-3xl font-bold text-green-600 mb-2">{formattedCount}+</p>
//       <p className="text-sm font-medium text-gray-700">Homes Cleaned</p>
//     </div>
//   );
// }

'use client';

import { useEffect, useRef, useState } from 'react';

export default function HomesCleanedStat() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(false); // ensure it runs only once
        }
      },
      { threshold: 1.5 } // adjust as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const end = 1000;
    const duration = 5000;
    const stepTime = Math.max(Math.floor(duration / end), 1);

    const timer = setInterval(() => {
      start += 10;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);
  };

  //Format the number with commas
  const formattedCount = new Intl.NumberFormat().format(count);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <p className="text-3xl font-bold text-green-600 mb-2">{formattedCount}+</p>
      <p className="text-sm font-medium text-gray-700">Homes Cleaned</p>
    </div>
  );
}

