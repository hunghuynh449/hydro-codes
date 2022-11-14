import React from "react";
import Header from "../Header";
import { ChristmasWrapper } from "./styled";

const Christmas: React.FC = () => {
  return (
    <ChristmasWrapper>
      <Header />
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/three@0.115.0/build/three.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/three@0.115.0/examples/js/postprocessing/EffectComposer.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/three@0.115.0/examples/js/postprocessing/RenderPass.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/three@0.115.0/examples/js/postprocessing/ShaderPass.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/three@0.115.0/examples/js/shaders/CopyShader.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/three@0.115.0/examples/js/shaders/LuminosityHighPassShader.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/three@0.115.0/examples/js/postprocessing/UnrealBloomPass.js"
      ></script>
      <div id="overlay">
        <ul>
          <li className="title">Bé sẵn sàng chưa</li>
          <li>
            <button className="btn" id="btnA" type="button">
              Bắt đầu thuiii
            </button>
          </li>
        </ul>
      </div>
      <script type="text/javascript" src="/index.js" async></script>
    </ChristmasWrapper>
  );
};

export default Christmas;
