import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    //recup du fichier .json
    const filePath = path.join(process.cwd(), "data", "users.json"); //return le bon chemin /data/users
    //lecture des données
    const fileData = fs.readFileSync(filePath);
    //transform les données en javascript
    const data = JSON.parse(fileData);

    res.status(200).json(data);
  } else if (req.method === "POST") {
    const id = req.body.id;
    const name = req.body.name;
    const firstname = req.body.firstname;
    const codePostale = req.body.codePostale;
    const newData = {
      codePostale: codePostale,
      name: name,
      firstname: firstname,
    };
    //chemin
    const filePath = path.join(process.cwd(), "data", "users.json");
    //prendre les données
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    //push dans le fichier user.json
    data.users.push(newData);
    fs.writeFileSync(filePath, JSON.stringify(data));
    //message
    res.status(201).json({ message: "super cela à fonctionné !!" });
  }
}
