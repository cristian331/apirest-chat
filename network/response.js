

function success (req, res, message, status) {
    res.status(status || 200).send({
        error: "",
        data: message
    })
};

function error (req, res, message, status, error) {
    console.log(error)
    res.status(status || 500).send({
        error: message,
        data: ""
    })
};

module.exports = { success, error };