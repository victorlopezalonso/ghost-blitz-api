import {validationResult} from "express-validator";

const validate = (req, res, callback) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array({onlyFirstError: true}) });
    }

    return callback(req,res);
}

export {validate};