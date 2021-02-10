import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { TextField } from "@material-ui/core";
import Table from "components/Table/Table.js";
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

const modulos = [
  {
    value: 'modulo1',
    label: 'Originação',
  },
  {
    value: 'modulo2',
    label: 'Sales',
  },
  {
    value: 'modulo3',
    label: 'Transportation',
  },
  { 
  value: 'modulo3',
  label: 'Procurement',
},
{
  value: 'modulo3',
  label: 'Modelo Contábil',
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

  const [wave, setWave] = React.useState('Wave1');
  const [modulo, setModulo] = React.useState('modulo1');

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Cadastro de Modulos</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField 
                    name="NomeModulo"
                    label="Modulo"
                  >
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
            <h4 className={classes.cardTitleWhite}>Modulos</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Modulo", "Data Registro", "Usuario"]}
              tableData={[
                ["Originação", "17/10/2020", "c123554"],
                ["Sales", "14/11/2020", "c575567"],
                ["Transportation", "17/07/2020", "c145356"],
                ["Procurement", "11/11/2020", "c157675"],
                ["Modelo contábil", "13/05/2020", "c156546"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    </div>
  );
}
