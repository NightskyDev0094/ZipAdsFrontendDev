// import React from 'react';
// import { makeStyles } from '@material-ui/core';
// import FacebookLogin from '../modules/Auth/components/FacebookLogin';
// import FacebookIcon from '@material-ui/icons/Facebook';

// export default {
//   title: 'Ad Creation/Connect Component',
//   component: ConnectOrCreateManagedAccountComponent,
// };

// const baseStylesForConnectSocialMenu = makeStyles(() => ({
//   connectSocialMenuTitle: {
//     transform: 'translateY(50px)',
//     margin: '125px 0px',
//   },
//   connectSocialMenuContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     '&:hover': {
//       cursor: 'pointer',
//     },
//   },
//   managedAccountSelection: {
//     //select an existing account
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '15px 50px',
//     justifyContent: 'space-evenly',
//     margin: '15px 0px',
//   },
//   connectButtonContainer: {
//     //connect existing account container
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '15px 50px',
//     justifyContent: 'space-evenly',
//   },
//   selectAndLinkAccountContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     width: '100%',
//   },
//   selectInput: {
//     width: '200px',
//   },
//   paper: {
//     width: '600px',
//     borderRadius: '20px',
//     padding: '25px',
//   },
//   createBusinessNameContainer: {
//     //create a new account
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '15px 50px',
//     justifyContent: 'space-evenly',
//     margin: '15px 0px',
//   },
//   createBusinessNameContent: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     justifyContent: 'space-evenly',
//   },
//   socialMenuContainer: {},
//   facebookSelection: {},
//   googleSelection: {},
//   instagramSelection: {},
//   title: {
//     display: 'flex',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     width: '90%',
//   },
//   connectButton: {},
// }));

// const Template = ({
//   styles,
//   title,
//   LoginComponent,
//   doesUserHaveAdAccounts,
//   LoginIcon,
//   placeHolder,
//   defaultValue,
//   inputProps,
//   adAccounts,
//   currentBusinessName,
// }) => {
//   const classes = baseStylesForConnectSocialMenu();
//   return (
//     <ConnectOrCreateManagedAccountComponent
//       classes={classes}
//       styles={{}}
//       title={'Create or Connect Facebook'}
//       placeHolder={placeHolder}
//       defaultValue={'Your Business Name'}
//       inputProps={{ readOnly: true }}
//       LoginComponent={() => <FacebookLogin handleFbLogin={() => {}} />}
//       doesUserHaveAdAccounts={true}
//       LoginIcon={() => <FacebookIcon />}
//       adAccounts={[
//         { name: 'Johns Lemonade' },
//         { name: 'John Cenas House' },
//         { name: 'Johns Lemonade' },
//       ]}
//       currentBusinessName={'Johns Lemonade'}
//     />
//   );
// };

// export const ConnectOrCreateManagedAccountComponentStory = Template.bind({});

// ConnectOrCreateManagedAccountComponent.args = {
//   classes: {},
//   doesUserHaveAdAccounts: true,
//   styles: {},
//   title: 'Connect to Facebook',
//   LoginComponent: () => {},
//   LoginIcon: () => {},
//   placeHolder: 'Your Business Name',
//   defaultValue: '',
//   inputProps: {},
//   doesUserHaveAdAccounts: true,
//   adAccounts: [
//     { name: 'Johns Lemonade' },
//     { name: 'John Cenas House' },
//     { name: 'Johns Lemonade' },
//   ],
//   currentBusinessName: 'Johns Lemonade Stand',
// };
