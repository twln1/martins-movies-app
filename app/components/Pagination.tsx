"use client";
import { Pagination as MUIPagination, PaginationProps } from "@mui/material";

interface PaginationControlsProps extends PaginationProps {
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export default function PaginationControls({ onPageChange, ...props }: PaginationControlsProps) {
  const { page, count } = props;

  return (
    <div className="flex justify-center py-8">
      <MUIPagination
        siblingCount={1}
        boundaryCount={0}
        defaultPage={1}
        count={count}
        page={page}
        onChange={onPageChange}
        color="secondary"
        size="large"
      />
    </div>
  );
}
