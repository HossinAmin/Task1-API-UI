import { Icon } from "@iconify/react";
import React, { useState } from "react";
import FormContainer from "./common/FormContainer";

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
  };

  return (
    <FormContainer title="Upload cover image">
      <div className="relative h-full w-full p-5">
        {!selectedFile && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-2">
            <Icon className="text-3xl" icon="icon-park-outline:upload" />
            <input
              type="file"
              accept="image/*"
              placeholder="none"
              onChange={handleFileChange}
              className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
            />
            <p className="text-center font-semibold">Upload cover image</p>
            <p className="text-text-sub text-xs">
              16:9 ratio is recommended. Max image size 1mb
            </p>
          </div>
        )}

        {selectedFile && (
          <div className="flex h-full w-full cursor-pointer flex-col gap-5 bg-white ">
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview-image"
              className="aspect-video w-full"
            />
            <div
              onClick={handleDelete}
              className="text-error flex w-full items-center text-xs font-bold hover:opacity-50 active:opacity-90 "
            >
              <Icon className="text-xl" icon="ic:sharp-close" />
              <p>Delete & re-upload</p>
            </div>
          </div>
        )}
      </div>
    </FormContainer>
  );
};

export default FileUploader;
