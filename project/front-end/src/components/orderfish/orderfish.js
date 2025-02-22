import "./order.css"

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from "@mui/material";
import { DataContext } from "../../data";
import { useContext } from "react";

function OrderFish() {
  const { orders,contacts } = useContext(DataContext); // orders ni contextdan olish

  return (
    <div className="admin-panel">
        <div className="product-booking">
        <Typography variant="h5" style={{ textAlign: "center", padding: "10px", background: "#007bff", color: "white", borderRadius: "12px 12px 0 0" }}>
          Buyurtmalar ro‘yxati
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead className="MuiTableCell-root">
              <TableRow>
                <TableCell className="MuiTableCell-head">ID</TableCell>
                <TableCell className="MuiTableCell-head">Name</TableCell>
                <TableCell  className="MuiTableCell-head">KG</TableCell>
                <TableCell  className="MuiTableCell-head">Sovusli</TableCell>
                <TableCell  className="MuiTableCell-head">Narx</TableCell>
                <TableCell  className="MuiTableCell-head">Nechta sovusli</TableCell>
                <TableCell  className="MuiTableCell-head">Nechta Baliq</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{order.baliq}</TableCell>
                    <TableCell>{order.KG}</TableCell>
                    <TableCell>{order.sovusli ? "Ha" : "Yo'q"}</TableCell>
                    <TableCell>{order.Narx} so‘m</TableCell>
                    <TableCell>{order.nsovusli}</TableCell>
                    <TableCell>{order.nechta}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} style={{ textAlign: "center", padding: "20px" }}>
                    Hozircha hech qanday buyurtma yo‘q
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        <div className="users-complaint">
        <Typography variant="h5" style={{ textAlign: "center", padding: "10px", background: "#28a745", color: "white", borderRadius: "12px 12px 0 0" }}>
          Foydalanuvchi murojaatlari
        </Typography>
            <TableContainer component={Paper}>
          <Table>
            <TableHead className="MuiTableHead-root">
              <TableRow>
              <TableCell className="MuiTableHead-head">ID</TableCell>
                <TableCell className="MuiTableHead-head">First Name</TableCell>
                <TableCell className="MuiTableHead-head">Last Name</TableCell>
                <TableCell className="MuiTableHead-head">Email</TableCell>
                <TableCell className="MuiTableHead-head">Number</TableCell>
                <TableCell className="MuiTableHead-head">subject</TableCell>
                <TableCell className="MuiTableHead-head">Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.length > 0 ? (
                contacts.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{order.FirstName}</TableCell>
                    <TableCell>{order.LastName}</TableCell>
                    <TableCell>{order.Email}</TableCell>
                    <TableCell>{order.Number}</TableCell>
                    <TableCell>{order.QuestionType}</TableCell>
                    <TableCell>{order.Message}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} style={{ textAlign: "center", padding: "20px",borderWeight:"2px" }}>
                    Hozircha hech qanday buyurtma yo‘q
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
    </div>
    
  );
}

export default OrderFish;
