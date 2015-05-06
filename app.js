/**
 * Created by Aksndr on 06.05.2015.
 */


Ext.create('Ext.window.Window', {
    title: 'Hello',
    height: 200,
    width: 400,
    layout: 'fit',
    render: 'viewport',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'grid',
        border: false,
        columns: [{header: 'World'}],                 // One header just for show. There's no data,
        store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
    }
}).show();