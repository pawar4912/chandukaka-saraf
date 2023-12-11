import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import web from "../../images/Group265.png";
import Sidebar from "../Common/Sidebar";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: '100%',
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: '100%',
    boxSizing: "border-box",
  },
}));

{
  /* table  */
}
function createData(name, names, data, quantity, Rs) {
  return { name, names, data, quantity, Rs };
}
const rows = [
  createData(web, "Ganesh Siliver Coin", "24KT | 1GM", "2", "70"),
  createData(web, "Ganesh Siliver Coin", "24KT | 1GM", "2", "70"),
];
function createData1(name, names, data, quantity, Rs) {
  return { name, names, data, quantity, Rs };
}
const rows1 = [
  createData1(web, "Ganesh Siliver Coin", "24KT | 1GM", "2", "70"),
];

export default function MyOrder() {
  return (
    <div className="d-flex">
      <Sidebar />
      {/* order page*/}
      <div className="p-3 myorder-container">
        <h5>MY ORDERS</h5>
        <div className="p-4">
          <div className="d-flex p-3" style={{ backgroundColor: "rgb(254 251 255)" }}>
            <div className="col-6">
              <p>
                <b>Order Id :#352268 </b>
                <br></br>
                <small>
                  Place on 27 oct 2023 <b>Total cost ₹ :140 </b>
                </small>
              </p>
            </div>
            <div className="col-6 text-end">
              <div>
                <button className="status-btn">SHIPEED</button>
                <br></br>
                <small className="delivery-desc">Expected delivered on 30th oct 2023</small>
              </div>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table className="table-wrapper" aria-label="caption table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <div className="d-flex">
                        <div>
                          <img width={60} height={60} src={web} />
                        </div>
                        <div className="ms-3">
                          <div>
                            <b> {row.names}</b>
                          </div>
                          <div>{row.data}</div>
                          <div>Quantity: {row.quantity}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      ₹ {row.Rs}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="p-4">
          <div className="d-flex p-3" style={{ backgroundColor: "rgb(254 251 255)" }}>
            <div className="col-6">
              <p>
                <b>Order Id :#352268 </b>
                <br></br>
                <small>
                  Place on 27 oct 2023 <b>Total cost ₹ :140 </b>
                </small>
              </p>
            </div>
            <div className="col-6 text-end">
              <div>
                <button className="status-btn">DELIVERD</button>
                <br></br>
                <small  className="delivery-desc">Deliverd on 5th Aug 2023</small>
              </div>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table  className="table-wrapper" aria-label="caption table">
              <TableBody>
                {rows1.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <div className="d-flex">
                        <div>
                          <img width={60} height={60} src={web} />
                        </div>
                        <div className="ms-3">
                          <div>
                            <b> {row.names}</b>
                          </div>
                          <div>{row.data}</div>
                          <div>Quantity: {row.quantity}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      ₹ {row.Rs}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
