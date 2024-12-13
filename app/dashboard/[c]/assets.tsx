"use client";

import { useState, useEffect } from "react";
import { FileList } from "@/components/dash/assets/fileList";
import { UploadButton } from "@/components/dash/assets/uploadButton";
import { BatchActions } from "@/components/dash/assets/batchActions";
import { list, del, PutBlobResult } from "@vercel/blob";
import { toast } from "@/components/ui/use-toast";

export type FileItem = PutBlobResult & { selected?: boolean };

export default function FileBrowser() {
  const [files, setFiles] = useState<FileItem[]>([
    {
      url: "https://example.com/image.jpg",
      pathname: "image.jpg",
      size: 123456,
      type: "image/jpeg",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/image.jpg",
      pathname: "image.jpg",
      size: 123456,
      type: "image/jpeg",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
    {
      url: "https://example.com/video.mp4",
      pathname: "video.mp4",
      size: 123456,
      type: "video/mp4",
      created: new Date().toISOString(),
    },
  ]);
  const [selectedFiles, setSelectedFiles] = useState<FileItem[]>([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const { blobs } = await list();
      setFiles(blobs);
    } catch (error) {
      console.error("Error fetching files:", error);
      toast({
        title: "Error",
        description: "Failed to fetch files. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleUpload = async (file: File) => {
    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });
      const newBlob = await response.json();
      setFiles((prevFiles) => [...prevFiles, newBlob]);
      toast({
        title: "Success",
        description: "File uploaded successfully.",
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      toast({
        title: "Error",
        description: "Failed to upload file. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (url: string) => {
    try {
      await del(url);
      setFiles((prevFiles) => prevFiles.filter((file) => file.url !== url));
      toast({
        title: "Success",
        description: "File deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting file:", error);
      toast({
        title: "Error",
        description: "Failed to delete file. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleRename = async (oldUrl: string, newName: string) => {
    try {
      const response = await fetch("/api/rename", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ oldUrl, newName }),
      });
      const updatedBlob = await response.json();
      setFiles((prevFiles) =>
        prevFiles.map((file) => (file.url === oldUrl ? updatedBlob : file)),
      );
      toast({
        title: "Success",
        description: "File renamed successfully.",
      });
    } catch (error) {
      console.error("Error renaming file:", error);
      toast({
        title: "Error",
        description: "Failed to rename file. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShare = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Success",
      description: "File URL copied to clipboard.",
    });
  };

  const handleSelectionChange = (selectedFiles: FileItem[]) => {
    setSelectedFiles(selectedFiles);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">File Browser</h1>
      <div className="flex justify-between items-center mb-4">
        <UploadButton onUpload={handleUpload} />
        <BatchActions
          selectedFiles={selectedFiles}
          onDownload={() => {
            /* Implement batch download */
          }}
          onDelete={async () => {
            for (const file of selectedFiles) {
              await handleDelete(file.url);
            }
            setSelectedFiles([]);
          }}
        />
      </div>
      <FileList
        files={files}
        onDelete={handleDelete}
        onRename={handleRename}
        onShare={handleShare}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  );
}
