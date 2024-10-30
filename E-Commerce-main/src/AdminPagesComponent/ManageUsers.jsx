import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { Visibility, Lock, LockOpen } from '@mui/icons-material';
import AdNavbar from '../NavComponents/AdNavbar';
import AdSidebar from '../NavComponents/AdSidebar';
import axios from 'axios';


export default function ManageUserPage() {
  const [users, setUsers] = useState([]);
  const [detail, setDetail] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  
 
  const UserData = async () => {
    try {
      const Response = await axios.get(`http://localhost:4000/users`);
      const datas = Response.data;
      const nonAdminUsers = datas.filter(user => !user.Admin);
      setUsers(nonAdminUsers);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  useEffect(()=>{
  UserData()
  },[]) 

  const BlockUser = async(id)=>{
    const Res= await axios.get(`http://localhost:4000/users/${id}`)
    const Dataas = Res.data.Block===false
       await axios.patch(`http://localhost:4000/users/${id}`,{Block:Dataas})
  }



  const handleOpenDetailDialog = (user) => {
    setSelectedUser(user);
    setDetail(true);
  };

  const handleCloseDetailDialog = () => {
    setDetail(false);
    setSelectedUser(null);
  };

  const   toggleBlockStatus = (id) => {
    setUsers(users.map(item =>
      item.id === id ? { ...item, status: item.status === 'blocked' ? 'active' : 'blocked' } : item
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdNavbar />
      <div className="flex">
        <div className="w-1/6 bg-gray-100 min-h-screen ">
          <AdSidebar />
        </div>
        <div className="w-3/4 p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Manage Users</h1>
          <TableContainer component={Paper} className="shadow-lg rounded-lg">
            <Table>
              <TableHead className="bg-gray-300">
                <TableRow>
                  <TableCell className="font-semibold">ID</TableCell>
                  <TableCell className="font-semibold">Name</TableCell>
                  <TableCell className="font-semibold">Email</TableCell>
                  <TableCell className="font-semibold text-center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(item => (
                  <TableRow key={item.id} className="hover:bg-gray-50">
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell className="flex justify-center space-x-2">
                      <IconButton color="info" onClick={() => handleOpenDetailDialog(item)}>
                        <Visibility />
                      </IconButton>
                      <IconButton
                        color={item.status === 'active' ? 'success' : 'warning'}
                        onClick={() =>{ toggleBlockStatus(item.id),BlockUser(item.id)}}
                      >
                        {item.status === 'blocked' ? <Lock /> : <LockOpen />}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Detail User Dialog */}
          <Dialog open={detail} onClose={handleCloseDetailDialog} maxWidth="xs" fullWidth>
            <DialogTitle>User Details</DialogTitle>
            <DialogContent>
              <DialogContentText className="mb-4">
                Viewing details for {selectedUser?.name}:
              </DialogContentText>
              <p><strong>ID:</strong> {selectedUser?.id}</p>
              <p><strong>Name:</strong> {selectedUser?.name}</p>
              <p><strong>Email:</strong> {selectedUser?.email}</p>
              <p><strong>Password:</strong> {selectedUser?.password}</p>
              <p><strong>Status:</strong> {selectedUser?.status}</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDetailDialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
