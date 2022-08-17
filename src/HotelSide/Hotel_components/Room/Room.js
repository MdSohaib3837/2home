import { Button } from "@mui/material";
import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useNavigate } from "react-router-dom";
import Header from "../../../pages/header/header";
import Navbar from "../navbar/Navbar";

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  { field: "Room_Name", headerName: "Room Name", width: 180 },
  { field: "room_type", headerName: "Room Type", width: 150 },
  {
    field: "sameRoom",
    headerName: "Similar Rooms",
    type: "number",
    width: 200,
  },
  { field: "hotelname", headerName: "Hotel Name", width: 200 },
  { field: "action", headerName: "Action", width: 150 },
];
const rows = [
  { id: 1, room_type: "single", sameRoom: "4", Room_Name: "1" },
  { id: 2, room_type: "single", sameRoom: "5", Room_Name: "11" },
  { id: 3, room_type: "single", sameRoom: "7", Room_Name: "21" },
  { id: 4, room_type: "single", sameRoom: null, Room_Name: "31" },
  { id: 5, room_type: "single", sameRoom: "2", Room_Name: "41" },
  { id: 6, room_type: "Double", sameRoom: "4", Room_Name: "51" },
];

const Room = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="grid grid-cols-12">
        <div class="col-span-2 ">
          <Navbar />
        </div>
        <div class="col-span-10 ml-4 pr-4">
          <div className="">
            <Header />
          </div>
          <div className="ml-4 pr-4">
            <div className="flex flex-row mt-8">
              <h1 className="w-full font-[OpenSans] text-3xl text-black justify-center">
                Room
              </h1>
              <div>
                <Button
                  variant="contained"
                  className="!bg-[#003030] !text-white h-8 !mr-16 w-full !rounded-2xl"
                  onClick={() => {
                    navigate("/Room_detail");
                  }}
                >
                  +Add Room Type
                </Button>
              </div>
            </div>
            <div className="section-container w-full pt-8">
              <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
                Rooms
              </div>
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
