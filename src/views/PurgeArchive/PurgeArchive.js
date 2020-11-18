import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { TextField } from "@material-ui/core";
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

  },
  inputSituação:{
    top:"26px"
  },
  inputArquivo:{
    top:"27px",
    marginLeft:"40px"
  },
  botaoAddModulo:{
    top:"50px",
    width:15,
    height:15,
    paddingTop:10,
    paddingBottom:10,
    paddingRight:10,
    paddingLeft:13,
    textAlign:"Center",
    marginLeft:10,
   }

};

const waves = [
  {
    value: 'Wave1',
    label: 'Wave1123534112',
  },
  {
    value: 'Wave2',
    label: 'Wave1123534',
  },
  {
    value: 'Wave3',
    label: 'Wave112353',
  },
  {
    value: 'Wave4',
    label: 'Wave11235',
  },
];

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

export default function UserProfile() {

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleWaveChange = (event) => {
    setWave(event.target.value);
  };

  const handleModuleChange = (event) => {
    setModulo(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-11-16T21:11:54'));
  const useStyles = makeStyles(styles);

  const [wave, setWave] = React.useState('Wave1');
  const [modulo, setModulo] = React.useState('modulo1');

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Purge & Archive</h4>
            </CardHeader>
            <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                        <CustomInput
                            labelText="Usuario"
                            id="username"
                            formControlProps={{
                            fullWidth: true
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            className={classes.dateInput}
                            color="primary"
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Data Execução"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                        </MuiPickersUtilsProvider>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <TextField  className={classes.inputSituação}
                        defaultValue="Novo"
                        id="standard-basic"
                        disabled
                        label="Situação" 
                        color="primary"                                         
                        >
                        </TextField >
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={2}>
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
                    <GridItem xs={12} sm={12} md={1}>
                      <Link to="/admin/modulos">
                       <Button className={classes.botaoAddModulo} color="primary"><AddIcon /></Button>
                      </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                        <TextField className={classes.inputWave}
                        select
                        label="Wave"
                        value={wave}
                        onChange={handleWaveChange}
                        >
                        {waves.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                      <Link to="/admin/waves">
                       <Button className={classes.botaoAddModulo} color="primary"><AddIcon /></Button>
                      </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
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
