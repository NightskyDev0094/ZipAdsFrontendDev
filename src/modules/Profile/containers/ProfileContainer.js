import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  SideBar: { height: '100%', minWidth: '4em', maxWidth: '18em', display: 'inline-block' },
  SideBarItem: {
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
    padding: '1.5em 1.75em',
  },
  MainContent: { display: 'inline-block' },
});

export default function ProfileContainer() {
  const classes = useStyles();
  const ProfileSets = [
    {
      title: 'Contact Information',
      route: '#contact-info',
    },
    {
      title: 'Business Information',
      route: '#business-info',
    },
    {
      title: 'Sign-In Information',
      route: '#sign-in-info',
    },
    {
      title: 'Subscription',
      route: '#subscription',
    },
    {
      title: 'Payment Portal',
      route: '#payment-portal',
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <nav className={classes.SideBar}>
        <ul style={{ listStyle: 'none', margin: 0, padding: "3em 0px" }}>
          {ProfileSets.map((set) => (
            <li key={crypto.randomUUID()} className={classes.SideBarItem}>
              <a src={set.route}>{set.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={classes.MainContent}>Stuff here</div>
    </div>
  );
}
