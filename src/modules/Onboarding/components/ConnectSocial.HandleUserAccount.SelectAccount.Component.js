import React, {useState} from 'react';
import {Paper, Select, ListSubheader, Button, MenuItem} from '@material-ui/core';
import PropTypes from 'prop-types';

/****************************************************************
 * This is SelectAccountComponent
 * @param {{}} classes:
 * @param {function} setComponentState:
 * @param {{}} componentState
 * sets component state in ConnectOrCreateManagedAccountComponent
 * @param {[{}]} adAccounts: ad accounts
 * @returns <Component />
 */
 const SelectAccountComponent = ({
    classes,
    setComponentState,
    adAccounts,
    componentState,
    setAcccountCreated,
    ...props
  }) => {
    const [selectedAccount, setSelectedAccount] = useState('');
    return (
      <Paper className={classes.managedAccountSelection}>
        <h3 className={classes.selectAccountTitle}>Select an Existing Account</h3>
        <p className={classes.selectAccountSubTitle}>
          It looks like you have an account! Would you like to use an existing account?
        </p>
        <div className={classes.selectAndLinkAccountContainer}>
          <Select
            className={classes.selectInput}
            variant="outlined"
            onChange={(e) => {
              setSelectedAccount(e.target.value);
            }}
          >
            <ListSubheader style={{ color: 'black', fontSize: '18px', fontWeight: 800 }}>
              Managed Accounts
            </ListSubheader>
            {adAccounts.map((account, index) => {
              if (account?.managed) {
                return (
                  <MenuItem
                    style={{ marginRight: '10px' }}
                    value={account.name}
                    key={`${index}${account.name}`}
                  >
                    {account.name}
                  </MenuItem>
                );
              }
            })}
            <ListSubheader style={{ color: 'black', fontSize: '18px', fontWeight: 800 }}>
              UnManaged Accounts
            </ListSubheader>
            {adAccounts.map((account, index) => {
              if (!account?.managed) {
                return (
                  <MenuItem
                    style={{ marginRight: '10px' }}
                    value={account.name}
                    key={`${index}${account.name}`}
                  >
                    {account.name}
                  </MenuItem>
                );
              }
            })}
          </Select>
          <Button
            variant="contained"
            color="primary"
            disabled={selectedAccount.length ? false : true}
            onClick={() => {
              setComponentState({
                ...componentState,
                loading: true,
                error: false,
                success: false,
              });
              setAcccountCreated(true);
  
              setTimeout(() => {
                setComponentState({
                  ...componentState,
                  loading: false,
                });
              }, [3000]);
            }}
            className={classes.createAccountButton}
          >
            Link account
          </Button>
        </div>
      </Paper>
    );
  };
  
  SelectAccountComponent.defaultProps = {
    classes: {},
    setComponentState: () => {},
    adAccounts: [{}],
  };
  
  SelectAccountComponent.propTypes = {
    classes: PropTypes.object,
    setComponentState: PropTypes.func,
    adAccounts: PropTypes.object,
  };
  
  export default SelectAccountComponent;