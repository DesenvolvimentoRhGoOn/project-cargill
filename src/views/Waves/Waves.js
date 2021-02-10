import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import FormGroup from '@material-ui/core/FormGroup';
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
    inputArquivo:{
      
    },
  inputFileButtom: {
    top: "15px"
  },
  checkBox :{
    top: "15px"
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
    inputNomeTabela:{
      marginBottom:"10px"
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
  }

  const modulos = [
    {
      value: 'modulo1',
      label: 'Criação de Pedido',
    },
    {
      value: 'modulo2',
      label: 'Criação de Load',
    },
    {
      value: 'modulo3',
      label: 'Vendas',
    }
  ];
  
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [modulo, setModulo] = React.useState('modulo1');
  const handleModuleChange = (event) => {
    setModulo(event.target.value);
  };


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
                  <TextField className={classes.inputNomeTabela} 
                    name="nomeTabela"
                    label="Tabela"
                  >
                  </TextField>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <TextField  
                    name="tempoExecucao"
                    label="Tempo Execução"
                  >
                  </TextField>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <FormGroup row>
                    <FormControlLabel 
                     control={<Checkbox  color = "black" name="checkedC" />}  label="Executa em horario comercial?" />
                    </FormGroup>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField className={classes.inputModulo}
                    select
                    label="Modulo"
                    value={modulo}
                    onChange={handleModuleChange}
                    >
                    {modulos.map((option) => (
                    <MenuItem 
                    key={option.value} 
                    value={option.value}>
                    {option.label}
                    </MenuItem>
                    ))}
                    </TextField>
                  </GridItem>
                    
                    <GridItem xs={12} sm={12} md={2}>
                        <TextField className={classes.inputArquivo}
                        disabled
                        defaultValue="16112020.sql"
                        label="Arquivo"
                        id="arquivoId"
                        formControlProps={{
                        fullWidth: true
                        }}>
                        </TextField>
                    </GridItem>
                     <GridItem xs={12} sm={12} md={3}>
                        <Button className={classes.inputFileButtom} color="primary"
                        variant="contained"
                        component="label"
                        >
                        Upload
                        <input
                        type="file"
                        hidden
                        />
                        </Button>
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

