import { getResponseMessage } from "@/helper/responseMessage";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export async function POST(request) {
  const { email, password } = await request.json();

  try {
    // 1.get user
    const user = await User.findOne({ email: email });
    if (user === null) {
      return getResponseMessage("user not found", 201, true);
    } else {
      //2.password check
      const matched = bcrypt.compareSync(password, user.password);
      if (!matched) {
        return getResponseMessage("Password not matched", 201, true);
      } else if (matched) {
        //3.generate token
        const token = jwt.sign(
          {
            _id: user.id,
            name: user.name,
          },
          process.env.JWT_KEY
        );
        //4.create nextresponse -- cookie
        console.log("TOKEN", token);
        const response = getResponseMessage("Successfully logedIn", 201, true);
        response.cookies.set("authToken", token, {
          expiresIn: "1d",
          //httpOnly:false
        });
        return response;
      }
    }
  } catch (error) {
    getResponseMessage(error.message, 404, false);
  }
}
