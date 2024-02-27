import mongoose from "mongoose";
import { dataSchema } from "../Model/data.model.js";
import { ApiError } from "../utils/ApiError.js";


const dataModel = mongoose.model("Data", dataSchema)

export const getAllData = async (req, res) => {
    const data = await dataModel.find({});
    if (!data) {
        throw new ApiError("No data found", 404);
    }
    res.send(data);
}

export const allTopic = async (req, res) => {
try {
        const data = await dataModel.find({});
        const topicData = {};
        for (let i = 0; i < data.length; i++) {
            const topic = data[i].topic?.toString();
            if(topic in topicData) {
            topicData[topic]++;
        } else {
            topicData[topic] = 1;
        }

}
res.send(topicData);
} catch (error) {
    throw new ApiError("Not getting Topic Data" || error?.message, 404); 
}
}
    
export const allSector = async (req, res) => {
    try {
        const data = await dataModel.find({});
        const sectorData = {};
        for (let i = 0; i < data.length; i++) {
            const sector = data[i].sector?.toString();
            if(sector in sectorData) {
            sectorData[sector]++;
        } else {
            sectorData[sector] = 1;
        }
    }
    res.send(sectorData);
} catch (error) {
    throw new ApiError("Not getting Sector Data" || error?.message, 404);
}
}

export const allLikelihood = async (req, res) => {
    try {
        const data = await dataModel.find({});
        const likelihoodData = {};
        for (let i = 0; i < data.length; i++) {
            const likelihood = data[i].likelihood?.toString();
            if(likelihood !== undefined && likelihood !== null && likelihood in likelihoodData) {
            likelihoodData[likelihood]++;
        } else if (likelihood!== undefined && likelihood!== null && likelihood !== "") {
            likelihoodData[likelihood] = 1;
        }
    }
    res.send(likelihoodData);
    } catch (error) {
        throw new ApiError("Not getting Likelihood Data" || error?.message, 404);
    }
}