import express, {Request, Response} from "express";
import {Api} from "./utils/api";
import cors from "cors";
import { applicationDefault, initializeApp } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

const app = initializeApp({
    credential: applicationDefault()
});
const firestone = getFirestore(app);


Api.setUse(cors({
    origin: (origin: any, callback: any) => {
        callback(null, origin);
    }
}))
Api.setUse(express.json());

Api.setUse(
    (req: Request, res: Response, next: any) => {
        res.header("Access-Control-Allow-Origin", "*");
        return next();
    }
)

Api.setPostRoute("/todo", async (req: Request, res: Response) => {
    const item = req.body;
    console.log({item})
    if (!("action" in item)) {
        res.sendStatus(400);
        return;
    }
    if (!item.data) {
        res.sendStatus(400);
        return;
    }
    if (item.action === "create") {
        await firestone.collection("todo").add(item.data);
        res.sendStatus(200);
        return;
    }
    const id = item.id || undefined;
    if (id === undefined) {
        res.sendStatus(400);
        return;
    }
    if (item.action === "update") {
        await firestone.collection("todo").doc(id).set(item.data);
    }
    else if (item.action === "delete") {
        await firestone.collection("todo").doc(id).delete();
    }
    res.sendStatus(200);
});

Api.setGetRoute("/todo", async (req: Request, res: Response) => {
    const response = await firestone.collection("todo").get();
    const items: any[] = [];
    response.forEach((item) => {
        items.push({...item.data(), id: item.id});
    })
    res.send(items);
});

Api.listen();
