import React from "react";
import { Grid } from "@mui/material";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComponent = () => {
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData(
      "Cookies techniques",
      "Ces cookies sont nécessaires au bon fonctionnement de notre site web.",
      " Certains de ces cookies disparaissent automatiquement de votre système dès que vous fermez le navigateur.D’autres peuvent persister pendant une période d’un mois maximum à compter du premier dépôt du cookie sur votre terminal.",
      "Ces cookies ne requièrent pas de consentement."
    ),
    createData(
      "Cookies fonctionnels",
      "Ces cookies améliorent votre expérience en tant qu’utilisateur.",
      "Certains de ces cookies disparaissent automatiquement de votre système dès que vous fermez le navigateur. D’autres peuvent persister pendant une période d’un mois maximum à compter du premier dépôt du cookie sur votre terminal.",
      "Ces cookies ne requièrent pas de consentement."
    ),
    createData(
      "Cookies analytiques",
      "Ces cookies sont utilisés pour recueillir des informations sur la manière dont vous visitez notre site web (exemple : quantification des visites). Ces informations nous servent à établir des rapports et nous aident à améliorer notre site web pour une meilleure navigation. Toutes les informations collectées par ces cookies sont agrégées et donc anonymisées.",
      "Certains de ces cookies disparaissent automatiquement de votre système dès que vous fermez le navigateur. D’autres peuvent persister pendant une période de 13 mois maximum à compter du premier dépôt du cookie sur votre terminal.",
      "Ces cookies requièrent un consentement de votre part."
    ),
    createData(
      "Cookies publicitaires",
      "Ces cookies sont utilisés pour vous proposer des publicités ciblées sur notre site web et également sur les sites internet de nos partenaires publicitaires.",
      " Ces cookies peuvent persister pendant une période de 13 mois maximum à compter du premier dépôt du cookie sur votre terminal.",
      "Ces cookies requièrent un consentement de votre part."
    ),
  ];
  return (
    <Grid container className="table-main">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="font-[Poppins]">
            <TableRow>
              <TableCell>Types of cookies</TableCell>
              <TableCell align="left">Purpose</TableCell>
              <TableCell align="left">Expiration date</TableCell>
              <TableCell align="left">Consent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                className="font-semibold"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ fontWeight: 700 }} scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell className="font-[OpenSans]" align="left">
                  {row.carbs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default TableComponent;
