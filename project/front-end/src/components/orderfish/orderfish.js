import "./order.css"

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { DataContext } from "../../data";
import { useContext } from "react";

function OrderFish() {
  const { orders } = useContext(DataContext); // orders ni contextdan olish

  return (
    <div className="admin-panel">
        <div className="product-booking">
        
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>KG</TableCell>
                <TableCell>Sovusli</TableCell>
                <TableCell>Narx</TableCell>
                <TableCell>Nechta sovusli</TableCell>
                <TableCell>Nechta Baliq</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{order.KG}</TableCell>
                    <TableCell>{order.sovusli ? "Ha" : "Yo'q"}</TableCell>
                    <TableCell>{order.Narx} so‘m</TableCell>
                    <TableCell>{order.nsovusli}</TableCell>
                    <TableCell>{order.nechta}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                    Hozircha hech qanday buyurtma yo‘q
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        <div className="users-complaint">
            <h1>user murojat</h1>
        </div>
    </div>
    
  );
}

export default OrderFish;
