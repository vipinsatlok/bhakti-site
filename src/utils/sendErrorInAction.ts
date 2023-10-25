export const sendErrorInAction = (msg: string) => {
  return new Error(msg).message;
};
