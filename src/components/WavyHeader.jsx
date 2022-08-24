import React from 'react';
import Svg, { Path } from "react-native-svg"

import {Theme} from './../constants'


export default function WavyHeader({ navigation }) {
  function onPress() {
    console.log('ham pressed')
  }
  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
        viewBox="0 0 1440 559.96"
        width={null}
        height={140}
      >
        <Path
          d="M0 700V233c55.577-51.136 111.154-102.271 187-83s171.963 108.95 247 138c75.037 29.05 128.996-2.528 179-33 50.004-30.472 96.053-59.838 172-66 75.947-6.162 181.794 10.88 253 31 71.206 20.12 107.773 43.32 169 46 61.227 2.68 147.113-15.16 233-33v467z"
          strokeWidth={0}
          fill={Theme.colors.primary}
          fillOpacity={0.53}
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 350)"
        />
        <Path
          d="M0 700V466c91.749 14.601 183.497 29.202 243 11 59.503-18.202 86.76-69.208 154-50s174.462 108.63 258 108c83.538-.63 143.392-91.313 204-139 60.608-47.687 121.971-52.377 180-8 58.029 44.377 112.722 137.822 179 159 66.278 21.178 144.139-29.911 222-81v234z"
          strokeWidth={0}
          fill={Theme.colors.primary}
          className="transition-all duration-300 ease-in-out delay-150 path-1"
          transform="rotate(-180 720 350)"
        />
      </Svg>
    </>
  );
}