import Theme from './Theme';
import {
  OnboardingSvg1,
  OnboardingSvg2,
  OnboardingSvg3,
  OnboardingSvg4,
  OnboardingHeader1,
  OnboardingHeader2,
  OnboardingHeader3,
  OnboardingHeader4,
} from "../svg";

const {colors}=Theme;

const slides = [
    {
      key: "1",
      header: <OnboardingHeader1 />,
      svg: <OnboardingSvg1 />,
      title: "Confirm Your Driver",
      text: "Huge delivery network. Helps you find comforable, safe and cheap ride.",
      color: {
        main: colors.green.brand,
        candy: colors.green.candy,
      },
    },
    {
      key: "two",
      title: "Request Ride",
      header: <OnboardingHeader2 />,
      svg: <OnboardingSvg2 />,
      text: "Huge delivery network. Helps you find comforable, safe and cheap ride.",
      color: {
        main: colors.blue.brand,
        candy: colors.blue.candy,
      },
    },
    {
      key: "three",
      title: "Track Your Ride",
      header: <OnboardingHeader3 />,
      svg: <OnboardingSvg3 />,
      text: "Huge delivery network. Helps you find comforable, safe and cheap ride.",
      color: {
        main: colors.red.brand,
        candy: colors.red.candy,
      },
    },
    {
      key: "four",
      title: "Earn Through Pooling",
      header: <OnboardingHeader4 />,
      svg: <OnboardingSvg4 />,
      text: "Huge delivery network. Helps you find comforable, safe and cheap ride.",
      color: {
        main: colors.yellow.brand,
        candy: colors.yellow.candy,
      },
    },
  ];
export default slides