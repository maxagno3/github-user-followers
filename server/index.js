const express = require("express");
const { default: Axios } = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const common = (user1, user2) => {
  let commonArr = [];
  for (let i = 0; i < user1.length; i++) {
    for (let j = 0; j < user2.length; j++) {
      if (user1[i].login == user2[j].login) {
        commonArr.push(user1[i]);
      }
    }
  }
  console.log(commonArr, "common array!");
  return commonArr;
};

app.get("/github/common", async (req, res) => {
  const { primaryUser, secondaryUser } = req.query;

  if (!primaryUser || !secondaryUser) {
    res.json({ success: false, message: "Both users must be entered." });
    return;
  }

  try {
    Axios.all([
      Axios.get(`http://api.github.com/users/${primaryUser}/following`),
      Axios.get(`http://api.github.com/users/${secondaryUser}/followers`),
    ])
      .then(
        Axios.spread((user1, user2) => {
          const userOne = user1.data;
          const userTwo = user2.data;
          let intersectionArr = common(userOne, userTwo);
          res.json(intersectionArr);
        })
      )
      .catch((error) => console.log(error));
  } catch (error) {
    res.json({ success: false, message: "Something went wrong." });
  }
});

app.get("/github/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await Axios.get(`https://api.github.com/users/${username}`);

    res.json(user.data);
  } catch (error) {
    res.json({ success: false, message: "Something went wrong." });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log("Server successfully running on port: " + port)
);
