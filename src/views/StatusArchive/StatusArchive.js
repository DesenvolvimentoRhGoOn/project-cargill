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

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const useStyles = makeStyles(styles);

  const nomeArquivo = "wave7632.sql"
  const [wave, setWave] = React.useState('Wave1');
  const [modulo, setModulo] = React.useState('modulo1');

  const classes = useStyles();
  return (
    <div>      <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Status Archive</h4>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="primary"
            tableHead={["Wave", "Data", "Status"]}
            tableData={[
              ["Wave1", "17/11/2020", "Finalizado"],
              ["Wave2", "17/11/2020", "Finalizado"],
              ["Wave3", "17/11/2020", "Finalizado"],
              ["Wave4", "17/11/2020", "Finalizado"],
              ["Wave5", "17/11/2020", "Executando"],
              ["Wave6", "17/11/2020", "Pendente"],

            ]}
          />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
    </div>
  );
}
