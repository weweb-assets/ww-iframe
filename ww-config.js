export default {
    options: {
        sizable: true,
    },
    editor: {
        label: {
            en: 'iFrame',
            fr: 'iFrame',
        },
        icon: 'globa-alt',
    },
    properties: {
        source: {
            label: {
                en: 'iFrame source (URL)',
            },
            type: 'Text',
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'A string that represents the source url: `"https://www.weweb.io/"`',
            },
            /* wwEditor:end */
        },
    },
};
