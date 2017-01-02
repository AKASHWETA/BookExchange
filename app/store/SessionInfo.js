Ext.define('BookExchange.store.SessionInfo', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'BookExchange.model.SessionInfo',
        autoLoad: true,
         
        proxy: {
         type: 'localstorage',
         id  : 'myApplicationKey'
        }
    }
});