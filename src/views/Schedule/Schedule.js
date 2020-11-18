import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { TextField } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const modulos = [
    {
      value: 'modulo1',
      label: '08:00 AM',
    },
    {
      value: 'modulo2',
      label: '09:00 AM',
    },
    {
      value: 'modulo3',
      label: '10:00 AM',
    }
  ];

  
const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [modulo, setModulo] = React.useState('modulo1');
  
  const handleModuleChange = (event) => {
    setModulo(event.target.value);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Schedule</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
            <GridItem xs={6} sm={12} md={8}>
                <TextField className={classes.inputModulo}
                select
                label="Wave"
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
            <GridItem xs={6} sm={12} md={2}>
                <TextField className={classes.inputModulo}
                select
                label="Horario"
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
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  ); 
}
