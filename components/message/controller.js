const store = require('./store');

function addMessage (user, message) { // using promesis
    console.log(user, message)
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController]: no user or no message')
            return reject('Solicitud No Aceptada')
        };
        
        const fullMessage = {
            user,
            message,
            date: new Date()
        };
        console.log('[messageController]: Promise resolved')
        store.add(fullMessage);
        resolve(fullMessage);
    })
};

function getmessages () { // using promesis
    // console.log(user)
    return new Promise((resolve, reject) => {
        // if (err) {
        //     return reject('Solicitud No Aceptada')
        // };
        
        console.log('[messageController]: Promise resolved')
        const list = store.get();
        resolve(list);
    })
};

module.exports = {
    addMessage, 
    getmessages
}