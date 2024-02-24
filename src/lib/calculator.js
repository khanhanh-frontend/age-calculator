export function CalculateDate(dateobj) {
  const yolds = {};
  const today = new Date();

  const date = new Date(`${dateobj.month}/${dateobj.day}/${dateobj.year}`);

  const diffTime = today - date;
  const diffDate = new Date(diffTime);

  const years = Math.floor(diffDate.getUTCFullYear() - 1970);
  const months = Math.floor(diffDate.getUTCMonth());
  const days = Math.abs(diffDate.getUTCDate() - 1);

  yolds.years = years;
  yolds.months = months;
  yolds.days = days;

  return yolds;
}

export function IsInvalidDate(date) {
  let dateString = `${date.month}/${date.day}/${date.year}`;

  let dateValue = Date.parse(dateString);
  if (isNaN(dateValue)) {
    return true;
  }

  if (dateValue > Date.now()) {
    return true;
  }
  return false;
}
