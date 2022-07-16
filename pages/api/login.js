import initDB from "../../helpers/initDB";
import User from "../../models/User";
import bcrypt from "bcryptjs";

var jwt = require("jsonwebtoken");

initDB();

export default async (req, res) => {
  if (req.method == "POST") {
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        if (req.body.email == user.email) {
          if (await bcrypt.compare(req.body.password, user.password)) {
            var token = jwt.sign({ user: user }, "secret", { expiresIn: "1h" });
            res.status(200).json({ success: true, token });
            return;
          }
          res
            .status(200)
            .json({ success: false, error: "Invalid Credentials" });
        }
      } else {
        res.status(200).json({ success: false, error: "Invalid Credentials" });
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    res.status(400).json({ success: false, error: "Method not allowed" });
  }
};
