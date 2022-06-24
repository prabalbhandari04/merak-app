import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Typography} from "@material-ui/core";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styledComponents from 'styled-components';


const Image = styledComponents.img`
  width: 100px;

`
const Stf = styledComponents.div`
  display: flex;
  flex-direction: column;
`

const OrderDetails = ( {order} ) => {
  const {users} = useSelector(state => state.data2);
  const [itms, setItms] = React.useState(order.items)
  
  const [assignto, setAssignto] = React.useState(()=>{
    if(order.assigned_to){
       return order.assigned_to.pk
    }

  });


  return (

    <Card sx={{ maxWidth: 900 }} elevation={0} style={{background: '#181818', color: '#00A7E3'}}>


        <CardContent style={{background: '#181818', color: '#00A7E3'}}>
        <Typography gutterBottom variant="body1" component="div" align="center"> 
           
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
           <span style={{color: 'gray'}}> Ordered by: </span> 
           {
              order.ordered_by === null ?
              <p></p>
              :
              <span>
                {order.ordered_by.full_name}
              </span>
            }
          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Assigned to: </span>         
          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Status: </span> {order.status}
          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Invoice: </span> {order.invoice}
          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Ordered date: </span> {Date(`${order.ordered_date}`)}
          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Delivery Location: </span>
          </Typography>
          <br></br>
        </CardContent>


        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Product</TableCell>
                <TableCell align="right">Price&nbsp;(Rs)</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itms.map((ordered) => (
                <TableRow
                  key={ordered.product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Image src={ordered.product.image}></Image>
                  </TableCell>
                  <TableCell align="right">{ordered.product.sku}</TableCell>
                  <TableCell align="right">{ordered.product.price}</TableCell>
                  <TableCell align="right">{ordered.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Card>
)
};




export default OrderDetails