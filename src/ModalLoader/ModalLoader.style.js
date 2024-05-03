import styled from "styled-components";

export const ModalLoaderStyle=styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 99999;
.loader{
    width: 50px;
    height: 50px;
    overflow: hidden;
}
.circle-loader{
  width: 50px;
  height: 50px;
  vertical-align: middle;
  pointer-events: none;
  border: 4px solid #0E286A;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: 0.5s circleLoader linear infinite;
  position: relative;
}
  
  @keyframes circleLoader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`