import React from 'react'

interface Props {
  className?: string
}

export function ShopLogo({ className }: Props) {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="23.375"
        viewBox="0 0 22 23.375"
      >
        <path
          id="logo"
          d="M11,23.375a10.613,10.613,0,0,1-7.778-3.423A11.989,11.989,0,0,1,0,11.687,11.989,11.989,0,0,1,3.222,3.423,10.613,10.613,0,0,1,11,0H22V12.265h-.013C21.7,18.494,16.875,23.375,11,23.375Zm.917-11.11v9.114a9.442,9.442,0,0,0,8.234-9.114ZM11,1.948c-5.054,0-9.167,4.369-9.167,9.739a9.5,9.5,0,0,0,8.25,9.692V10.317H20.166V1.948Z"
          fill="#1b2437"
        />
      </svg>
    </>
  )
}

export function Instagram({ className }: Props) {
  return (
    <>
      <svg
        className={className}
        id="instagram_icn__1"
        data-name="instagram_icn _1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g id="instagram_icn__1-2" data-name="instagram_icn _1">
          <rect id="bg" width="24" height="24" fill="none" />
          <path
            id="instagram_icn"
            d="M8,16c-2.134,0-2.422-.009-3.3-.047a5.905,5.905,0,0,1-1.941-.373,3.956,3.956,0,0,1-1.416-.922A3.913,3.913,0,0,1,.419,13.24,5.866,5.866,0,0,1,.047,11.3C.009,10.444,0,10.16,0,8,0,5.82.009,5.561.05,4.7A5.883,5.883,0,0,1,.422,2.76a3.954,3.954,0,0,1,.922-1.417A3.886,3.886,0,0,1,2.764.419,5.894,5.894,0,0,1,4.705.047C5.56.009,5.844,0,8,0c2.183,0,2.441.009,3.3.05a5.9,5.9,0,0,1,1.941.372,3.966,3.966,0,0,1,1.416.922,3.888,3.888,0,0,1,.925,1.419A5.877,5.877,0,0,1,15.96,4.7C16,5.562,16,5.839,16,8c0,2.133-.009,2.421-.047,3.3a5.9,5.9,0,0,1-.373,1.94,4.1,4.1,0,0,1-2.341,2.341,5.879,5.879,0,0,1-1.941.373C10.422,15.991,10.134,16,8,16ZM8.009,1.454c-2.113,0-2.369.008-3.232.047a4.374,4.374,0,0,0-1.485.275,2.464,2.464,0,0,0-.919.6,2.45,2.45,0,0,0-.6.919A4.421,4.421,0,0,0,1.5,4.776c-.039.859-.047,1.115-.047,3.232s.008,2.369.047,3.232a4.408,4.408,0,0,0,.275,1.484,2.478,2.478,0,0,0,.6.919,2.488,2.488,0,0,0,.919.6,4.422,4.422,0,0,0,1.485.274c.86.039,1.116.047,3.233.047s2.37-.008,3.232-.047a4.409,4.409,0,0,0,1.485-.274,2.658,2.658,0,0,0,1.52-1.519,4.422,4.422,0,0,0,.274-1.485c.039-.863.047-1.119.047-3.228s-.008-2.37-.047-3.232a4.424,4.424,0,0,0-.274-1.485,2.478,2.478,0,0,0-.6-.919,2.474,2.474,0,0,0-.919-.6A4.386,4.386,0,0,0,11.242,1.5C10.383,1.462,10.127,1.454,8.009,1.454ZM7.946,12.171a3.947,3.947,0,1,1,3.946-3.946A3.951,3.951,0,0,1,7.946,12.171Zm0-6.507a2.56,2.56,0,1,0,2.561,2.561A2.563,2.563,0,0,0,7.946,5.664Zm4.1-.621a.921.921,0,1,1,.922-.922A.923.923,0,0,1,12.049,5.043Z"
            transform="translate(4 4)"
            fill="#1b2437"
          />
        </g>
      </svg>
    </>
  )
}

