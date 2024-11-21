import {
  Box,
  Pagination,
  Stack,
  Typography,
  Select,
  MenuItem,
  PaginationItem,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

interface Props {
  limit: number;
  page: number;
  total: number;
  handlePageChange: (newPage: number) => void;
  handleLimitChange?: (value: number | string) => void;
}

const TablePagination = ({
  limit,
  page,
  total,
  handlePageChange,
  handleLimitChange,
}: Props): JSX.Element => {
  const totalPages = Math.ceil(total / limit);
  const [selectedRows, setselectedRows] = useState(12);
  const startItemIndex = (page - 1) * limit + 1;
  const endItemIndex = Math.min(page * limit, total);

  return (
    <Stack
      direction={{ xs: "column", sm: "row", md: "column", lg: "row" }}
      alignItems={{ xs: "start", sm: "center", md: "start", lg: "center" }}
      justifyContent="space-between"
      sx={{
        padding: "27px 16px",
        backgroundColor: "#fff",
        borderRadius: "8px",
      }}
      spacing={2}
    >
      <Typography fontWeight={"400"} variant="body2" color="#ADAFB9">
        Showing {startItemIndex} to {endItemIndex} of {total}
      </Typography>

      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_event, newPage: number) => {
            handlePageChange(newPage);
          }}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: ArrowBackIosNewIcon,
                next: ArrowForwardIosIcon,
              }}
              {...item}
              sx={{
                "&.Mui-selected , &.Mui-selected:hover": {
                  backgroundColor: "#052223",
                  color: "#fff !important",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  border: "unset",
                },
                "&.MuiPaginationItem-ellipsis": {
                  color: "#AEB0B4",
                },
                "&.MuiPaginationItem-text": {
                  color: "#AEB0B4",
                },
                "&.MuiPaginationItem-previousNext": {
                  border: "1px solid #E5E7EB",
                  margin: "0px 20px",
                },
                "& .MuiPaginationItem-icon": {
                  color: "#000000",
                  width: "15px",
                },
                "& .MuiPagination-ul": {
                  border: "2px solid #C0C1C5",
                },

                borderRadius: "8px",
                margin: "0 4px",
              }}
            />
          )}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          fontWeight={"400"}
          variant="body2"
          sx={{ marginRight: "8px", color: "#ADAFB9" }}
        >
          Show
        </Typography>
        <Select
          value={selectedRows}
          onChange={(event: any) => {
            setselectedRows(event.target.value);
            if (handleLimitChange) {
              handleLimitChange(event.target.value);
            }
          }}
          renderValue={() => {
            return <Box px={1}>{selectedRows} Rows</Box>;
          }}
          sx={{
            fontSize: "12px",
            height: "40px",
            "& .MuiSelect-select": {
              padding: "4px 8px",
              paddingLeft: "12px",
              paddingRight: "12px",
            },
          }}
        >
          {[12, 20, 30, 50].map((rows) => (
            <MenuItem key={rows} value={rows}>
              {rows} Rows
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Stack>
  );
};

export default TablePagination;
