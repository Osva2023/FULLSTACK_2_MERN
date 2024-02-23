

import { getDb } from "../db/conn.js";
//import { ObjectId } from "mongodb";

// This section will help you get a list of all the agents.
export const getAllAgents = async(req, res) =>{
    
    let db_connect = getDb();
    const result = await db_connect.collection("agents").find({}).toArray();
        res.json(result);
};

// This section will help you get a single agent by id
export const getAgentById = async (req, res) => {
    let db_connect = getDb("employees");
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("agents")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
};

// This section will help you create a new agent.
export function createAgent(req, res) {
    let db_connect = getDb("employees");
    let myobj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        region: req.body.region,
        rating: req.body.rating,
        fee: req.body.fee,
        sales: req.body.sales
        };
    db_connect.collection("agents").insertOne(myobj, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
};

// This section will help you update an agent by id.
export function updateAgentbyId (req, res) {
    let db_connect = getDb("employees");
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            region: req.body.region,
            rating: req.body.rating,
            fee: req.body.fee,
            sales: req.body.sales
        },
    };
    db_connect
        .collection("agents")
        .updateOne(myquery, newvalues, function (err, result) {
            if (err) throw err;
            console.log("1 document updated");
            res.json(result);
        });
};

// This section will help you delete an agent
export function deleteAgentById (req, res) {
    let db_connect = getDb("employees");
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("agents")
        .deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            res.json(obj);
        });
};