"use client";
import React, { useEffect, useState } from "react";
import "./loading.scss";
import { LuLoader2 } from "react-icons/lu";
type Props = {};

export default function Loading({}: Props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3200);
  }, []);
  return (
    <div id="loading" className={loaded ? "loaded" : ""}>
      <LuLoader2 className="loader" />
      <p>Loading...</p>
      <img src="/graphics/swim-deli.png" alt="" className="swimdeli" />
      <svg
        width="4109"
        height="412"
        viewBox="0 0 4109 412"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="waves"
      >
        <g id="Footer Wave">
          <g id="wave_three">
            <path
              d="M1435.3 80.685C1448.22 74.8857 1484.34 66.7667 1525.42 80.685C1566.5 94.6033 1604.71 86.4843 1618.68 80.685C1631.61 74.8857 1656.11 81.0187 1697.19 94.937C1738.26 108.855 1776.48 100.736 1790.45 94.937C1803.37 89.1377 1839.49 81.0187 1880.57 94.937C1921.65 108.855 1959.86 100.736 1973.83 94.937C1986.76 89.1377 2022.87 81.0187 2063.95 94.937C2105.03 108.855 2143.24 100.736 2157.22 94.937C2170.14 89.1377 2206.26 81.0187 2247.33 94.937C2288.41 108.855 2326.63 100.736 2340.6 94.937V167.078C2376.16 188.113 2400 226.851 2400 271.157C2400 337.897 2345.9 392 2279.16 392H290.843C239.73 392 196.029 360.267 178.367 315.428H140V94.937C152.924 89.1377 189.042 81.0187 230.12 94.937C271.198 108.855 309.411 100.736 323.383 94.937C336.307 89.1377 372.425 81.0187 413.503 94.937C454.581 108.855 492.794 100.736 506.766 94.937C519.691 89.1377 555.808 81.0187 596.886 94.937C636.152 108.241 683.446 88.387 699.745 81.5446L699.748 81.5433C700.499 81.2281 701.184 80.9406 701.799 80.6852C714.723 74.8859 750.841 66.7669 791.919 80.6852C832.997 94.6035 859.561 100.736 873.533 94.937C886.457 89.1377 922.575 81.0187 963.652 94.937C1004.73 108.855 1042.94 100.736 1056.92 94.937C1069.84 89.1377 1105.96 81.0187 1147.04 94.937C1188.11 108.855 1226.33 100.736 1240.3 94.937C1253.22 89.1377 1289.34 81.0187 1330.42 94.937C1369.67 108.237 1416.92 88.3995 1433.23 81.5509C1433.99 81.2327 1434.68 80.9425 1435.3 80.685Z"
              fill="#6C93C5"
            />
            <path
              d="M3097.3 80.685C3110.22 74.8857 3146.34 66.7667 3187.42 80.685C3228.5 94.6033 3266.71 86.4843 3280.68 80.685C3293.61 74.8857 3318.11 81.0187 3359.19 94.937C3400.26 108.855 3438.48 100.736 3452.45 94.937C3465.37 89.1377 3501.49 81.0187 3542.57 94.937C3583.65 108.855 3621.86 100.736 3635.83 94.937C3648.76 89.1377 3684.87 81.0187 3725.95 94.937C3767.03 108.855 3805.24 100.736 3819.22 94.937C3832.14 89.1377 3868.26 81.0187 3909.33 94.937C3950.41 108.855 3988.63 100.736 4002.6 94.937V167.078C4038.16 188.113 4062 226.851 4062 271.157C4062 337.897 4007.9 392 3941.16 392H1952.84C1901.73 392 1858.03 360.267 1840.37 315.428H1802V94.937C1814.92 89.1377 1851.04 81.0187 1892.12 94.937C1933.2 108.855 1971.41 100.736 1985.38 94.937C1998.31 89.1377 2034.43 81.0187 2075.5 94.937C2116.58 108.855 2154.79 100.736 2168.77 94.937C2181.69 89.1377 2217.81 81.0187 2258.89 94.937C2298.15 108.241 2345.45 88.387 2361.75 81.5446L2361.75 81.5433C2362.5 81.2281 2363.18 80.9406 2363.8 80.6852C2376.72 74.8859 2412.84 66.7669 2453.92 80.6852C2495 94.6035 2521.56 100.736 2535.53 94.937C2548.46 89.1377 2584.57 81.0187 2625.65 94.937C2666.73 108.855 2704.94 100.736 2718.92 94.937C2731.84 89.1377 2767.96 81.0187 2809.04 94.937C2850.11 108.855 2888.33 100.736 2902.3 94.937C2915.22 89.1377 2951.34 81.0187 2992.42 94.937C3031.67 108.237 3078.92 88.3995 3095.23 81.5509C3095.99 81.2327 3096.68 80.9425 3097.3 80.685Z"
              fill="#6C93C5"
            />
          </g>
          <g id="wave_two">
            <path
              d="M50.9888 122.169C63.2871 117.514 97.6556 110.996 136.744 122.169C175.832 133.343 212.195 126.825 225.491 122.169C237.789 117.514 272.157 110.996 311.246 122.169C350.334 133.343 386.697 126.825 399.993 122.169C412.291 117.514 446.659 110.996 485.748 122.169C524.836 133.343 561.199 126.825 574.494 122.169C586.793 117.514 621.161 110.996 660.25 122.169C699.338 133.343 735.701 126.825 748.996 122.169C761.294 117.514 795.663 110.996 834.751 122.169C873.84 133.343 910.203 126.825 923.498 122.169C935.796 117.514 970.165 110.996 1009.25 122.169C1048.34 133.343 1084.7 126.825 1098 122.169C1110.3 117.514 1144.67 110.996 1183.76 122.169C1222.84 133.343 1259.21 126.825 1272.5 122.169C1284.8 117.514 1319.17 110.996 1358.26 122.169C1397.35 133.343 1433.71 126.825 1447 122.169C1459.3 117.514 1493.67 110.996 1532.76 122.169C1571.85 133.343 1608.21 126.825 1621.51 122.169C1633.8 117.514 1668.17 110.996 1707.26 122.169C1746.35 133.343 1782.71 126.825 1796.01 122.169C1808.31 117.514 1842.67 110.996 1881.76 122.169C1920.85 133.343 1957.21 126.825 1970.51 122.169C1982.81 117.514 2017.18 110.996 2056.26 122.169C2095.35 133.343 2131.72 126.825 2145.01 122.169V203.777C2153.89 218.425 2159 235.61 2159 253.989C2159 307.567 2115.57 351 2061.99 351H134.011C80.4332 351 37 307.567 37 253.989C37 235.61 42.1109 218.425 50.9888 203.778V122.169Z"
              fill="#C8E7F7"
            />
            <path
              d="M2000.99 114.353C2013.29 109.559 2047.66 102.847 2086.74 114.353C2125.83 125.859 2162.2 119.147 2175.49 114.353C2187.79 109.559 2222.16 102.847 2261.25 114.353C2300.33 125.859 2336.7 119.147 2349.99 114.353C2362.29 109.559 2396.66 102.847 2435.75 114.353C2474.84 125.859 2511.2 119.147 2524.49 114.353C2536.79 109.559 2571.16 102.847 2610.25 114.353C2649.34 125.859 2685.7 119.147 2699 114.353C2711.29 109.559 2745.66 102.847 2784.75 114.353C2823.84 125.859 2860.2 119.147 2873.5 114.353C2885.8 109.559 2920.16 102.847 2959.25 114.353C2998.34 125.859 3034.7 119.147 3048 114.353C3060.3 109.559 3094.67 102.847 3133.76 114.353C3172.84 125.859 3209.21 119.147 3222.5 114.353C3234.8 109.559 3269.17 102.847 3308.26 114.353C3347.35 125.859 3383.71 119.147 3397 114.353C3409.3 109.559 3443.67 102.847 3482.76 114.353C3521.85 125.859 3558.21 119.147 3571.51 114.353C3583.8 109.559 3618.17 102.847 3657.26 114.353C3696.35 125.859 3732.71 119.147 3746.01 114.353C3758.31 109.559 3792.67 102.847 3831.76 114.353C3870.85 125.859 3907.21 119.147 3920.51 114.353C3932.81 109.559 3967.18 102.847 4006.26 114.353C4045.35 125.859 4081.72 119.147 4095.01 114.353V199.086C4103.9 214.017 4109 231.463 4109 250.1C4109 305.273 4064.27 350 4009.1 350H2086.9C2031.73 350 1987 305.273 1987 250.1C1987 231.463 1992.1 214.018 2000.99 199.086V114.353Z"
              fill="#C8E7F7"
            />
          </g>
          <g id="wave_one">
            <path
              d="M13.9888 171.484C26.2871 166.591 60.6556 159.741 99.744 171.484C138.832 183.228 175.195 176.378 188.491 171.484C200.789 166.591 235.157 159.741 274.246 171.484C313.334 183.228 349.697 176.378 362.993 171.484C375.291 166.591 409.659 159.741 448.748 171.484C487.836 183.228 524.199 176.378 537.494 171.484C549.793 166.591 584.161 159.741 623.25 171.484C662.338 183.228 698.701 176.378 711.996 171.484C724.294 166.591 758.663 159.741 797.751 171.484C836.84 183.228 873.203 176.378 886.498 171.484C898.796 166.591 933.165 159.741 972.253 171.484C1011.34 183.228 1047.7 176.378 1061 171.484C1073.3 166.591 1107.67 159.741 1146.76 171.484C1185.84 183.228 1222.21 176.378 1235.5 171.484C1247.8 166.591 1282.17 159.741 1321.26 171.484C1360.35 183.228 1396.71 176.378 1410 171.484C1422.3 166.591 1456.67 159.741 1495.76 171.484C1534.85 183.228 1571.21 176.378 1584.51 171.484C1596.8 166.591 1631.17 159.741 1670.26 171.484C1709.35 183.228 1745.71 176.378 1759.01 171.484C1771.31 166.591 1805.67 159.741 1844.76 171.484C1883.85 183.228 1920.21 176.378 1933.51 171.484C1945.81 166.591 1980.18 159.741 2019.26 171.484C2058.35 183.228 2094.72 176.378 2108.01 171.484V258.456C2116.9 273.588 2122 291.216 2122 310.036C2122 366.349 2076.35 412 2020.04 412H101.964C45.651 412 0 366.349 0 310.036C0 291.217 5.09822 273.588 13.9888 258.457V171.484Z"
              fill="#EDF9FF"
            />
            <path
              d="M2001 171.484C2013.3 166.591 2047.67 159.741 2086.76 171.484C2125.84 183.228 2162.21 176.378 2175.5 171.484C2187.8 166.591 2222.17 159.741 2261.26 171.484C2300.35 183.228 2336.71 176.378 2350 171.484C2362.3 166.591 2396.67 159.741 2435.76 171.484C2474.85 183.228 2511.21 176.378 2524.51 171.484C2536.8 166.591 2571.17 159.741 2610.26 171.484C2649.35 183.228 2685.71 176.378 2699.01 171.484C2711.31 166.591 2745.67 159.741 2784.76 171.484C2823.85 183.228 2860.21 176.378 2873.51 171.484C2885.81 166.591 2920.18 159.741 2959.26 171.484C2998.35 183.228 3034.72 176.378 3048.01 171.484C3060.31 166.591 3094.68 159.741 3133.77 171.484C3172.85 183.228 3209.22 176.378 3222.51 171.484C3234.81 166.591 3269.18 159.741 3308.27 171.484C3347.36 183.228 3383.72 176.378 3397.01 171.484C3409.31 166.591 3443.68 159.741 3482.77 171.484C3521.86 183.228 3558.22 176.378 3571.52 171.484C3583.81 166.591 3618.18 159.741 3657.27 171.484C3696.36 183.228 3732.72 176.378 3746.02 171.484C3758.32 166.591 3792.69 159.741 3831.77 171.484C3870.86 183.228 3907.23 176.378 3920.52 171.484C3932.82 166.591 3967.19 159.741 4006.28 171.484C4045.36 183.228 4081.73 176.378 4095.02 171.484V258.476C4103.91 273.603 4109 291.224 4109 310.036C4109 366.349 4063.35 412 4007.04 412H2088.96C2032.65 412 1987 366.349 1987 310.036C1987 291.209 1992.1 273.574 2001 258.438V171.484Z"
              fill="#EDF9FF"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
