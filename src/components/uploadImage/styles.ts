import styled from "styled-components";

export const FileLabel = styled.label`
  input {
    display: none;
  }

  height: 124px;
  width: 124px;
  border-radius: 62px;
  cursor: pointer;
  position: relative;
`;

export const FileEdit = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #131419;
  top: 0px;
  right: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FileImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
`;

export const FileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
