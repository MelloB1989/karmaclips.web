import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileItem } from "@/app/dashboard/[c]/assets";
import { Download, Trash, Edit2, Share } from "lucide-react";

interface FileListProps {
  files: FileItem[];
  onDelete: (url: string) => void;
  onRename: (oldUrl: string, newName: string) => void;
  onShare: (url: string) => void;
  onSelectionChange: (selectedFiles: FileItem[]) => void;
}

export function FileList({
  files,
  onDelete,
  onRename,
  onShare,
  onSelectionChange,
}: FileListProps) {
  const [selectedFiles, setSelectedFiles] = useState<FileItem[]>([]);
  const [editingFile, setEditingFile] = useState<string | null>(null);
  const [newFileName, setNewFileName] = useState("");

  const handleSelectAll = (checked: boolean) => {
    const newSelectedFiles = checked ? files : [];
    setSelectedFiles(newSelectedFiles);
    onSelectionChange(newSelectedFiles);
  };

  const handleSelectFile = (file: FileItem, checked: boolean) => {
    const newSelectedFiles = checked
      ? [...selectedFiles, file]
      : selectedFiles.filter((f) => f.url !== file.url);
    setSelectedFiles(newSelectedFiles);
    onSelectionChange(newSelectedFiles);
  };

  const handleRename = (file: FileItem) => {
    if (newFileName && newFileName !== file.pathname) {
      onRename(file.url, newFileName);
      setEditingFile(null);
      setNewFileName("");
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <Checkbox
              checked={selectedFiles.length === files.length}
              onCheckedChange={handleSelectAll}
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Last Modified</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.url}>
            <TableCell>
              <Checkbox
                checked={selectedFiles.some((f) => f.url === file.url)}
                onCheckedChange={(checked) =>
                  handleSelectFile(file, checked as boolean)
                }
              />
            </TableCell>
            <TableCell>
              {editingFile === file.url ? (
                <Input
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  onBlur={() => handleRename(file)}
                  onKeyDown={(e) => e.key === "Enter" && handleRename(file)}
                  autoFocus
                />
              ) : (
                file.pathname
              )}
            </TableCell>
            <TableCell>{file.size} bytes</TableCell>
            <TableCell>{new Date(file.uploadedAt).toLocaleString()}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(file.url, "_blank")}
              >
                <Download className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(file.url)}
              >
                <Trash className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setEditingFile(file.url);
                  setNewFileName(file.pathname);
                }}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onShare(file.url)}
              >
                <Share className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
