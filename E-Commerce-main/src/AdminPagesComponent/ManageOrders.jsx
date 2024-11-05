import React, { useEffect, useState } from "react";
import AdNavbar from "../NavComponents/AdNavbar";
import AdSidebar from "../NavComponents/AdSidebar";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function ManageOrders() {
  const [order, setOrder] = useState([]);

  const OrderDatas = async ()=> {
    try {
      const response = await axios.get("http://localhost:4000/users");
      const orders = response.data;
      setOrder(orders);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    OrderDatas();
  }, []);

  return (
    <div>
      <AdNavbar />

      <div className="flex  ">
        {/* Sidebar Section */}
        <div className="w-[20%] h-[100vh] ">
          <AdSidebar />
        </div>

        {/* Main Content Section */}
        <div className="w-[80%] p-7">
          <Typography variant="h4" fontWeight="bold" gutterBottom color="textPrimary">
            Manage Orders
          </Typography>

          <div>
            {order?.map((item, userIndex) => (
              <div  key={userIndex} style={{ marginBottom: "2rem" }}>
                {item.Orders.map((value, orderIndex) => {
                  const totalAmount = value.orderItem.reduce(
                    (total, item) => total + (item.price || 0),
                    0
                  );

                  return (
                    <TableContainer component={Paper} key={orderIndex} sx={{ mt: 2 }}>
                      <Table>
                        <TableHead style={{ backgroundColor: "#f5f5f5" }}>
                          <TableRow>
                            <TableCell><strong>Number</strong></TableCell>
                            <TableCell><strong>Products</strong></TableCell>
                            <TableCell><strong>User Email</strong></TableCell>
                            <TableCell><strong>Paid Amount</strong></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow hover>
                            <TableCell>{orderIndex + 1}</TableCell>
                            <TableCell>{value.orderItem.length}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>${totalAmount}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageOrders;