export function Twitter({ className }: Props) {
  return (
    <>
      <svg
        className={className}
        id="twitter_icn_1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <rect
          id="bg"
          width="24"
          height="24"
          transform="translate(0 0)"
          fill="none"
        />
        <path
          id="twitter_icn"
          d="M18,1.657a7.964,7.964,0,0,1-2.126.558A3.545,3.545,0,0,0,17.5.263a7.577,7.577,0,0,1-2.34.855A3.777,3.777,0,0,0,12.462,0,3.613,3.613,0,0,0,8.774,3.533a3.487,3.487,0,0,0,.086.806A10.606,10.606,0,0,1,1.253.644,3.441,3.441,0,0,0,.748,2.43,3.5,3.5,0,0,0,2.387,5.365,3.77,3.77,0,0,1,.72,4.93v.039A3.591,3.591,0,0,0,3.677,8.44a3.839,3.839,0,0,1-.968.116,3.4,3.4,0,0,1-.7-.06,3.708,3.708,0,0,0,3.448,2.461A7.628,7.628,0,0,1,.883,12.463,7.217,7.217,0,0,1,0,12.415,10.728,10.728,0,0,0,5.661,14a10.2,10.2,0,0,0,10.5-10.052c0-.156-.006-.307-.014-.457A7.2,7.2,0,0,0,18,1.657Z"
          transform="translate(3 6)"
          fill="#1b2437"
        />
      </svg>
    </>
  )
}

export function Facebook({ className }: Props) {
  return (
    <>
      <svg
        className={className}
        id="facebook_icn_1"
        xmlns="http://www.w3.org/2000/svg"
        width="28.758"
        height="24"
        viewBox="0 0 28.758 24"
      >
        <rect id="Rectangle" width="28.758" height="24" fill="none" />
        <path
          id="facebook_icn"
          d="M6.374,18V9H9.21l.376-3.1H6.374l0-1.552c0-.809.088-1.242,1.414-1.242H9.566V0H6.73C3.323,0,2.124,1.5,2.124,4.035V5.9H0V9H2.124v9Z"
          transform="translate(9.586 3)"
          fill="#1b2437"
        />
      </svg>
    </>
  )
}

export function Search({ className }: Props) {
  return (
    <>
      <svg
        className={className}
        id="search_icn_black"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <circle
          id="Oval"
          cx="7.5"
          cy="7.5"
          r="7.5"
          transform="translate(2 2)"
          fill="none"
          stroke="#1b2437"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M0,0,7,7"
          transform="translate(15 15)"
          fill="none"
          stroke="#1b2437"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
      </svg>
    </>
  )
}

export function Cart({ className }: Props) {
  return (
    <>
      <svg
        className={className}
        id="cart_icn"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <rect id="bg" width="24" height="24" fill="none" />
        <path
          id="cart_icn-2"
          data-name="cart_icn"
          d="M1.852,24A1.819,1.819,0,0,1,0,22.222a1.514,1.514,0,0,1,.009-.172L1.269,9.606A1.819,1.819,0,0,1,3.113,8H5V5.444A5.234,5.234,0,0,1,10,0a5.212,5.212,0,0,1,5,5.222l0,.222V8h1.886a1.819,1.819,0,0,1,1.844,1.606l1.26,12.444a1.718,1.718,0,0,1-.39,1.273,1.859,1.859,0,0,1-1.274.669c-.059.005-.12.008-.179.008ZM2,22H18L16.763,10H3.238ZM13,8V5.444A3.248,3.248,0,0,0,10,2,3.219,3.219,0,0,0,7,5.247l0,.2V8Z"
          transform="translate(2)"
          fill="#1b2437"
        />
      </svg>
    </>
  )
}

export function Arrow({ className }: Props) {
  return (
    <>
      <svg
        id="arrow_icn_small"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <rect id="bg" width="24" height="24" fill="none" />
        <path
          id="arrow"
          d="M0,0,8,8l8-8"
          transform="translate(4 8.397)"
          fill="none"
          stroke="#d1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
      </svg>
    </>
  )
}
