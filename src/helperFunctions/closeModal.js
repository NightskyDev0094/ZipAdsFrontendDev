/**
 * Removes last route path to remove the current modal from the screen
 *   ex: localhost:3000/login becomes localhost:3000
 *
 * @param { History } location - history object returned by react-router-dom useHistory hook
 * @param { Location } history - location object returned by react-router-dom useLocation hook
 */
export const closeModal = (location, history) => {
  const paths = location.pathname.split('/');
  const removeLast = paths.filter((i, ind) => ind !== paths.length - 1);
  removeLast.forEach((path) => history.push(`/${path}`));
};
