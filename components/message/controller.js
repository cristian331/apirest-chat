const store = require('./store');

function getMessages (filterBy, filterId) { // get all messages or get all messager from a user
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterId && filterBy == 'user') {
            filter = { user: filterId }
        } else if (filterId && filterBy == 'chat') {
            filter = { chat: filterId }
        }
        store.get(filter)
            .then(data => {
                console.log('[messageController]: Promise get resolved')
                resolve(data);
            })
            .catch(err =>
                reject(err)
            )
    })
};

function getMessageById (id) { // get a message by id
    return new Promise((resolve, reject) => {
        store.getId(id)
            .then(data => {
                console.log('[messageController]: Promise get resolved')
                resolve(data);
            })
            .catch(err => {
                console.log('[messageController]: Error id no Found')
                reject(err.message)
            }
        )
    })
};

function addMessage (chat, user, message) { 
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[messageController]: no chat or no user or no message')
            return reject('Solicitud No Aceptada - datos invalidos')
        };
        
        const fullMessage = {
            chat,
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
            return Promise.reject('Invalid data');
        }
        store.update(id, message)
            .then(() => {
                console.log('[messageController]: Promise update resolved')
                store.getId(id)
                    .then(data => resolve(data))
            })
            .catch(err => {
                console.log('Error: Mensaje no actualizado')
                reject(err)
            }
        );
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
    getMessages,
    getMessageById,
    addMessage, 
    updateMessage,
    deleteMessage
}