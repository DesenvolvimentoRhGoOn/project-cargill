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
import Table from "components/Table/Table.js";
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

};

const waves = [
  {
    value: 'Wave1',
    label: 'Wave11235',
  },
  {
    value: 'Wave2',
    label: 'Wave2',
  },
  {
    value: 'Wave3',
    label: 'Wave3',
  },
  {
    value: 'Wave4',
    label: 'Wave4',
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

const processos = [
  {
    value: 'processo1',
    label: 'Criação de Pedido',
  },
  {
    value: 'processo2',
    label: 'Criação de Load',
  },
  {
    value: 'processo3',
    label: 'Vendas',
  }
];

export default function UserProfile() {

  const handleModuleChange = (event) => {
    setModulo(event.target.value);
  };

  const handleProcessoChange = (event) => {
    setProcesso(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const useStyles = makeStyles(styles);

  const [processo, setProcesso] = React.useState('processo1');
  const [modulo, setModulo] = React.useState('modulo1');

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Cadastro de Tabelas</h4>
            </CardHeader>
            <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField 
                      name="nomeTabela"
                      label="Tabela"
                    >
                    </TextField>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                      <TextField 
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
                      <TextField 
                      select
                      label="Processo"
                      value={processo}
                      onChange={handleProcessoChange}
                      >
                      {processos.map((option) => (
                      <MenuItem 
                      key={option.value} 
                      value={option.value}>
                      {option.label}
                      </MenuItem>
                      ))}
                      </TextField>
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

      <GridContainer>
        
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Tabelas</h4>
          </CardHeader>
          <CardBody>
           <GridContainer>
           <GridItem xs={12} sm={12} md={3}>
                    <TextField 
                      name="nomeTabela"
                      label="Tabela"
                    >
                    </TextField>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <Button color="primary">Pesquisar</Button>
                  </GridItem>
           
             </GridContainer> 
            <Table
              tableHeaderColor="primary"
              tableHead={["Tabela", "Modulo", "Processo"]}
              tableData={[
                ["F12354", "Criação de Perdido", "Processo1"],
                ["F53476", "Criação de Load",    "Processo2"],
                ["F15465", "Criação de Perdido", "Processo3"],
                ["F12545", "Criação de Load",     "Processo4"],
                ["F14654", "Criação de Load",     "Processo5"],
                ["F15645", "Criação de Load",     "Processo6"],

              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    </div>
  );
}
