

// Still Working on Project to Add more features like USER LOGIN, USER REGISTRATION, ETC.

class ApiResponse {
    constructor(statusCode, data, message = 'success') {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }   
}

export { ApiResponse }