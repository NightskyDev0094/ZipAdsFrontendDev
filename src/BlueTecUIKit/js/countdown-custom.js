jQuery(document).ready(() => {
  $(() => {
    $('#defaultCountdown').countdown({ until: new Date(2020, 12 - 1, 10, 8) }); // year, month, date, hour
  });
});
