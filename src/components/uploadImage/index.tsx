import React from "react";
import {
  FileLabel,
  FileEdit,
  FileImg,
  FileImage,
} from "./styles";

import Edit from "../icons/EditIcon.svg";
import NoImage from "../icons/NoImage.svg";

export type IUploadImage = {
  img: string | undefined;
  onChange: (file: string, target: HTMLInputElement) => void;
};

export const UploadImage: React.FC<IUploadImage> = ({ onChange, img }) => {
  const handleChangeImage = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file as Blob);

    reader.onloadend = function (e: any) {
      onChange(e.target.result, target);
    }.bind(this);
  };

  return (
    <FileLabel>
      <input type="file" onChange={handleChangeImage} />
      <FileEdit>
        <FileImg src={Edit.src} />
      </FileEdit>
      {!img ? (
        <FileImage src={NoImage.src} />
      ) : (
        <FileImage src={img} />
      )}
    </FileLabel>
  );
};
