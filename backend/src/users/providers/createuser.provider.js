 const User = require("../users.schema.js");
 const bcrypt = require("bcrypt");
 const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
 
async function createUserProvider(req, res) {

    const validatedData = matchedData(req);
    const fullPath = req.file ? req.file.path : null;
     const relativePath = fullPath?.substring(fullPath.indexOf("uploads"));

     //  Check if there is an existing user
  const existingUser = await User.findOne({ email: validatedData.email });

  if (existingUser) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "A user this email alreadye exists" });
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(validatedData.password, salt);

    try{
         const createUser = new User({
            lastname: validatedData.lastname,
            firstname:validatedData.firstname,
            email: validatedData.email,
            password: hashedPassword,
            imagepath:relativePath
    });
    await createUser.save();
     return res.status(StatusCodes.OK).json({
      _id: createUser._id,
      firstName: createUser.firstname,
      lastName: createUser.lastname,
      email: createUser.email,
      imagepath: createUser.imagepath,
    });

    } catch (error) {
         return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later.",
    });
    }
   
}

module.exports = createUserProvider;    