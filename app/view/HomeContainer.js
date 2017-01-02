Ext.define('BookExchange.view.HomeContainer', {
    extend: 'Ext.navigation.View',
    xtype:'homeContainer',
    id: 'homeContainer',
    
    requires: [
               'BookExchange.view.Home',
               'BookExchange.view.Login'
               ], 
    
    config: {
        
           
        items: [{
         title: 'Home',
            items: [{
                xtype: 'login',
                flex: 1
            },{
                xtype: 'home',
                flex: 1,
                hidden: true
            }]
        }]
    }
    
  
});