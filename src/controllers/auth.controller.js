const signin = async(req, res) => {
  
  const { email, password } = req['body'];

  if (!email || !password) {
    return res.status(500).json({ message: `Incorrect email or password.` });
  }

  return res.status(200).json({ message: `Successfully signed in.` });

};

module.exports = {
  signin
};
