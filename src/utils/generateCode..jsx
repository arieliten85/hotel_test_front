export const generateCode = () => {
  const currentDate = new Date();
  const uniqueCode = `${currentDate.getTime()}`;
  return uniqueCode;
};
