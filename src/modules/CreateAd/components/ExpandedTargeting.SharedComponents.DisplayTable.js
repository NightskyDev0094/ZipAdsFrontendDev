import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import MuiAlert from '@material-ui/lab/Alert';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
/**
 * @function createTableDataIntoMatrix
 *      - turn array of objects into a matrix structure
 */

export const createTableDataIntoMatrix = (tableRows) => tableRows.map((row) => Object.values(row));

export const MissingDataAlert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.primary,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
    textAlign: 'start',
    '&:hover': {
      cursor: 'pointer',
    },
    //   paddingLeft: '40px'
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  tableContainer: {
    width: '100%',
  },
  title: {
    flexGrow: 1,
    color: 'white',
    '@media (max-width:600px)': {
      textAlign: 'center',
    },
  },
  remove: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  toolbar: {
    '@media (max-width:600px)': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      height: 'fit-content',
      padding: '10px 0px',
      width: '100%',
    },
  },
});

/**
 * DisplayTable
 * @param tableRows: Array,
 * @param tableHeaders: Array,
 * @param tableTitle: String,
 * @param addRowToSelectedDisabled: disable selecting row in ANY way
 * @param addRowToSelected: function that adds rows to selectedRows
 * @param removeRowFromSelected: function that removes row from selectedRows
 * @param addAllRowsToSelected: function that selects all rows and checks all boxs
 * @param removeAllRowsFromSelected: function that removes all selected rows
 */
export const DisplayTable = function ({
  tableRows,
  tableHeaders,
  tableTitle,
  addRowToSelectedDisabled = false,
  addRowToSelected,
  removeRowFromSelected,
  selectAllRowsDisabled = false,
  addAllRowsToSelected,
  removeAllRowsFromSelected,
  fromGoogle = false,
}) {
  const classes = useStyles();
  const [areAllRowsSelected, setAreAllRowsSelected] = useState(true);
  const [isChecked, setIsChecked] = useState(
    createTableDataIntoMatrix(tableRows).slice().fill(false)
  );

  const toggleCheckboxValue = (index, e) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
    if (e.target.checked) {
      addRowToSelected(e.target.name);
    } else {
      removeRowFromSelected(e.target.name);
    }
  };

  const selectAllRows = () => {
    setAreAllRowsSelected(!areAllRowsSelected);
  };

  useEffect(() => {
    if (areAllRowsSelected) {
      addAllRowsToSelected();
      setIsChecked(isChecked.map(() => true));
    } else {
      removeAllRowsFromSelected();
      setIsChecked(isChecked.map(() => false));
    }
  }, [areAllRowsSelected]);

  return (
    <>
      <div className={classes.title} position="static">
        <Toolbar className={classes.toolbar} style={{ backgroundColor: '#2196f3' }}>
          <Typography id="title" variant="h6" className={classes.title}>
            {tableTitle}
          </Typography>
          {!selectAllRowsDisabled && (
            <Button variant="contained" color="primary" onClick={selectAllRows}>
              Select All
            </Button>
          )}
        </Toolbar>
      </div>
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {tableHeaders.length &&
                tableHeaders.map((headerText, index) => (
                  <StyledTableCell key={`${headerText}-${index}`}>{headerText}</StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {createTableDataIntoMatrix(tableRows).map((rows, index) => (
              <StyledTableRow key={`${rows[0]}-${index}`}>
                <StyledTableCell className={classes.remove}>
                  {!addRowToSelectedDisabled && (
                    <Checkbox
                      color="primary"
                      name={rows[0]}
                      checked={isChecked[index]}
                      onClick={(e) => toggleCheckboxValue(index, e)}
                    />
                  )}
                </StyledTableCell>
                {/* This Section is for displaying micros as dollars. The only page that 'fromGoogle' should be true is the Display.Google Page which send micros in index 5 of Keywords array */}
                {fromGoogle &&
                  rows.map((row, index) => {
                    index === 5 ? (
                      <StyledTableCell key={`${row}-${index}`}>${row / 100000}</StyledTableCell>
                    ) : (
                      <StyledTableCell key={`${row}-${index}`}>{row}</StyledTableCell>
                    );
                  })}
                {!fromGoogle &&
                  rows.map((row, index) => (
                    <StyledTableCell key={`${row}-${index}`}>{row}</StyledTableCell>
                  ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

DisplayTable.propTypes = {
  tableRows: PropTypes.array,
  tableHeaders: PropTypes.array,
  tableTitle: PropTypes.string,
};
