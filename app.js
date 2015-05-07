/**
 * Created by Aksndr on 06.05.2015.
 */


Ext.application({
    name: 'MultiUpload',

    launch: function () {

        Ext.widget({
            renderTo: Ext.getBody(),
            xtype: 'grid',
            id: 'grid',
            title: 'Multi Upload',
            width: 650,
            height: 300,
            store: {
                fields: ['id', 'name', 'size', 'status', 'progress']
            },
            columns: [
                {xtype: 'rownumberer'},
                {text: 'File name', dataIndex: 'name', flex: 1, editor: 'textfield'},
                {text: 'Size', dataIndex: 'size'},
                {text: 'Status', dataIndex: 'status'},
                {text: 'Progress', dataIndex: 'progress'}

            ]
        })

    }
});
