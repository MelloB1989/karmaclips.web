"use client";

import { Button } from "@/components/ui/button";
import { Download, Trash } from "lucide-react";
import { FileItem } from "@/app/dashboard/[c]/assets";

interface BatchActionsProps {
  selectedFiles: FileItem[];
  onDownload: () => void;
  onDelete: () => Promise<void>;
}

export function BatchActions({
  selectedFiles,
  onDownload,
  onDelete,
}: BatchActionsProps) {
  const isDisabled = selectedFiles.length === 0;

  return (
    <div className="flex space-x-2">
      <Button onClick={onDownload} disabled={isDisabled}>
        <Download className="mr-2 h-4 w-4" />
        Download Selected ({selectedFiles.length})
      </Button>
      <Button onClick={onDelete} disabled={isDisabled} variant="destructive">
        <Trash className="mr-2 h-4 w-4" />
        Delete Selected ({selectedFiles.length})
      </Button>
    </div>
  );
}
