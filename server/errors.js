export default class ApiError extends Error {
    constructor(status, message){
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message){
        return new ApiError(400, `Bad request: ${message}`);
    }

    static unauthorized(message){
        return new ApiError(401, `Unauthorized: ${message}`);
    }

    static notFound(message){
        return new ApiError(404, `Not found: ${message}`);
    }

    static forbidden(message){
        return new ApiError(403,`Forbidden: ${message}`);
    }

    static InternalError(message){
        return new ApiError(500, `Internal Error: ${message}`);
    }
}