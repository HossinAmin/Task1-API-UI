// FileUploader.tsx
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
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
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      {!selectedFile && (
        <>
          <UploadOutlined className="text-5xl" />

          <input
            type="file"
            accept="image/*"
            placeholder="none"
            onChange={handleFileChange}
            className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
          />
          <p className="text-center text-2xl font-semibold">
            Upload cover image
          </p>
          <p className="ant-upload-hint">
            16:9 ratio is recommended. Max image size 1mb
          </p>
        </>
      )}

      {selectedFile && (
        <div className="felx h-full w-full flex-col gap-2 bg-white">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview-image"
            className="h-1/2 "
          />
          <div className="flex w-full justify-between">
            <p>Delete & Reupload</p>
            <button onClick={handleDelete}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
