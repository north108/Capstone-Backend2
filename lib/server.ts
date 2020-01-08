import app from "./app";

const PORT = (process.env.PORT || 3200)

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}.`);
})