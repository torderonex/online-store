import ApiError from "../errors.js";

export default function (err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({
            status: err.status,
            message: err.message
        });
    }
    return res.status(500).json({message: "Unhandled error"});
}