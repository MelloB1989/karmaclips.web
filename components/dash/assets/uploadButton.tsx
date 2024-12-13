"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface UploadButtonProps {
  onUpload: (file: File) => Promise<void>;
}

export function UploadButton({ onUpload }: UploadButtonProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        await onUpload(file);
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <Button
      onClick={() => document.getElementById("fileInput")?.click()}
      disabled={isUploading}
    >
      <Upload className="mr-2 h-4 w-4" />
      {isUploading ? "Uploading..." : "Upload"}
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </Button>
  );
}
