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
                {
                    text: 'File name', dataIndex: 'name', sortable: false, hideable: false, flex: 1,
                    renderer: function (value) {
                        return Ext.String.format('<div style="word-wrap: break-word; white-space: normal !important">{0}</div>', value); //word-break: break-all;
                    }
                },
                {text: 'Size', dataIndex: 'size', sortable: false, hideable: false, width: 67},
                {
                    text: 'Status', dataIndex: 'status', sortable: false, hideable: false, width: 57,
                    renderer: function (value) {
                        return value;   // Ext.String.format('<img src="{0}" />', value);
                    }
                },
                {text: 'Progress', dataIndex: 'progress', sortable: false, hideable: false, width: 70}

            ],
            fbar: [
                {type: 'button', id: 'removefile', text: 'Remove', visible: false},
                '->',
                {type: 'button', id: 'pickfiles', text: 'Select'},
                {type: 'button', id: 'uploadfiles', text: 'Upload'}
            ]
        })


    }


});

Ext.define('MimeFilter', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'title', type: 'string'},
        {name: 'extensions', type: 'string'}
    ]
});

Ext.define('ErrorModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'fileName', type: 'string'},
        {name: 'errorText', type: 'string'}
    ]
});

Ext.define('SelectedRowModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'index', type: 'integer'}
    ]
});


Ext.define('ErrorsStore', {
    extend: 'Ext.data.Store',
    //fields: ['fileName','errorText'],
    model: 'ErrorModel'
});

Ext.define('FiltredFilesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.filtredFilesGrid',
    hideHeaders: true,
    columns: [
        {
            sortable: false,
            hideable: false,
            flex: 1,
            dataIndex: 'fileName',
            renderer: function (value) {
                return Ext.String.format('<div style="word-wrap: break-word; white-space: normal !important">{0}</div>', value);
            }
        },
        {
            sortable: false,
            hideable: false,
            flex: 2,
            dataIndex: 'errorText',
            renderer: function (value) {
                return Ext.String.format('<div style="word-wrap: break-word; white-space: normal !important">{0}</div>', value);
            }
        }
    ]

});
