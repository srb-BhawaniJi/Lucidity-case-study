import React from "react";
import { ModalLoaderStyle } from "./ModalLoader.style";

const ModalLoader = (props) => {
  const { isActive } = props;
  if (!isActive) return null;
  return (<ModalLoaderStyle {...props}>
    <div className="loader">
      <div class="circle-loader"></div>
    </div>
  </ModalLoaderStyle>
  );
}

export default ModalLoader;