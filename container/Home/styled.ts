import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9cc9fe;
  h1 {
    color: #333333;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #snore-bubble {
    animation-name: bubble-stretch;
    transform-origin: bottom;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-box: fill-box;
    animation-delay: 1.2;
  }

  @keyframes bubble-stretch {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(2);
    }
  }
  #mouth {
    animation-name: mouth-stretch;
    transform-origin: center;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-box: fill-box;
    animation-delay: 1.2;
  }

  @keyframes mouth-stretch {
    0% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(0.6);
    }
  }

  #snore-bubble {
    animation-name: stretch;
    transform-origin: bottom;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    transform-box: fill-box;
    animation-delay: 2;
  }

  @keyframes stretch {
    0% {
      transform: scale(0.2);
    }

    100% {
      transform: scale(2);
    }
  }

  #body {
    animation-name: body-stretch;
    transform-origin: bottom;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    transform-box: fill-box;
    animation-direction: alternate;
    animation-delay: 2;
  }

  @keyframes body-stretch {
    0% {
      transform: scale(1.02);
    }

    100% {
      transform: scale(1);
    }
  }

  #right-hand {
    animation-name: move-up;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 1.6s;
    animation-delay: 2;
  }

  @keyframes move-up {
    0% {
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(0);
    }
  }

  #left-foot,
  #right-foot {
    animation-name: wiggle;
    transform-origin: bottom;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 1.6s;
    animation-delay: 2.5;
  }

  @keyframes wiggle {
    from {
      transform: rotate(-1.5deg) translateY(-5px);
    }
    to {
      transform: rotate(0deg) translateY(0px);
    }
  }

  /* body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #fbf9f9;
  }
  h1 {
    color: #dd2c2a;
  }
  .baymax {
    -webkit-animation: baymax 5s infinite ease-in-out;
    animation: baymax 5s infinite ease-in-out;
    position: relative;
    overflow: hidden;
    width: 405px;
    height: 405px;
    background-color: #dd2c2a;
    border-radius: 50%;
    border: 12px solid #000;
  }
  .baymax:after {
    content: "";
    border-radius: 50%;
    box-shadow: inset 0 -35px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 3;
    width: 405px;
    height: 405px;
  }
  .head {
    -webkit-animation: head 5s infinite cubic-bezier(0.23, 1, 0.32, 1);
    animation: head 5s infinite cubic-bezier(0.23, 1, 0.32, 1);
    position: absolute;
    z-index: 2;
    width: 210px;
    height: 170px;
    border-radius: 50%;
    background-color: #fff;
    border: 12px solid #000;
    left: 50%;
  }
  .eyes {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    display: flex;
    justify-content: space-between;
    background-color: #000;
    height: 2px;
  }
  .eyes:before,
  .eyes:after {
    content: "";
    background-color: #000;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  .eyes:before {
    transform: translate(-50%, -60%) skewX(-5deg);
  }
  .eyes:after {
    transform: translate(50%, -60%) skewX(5deg);
  }
  .body {
    -webkit-animation: body 5s infinite cubic-bezier(0.23, 1, 0.32, 1);
    animation: body 5s infinite cubic-bezier(0.23, 1, 0.32, 1);
    position: absolute;
    overflow: hidden;
    bottom: 0;
    left: 50%;
    width: 250px;
    height: 280px;
    background-color: #fff;
    border-radius: 50% 50% 0 0;
    border: 12px solid #000;
    border-bottom-width: 0;
  }
  .hand {
    -webkit-animation: hand 5s infinite ease;
    animation: hand 5s infinite ease;
    position: absolute;
    z-index: 1;
    left: 38px;
    border: 12px solid #000;
    width: 80px;
    height: 130px;
    background-color: #fff;
    border-radius: 70px 70px 0 0;
  }
  .finger {
    -webkit-animation: finger 5s infinite ease;
    animation: finger 5s infinite ease;
    position: absolute;
    left: 50%;
    width: 36px;
    height: 60px;
    border-radius: 36px 36px 0 0;
    border: 12px solid #000;
    border-bottom-width: 0;
    background-color: #fff;
    transform: translateX(-50%);
  }
  .finger:before,
  .finger:after {
    position: absolute;
    bottom: -6px;
    content: "";
    background-color: #000;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .finger:before {
    left: -12px;
  }
  .finger:after {
    right: -12px;
  }
  @-webkit-keyframes baymax {
    0%,
    3% {
      transform: scale(0);
      filter: blur(5px);
    }
    11%,
    82% {
      transform: scale(1);
      filter: blur(0);
    }
    93%,
    100% {
      transform: scale(0);
      filter: blur(5px);
    }
  }
  @keyframes baymax {
    0%,
    3% {
      transform: scale(0);
      filter: blur(5px);
    }
    11%,
    82% {
      transform: scale(1);
      filter: blur(0);
    }
    93%,
    100% {
      transform: scale(0);
      filter: blur(5px);
    }
  }
  @-webkit-keyframes head {
    0%,
    11% {
      transform: translateX(-50%);
      bottom: -100%;
    }
    39%,
    92% {
      bottom: 170px;
      transform: translateX(-50%);
    }
    93%,
    100% {
      bottom: 170px;
      transform: scale(2) translateX(-50%);
    }
  }
  @keyframes head {
    0%,
    11% {
      transform: translateX(-50%);
      bottom: -100%;
    }
    39%,
    92% {
      bottom: 170px;
      transform: translateX(-50%);
    }
    93%,
    100% {
      bottom: 170px;
      transform: scale(2) translateX(-50%);
    }
  }
  @-webkit-keyframes body {
    0%,
    13% {
      transform: translateX(-50%);
      bottom: -100%;
    }
    39%,
    92% {
      bottom: 0px;
      transform: translateX(-50%);
    }
    93%,
    100% {
      bottom: 0px;
      transform: translateX(-50%);
    }
  }
  @keyframes body {
    0%,
    13% {
      transform: translateX(-50%);
      bottom: -100%;
    }
    39%,
    92% {
      bottom: 0px;
      transform: translateX(-50%);
    }
    93%,
    100% {
      bottom: 0px;
      transform: translateX(-50%);
    }
  }
  @-webkit-keyframes hand {
    0%,
    40% {
      bottom: -100%;
    }
    62%,
    93% {
      bottom: 0px;
    }
    100% {
      bottom: 0px;
    }
  }
  @keyframes hand {
    0%,
    40% {
      bottom: -100%;
    }
    62%,
    93% {
      bottom: 0px;
    }
    100% {
      bottom: 0px;
    }
  }
  @-webkit-keyframes finger {
    0%,
    50% {
      top: -16px;
    }
    62%,
    93% {
      top: -50px;
    }
    100% {
      top: -50px;
    }
  }
  @keyframes finger {
    0%,
    50% {
      top: -16px;
    }
    62%,
    93% {
      top: -50px;
    }
    100% {
      top: -50px;
    }
  } */
`;
