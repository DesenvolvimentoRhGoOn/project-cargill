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
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";

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

const horarios = [
  {
    value: 'horario1',
    label: '08:00 AM',
  },
  {
    value: 'horario2',
    label: '09:00 AM',
  },
  {
    value: 'horario3',
    label: '10:00 AM',
  },
  {
    value: 'horario4',
    label: '11:00 AM',
  },
  {
    value: 'horario5',
    label: '12:00 PM',
  },
  {
    value: 'horario6',
    label: '14:00 PM',
  },
  {
    value: 'horario7',
    label: '16:00 PM',
  },
];

const waves = [
  {
    value: 'wave1',
    label: 'Wave 1',
  },
  {
    value: 'wave2',
    label: 'Wave 2',
  },
  {
    value: 'wave3',
    label: 'Wave 3',
  },
  {
    value: 'wave4',
    label: 'Wave 4',
  },
  {
    value: 'wave5',
    label: 'Wave 5',
  },
  {
    value: 'wave6',
    label: 'Wave 6',
  },
  {
    value: 'wave7',
    label: 'Wave 7',
  }

];


const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [wave, setWave] = React.useState('wave1');
  const [horario, setHorario] = React.useState('horario1');

  const handleWaveChange = (event) => {
    setWave(event.target.value);
  };

  const handleHorarioChange = (event) => {
    setHorario(event.target.value);
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
                  value={wave}
                  onChange={handleWaveChange}
                >
                  {waves.map((option) => (
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
                  value={horario}
                  onChange={handleHorarioChange}
                >
                  {horarios.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </GridItem>
            </GridContainer>
            <CardFooter>
              <Button color="primary">Salvar</Button>
              <Button color="primary">Fechar</Button>
            </CardFooter>
          </CardBody>
        </Card>
      </GridItem>
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
              tableHead={["Wave", "Horário", "Situação"]}
              tableData={[
                ["Wave 13", "08:00 AM",  "Finalizado"],
                ["Wave 22", "09:00 AM",  "Finalizado"],
                ["Wave 36", "12:00 PM",  "Finalizado"],
                ["Wave 43", "14:00 PM",  "Novo"],
                ["Wave 57", "15:00 PM",  "Novo"],
                ["Wave 62", "16:00 PM",  "Novo"],

              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    
    
    
  );
}
