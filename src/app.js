const express = require("express");
const app = express();
app.use(express.json());
const menUser = require("../src/modles/Mens");
const connectDB = require("../src/db/conn");
connectDB();
const port = process.env.PORT || 3000;
// post meathod.......
app.post("/user", async (req, res) => {
  const addingnewuser = new menUser(req.body);

  await addingnewuser.save();
  console.log(req.body);
  res.status(201).send("hellow from the Rao");

  try {
  } catch (error) {
    console.error(error);
  }
});
//get meathod ......
app.get("/user/:id", async (req, res) => {
  const _id = req.params.id;
  const getnewuser = await menUser.findById({ _id });

  res.send(getnewuser);

  try {
  } catch (error) {
    res.status(400).send(error);
    console.error(error);
  }
});
//update........
app.patch("/user/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const getnewuser = await menUser.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getnewuser);
  } catch (error) {
    res.status(400).send(error);
    console.error(error);
  }
});

//delete...
app.delete("/user/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const getnewuser = await menUser.findByIdAndDelete(_id, req.body, {
      new: true,
    });
    res.send(getnewuser);
  } catch (error) {
    res.status(400).send(error);
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(` my port number ${port}`);
});
