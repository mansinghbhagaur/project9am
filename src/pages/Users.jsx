import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// import Paper from "@mui/material/Paper";
// import Container from "@mui/material/Container";
import {
  Typography,
  Container,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";

export default function Users() {

  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const {theme} = React.useContext(ThemeContext);

  const FetchData = async () => {
    try {
      const resData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      setUsers(resData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally");
      // setLoading(false);
    }
  };
  const Theme = {
    'light': {
      background: '#fff',
      color: '#000',
    },
    'black': {
      background: '#000',
      color: '#fff',
    },
  };


  React.useEffect(() => {
    FetchData();
  }, []);

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#ccc",
        }}
      >
        <CircularProgress color={"error"} />
      </Box>
    );

  return (
    <Container maxWidth="xl">
      <Typography
        variant={"h4"}
        fontWeight={"bold"}
        mt={1}
        mb={1}
        component={"div"}
      >
        Users
      </Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: Theme[theme].background, color: Theme[theme].color }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: Theme[theme].color }}>Id</TableCell>
              <TableCell align="center" sx={{ color: Theme[theme].color }}>Name</TableCell>
              <TableCell align="center" sx={{ color: Theme[theme].color }}>Username</TableCell>
              <TableCell align="center" sx={{ color: Theme[theme].color }}>Phone</TableCell>
              <TableCell align="center" sx={{ color: Theme[theme].color }}>Email</TableCell>
              <TableCell align="center" sx={{ color: Theme[theme].color }}>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                  backgroundColor: Theme[theme].background,
                }}
              >
                <TableCell component="th" scope="row" sx={{ color: Theme[theme].color }}>
                  {row.id}
                </TableCell>
                <TableCell align="center" sx={{ color: Theme[theme].color }}>
                  {row.name}
                </TableCell>
                <TableCell align="center" sx={{ color: Theme[theme].color }}>
                  {row.username}
                </TableCell>
                <TableCell align="center" sx={{ color: Theme[theme].color }}>
                  {row.phone}
                </TableCell>
                <TableCell align="center" sx={{ color: Theme[theme].color }}>
                  {row.email}
                </TableCell>
                <TableCell align="center" sx={{ color: Theme[theme].color }}>
                  {row.address.city}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
     );
}

