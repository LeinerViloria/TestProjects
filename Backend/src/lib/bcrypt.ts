import bcrypt from "bcrypt";

const hassGenerate = async (password: string) => {
  const SALT = Number(process.env.SALT);
  const passHash = await bcrypt.hash(password, SALT);
  return passHash;
};

const hassCompare = async (password: string, dbPassword: string) => {
  const passHash = await bcrypt.compare(password, dbPassword);
  return passHash;
};

export { hassGenerate, hassCompare };
