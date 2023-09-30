const store = require('./store');

function getmessages (filterUser) { // using promesis
    // console.log(user)
    return new Promise((resolve, reject) => {
        
        console.log('[messageController]: Promise get resolved')
        resolve(store.get(filterUser));
    })
};

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
        console.log('[messageController]: Promise post resolved')
        store.add(fullMessage);
        resolve(fullMessage);
    })
};

function updateMessage (id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            return reject('Invalid data');
        }
        const rta = await store.update(id, message)
        if (rta instanceof Error) {
            reject(rta.message)
        }
        resolve(rta)
    })
};

function deleteMessage (id) {
    return new Promise( (resolve, reject) => {
        if(!id) {
            return reject('Invalid data');
        }
        store.remove(id)
            .then(() => {
                console.log('[messageController]: Promise delete resolved')
                resolve()
            })
            .catch( e => {
                console.log(`id: ${id} is ${e.messageFormat}`)
                reject()
            });
    })
}
module.exports = {
    addMessage, 
    getmessages,
    updateMessage,
    deleteMessage
}