import express  from "express";
import { getDb } from "../db/conn.js";
import {ObjectId} from "mongodb";


const recordRoutes = express.Router();
//const ObjectId = mongodb.ObjectId;



// This section will help you get a list of all the records.

recordRoutes.route("/record").get(function (req, res) {
  let db_connect = getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.error('data sent to client:', result);
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("records")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
})

// This section will help you create a new record.

recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
})

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record 
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = getDb();
  let myquery = { _id:  ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

export default recordRoutes;



