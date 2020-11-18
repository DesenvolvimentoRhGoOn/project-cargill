import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import { DataGrid } from '@material-ui/data-grid';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TableBody from '@material-ui/core/TableBody';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { IconButton, TableCell, TextField } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import {
  primaryColor,
  dangerColor,
  successColor,
  grayColor,
  defaultFont
} from "assets/jss/material-dashboard-react.js";

const styles = {

  overrides: {
    MuiFormLabel: {
      focused: true,
      root: {
        '&.focused': {
          color: 'black '
        }
      }
    }
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },

  inputFileButtom: {
    marginTop: "35px"
  },
  dateInput: {
    marginTop: "27px"
  },
  inputWave: {
    position: "absolute",
    top: "127px",
    zIndex: "2",
    textAlign: "center",
    color: grayColor[3] + " !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    letterSpacing: "unset",
    "& .Mui-focused": {
      borderColor  : "#658D1B", 
      
    },
  },
  inputModulo: {
    position: "absolute",
    top: "127px",
    zIndex: "2",
    textAlign: "center",
    color: grayColor[3] + " !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    letterSpacing: "unset",
    "& .Mui-focused": {
      borderColor  : "#658D1B", 
    }, 
  }
};

const rowsTabela = [
  { id: 1, nome:'F12354' },
  { id: 2, nome:'F53476' },
  { id: 3, nome:'F15465' },
  { id: 4, nome:'F12545' },
  { id: 5, nome:'F14654' },
  { id: 6, nome:'F53476' },
  { id: 7, nome:'F15465' },
  { id: 8, nome:'F12545' },
  { id: 9, nome:'F14654' },
  { id: 10, nome:'F53476' },
  { id: 11, nome:'F15465' },
  { id: 12, nome:'F12545' },
  { id: 13, nome:'F14654' },
  
];

const columns = [
  
  { field: 'nome', headerName: 'Tabela', width: 100 } 
];


function createData(name) {
  return {
    name,
    history: [
      { date: 'Tabela01', customerId: '17/11/2020', amount: 'César' },
      { date: 'Tabela02', customerId: '15/11/2020', amount: 'Cleber' },
      { date: 'Tabela02', customerId: '15/11/2020', amount: 'Cleber' },
      { date: 'Tabela02', customerId: '15/11/2020', amount: 'Cleber' },
      { date: 'Tabela02', customerId: '15/11/2020', amount: 'Cleber' },

    ],
  };
}

export default function Waves() {

  const styles = {

    overrides: {
      MuiFormLabel: {
        focused: true,
        root: {
          '&.focused': {
            color: 'black '
          }
        }
      }
    },
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    },
    dataGridFooter:{
      '& .MuiDataGrid-footer':{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 52,
        '& .MuiDataGrid-footer-paginationAvailable': {
          '& .MuiDataGrid-selectedRowCount':{
            visibility:'hidden'
          }
        }
      }
    }
    /*
    ,
    cardWaves:{
      width:"50%",
      marginLeft: 200
    }
    */
  }
  
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Cadastro de Waves</h4>
            </CardHeader>
            <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                  <TextField 
                    name="NomeWave"
                    label="Wave"
                  >
                  </TextField>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <div style={{ height: 350, width: '101%' }}>
                    <DataGrid className={classes.dataGridFooter}
                    rows={rowsTabela}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection>
                    </DataGrid>
                    </div>
                    
                  </GridItem>
                  
                  </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Salvar</Button>
              <Button color="primary">Fechar</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <Card className={classes.cardWaves}>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Waves</h4>
        </CardHeader >
        <TableContainer component={Paper}>
        
        <Table aria-label="collapsible table">
        
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
          
        </Table>
        
      </TableContainer>
      </Card> 

   </div> 
    
  );
}


 function Row(props) {

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const { row } = props;
  const [open, setOpen] = React.useState(false);
  


  return (
    <div>
             <React.Fragment>
                  <TableRow>
                    <TableCell>
                      <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                          <Typography variant="h6" gutterBottom component="div">
                            Tabela
                          </Typography>
                          <Table size="small" aria-label="purchases">
                            <TableHead>
                              <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Data Registro</TableCell>
                                <TableCell align="right">Usuario</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {row.history.map((historyRow) => (
                                <TableRow key={historyRow.date}>
                                  <TableCell component="th" scope="row">
                                    {historyRow.date}
                                  </TableCell>
                                  <TableCell>{historyRow.customerId}</TableCell>
                                  <TableCell align="right">{historyRow.amount}</TableCell>
                                  
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
            
  
    </div>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Wave7612'),
  createData('Wave7123'),
  createData('Wave7423'),
  createData('Wave7013'),
  createData('Wave7576'),
];

