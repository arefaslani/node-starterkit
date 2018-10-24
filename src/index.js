import sayHello from "./utilities";

(async () => {
  const message = await sayHello("Aref");
  console.log(message);
})();
