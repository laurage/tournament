export const capitalize = string => {
  const separators = ['-', ' '];
  let capitalizedString = string.toLowerCase();
  separators.forEach((separator) => {
      capitalizedString = capitalizedString.split(separator)
      .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
      .join(separator);
    }
  )
  return capitalizedString;
}
