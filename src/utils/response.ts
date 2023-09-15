import { Response } from 'express';

function sendResponse(res: Response, inputObj: any[] | any) {
    // return the inputObj or all inputObjs
    res.status(200).json(inputObj);
}

export default sendResponse;