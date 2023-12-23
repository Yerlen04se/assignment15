import FormRadiobox from './FormRadiobox.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: FormRadiobox,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Radiobox = {
    render: (args) => ({
        components: { FormRadiobox },
        setup() {
            return { args };
        },
        template: '<FormRadiobox v-bind="args" />',
    }),
    args: {
        id: 'radiobox-group',
        name: 'group1',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
        selectedValue: null,
        isDisabled: false,
        //👇 The args you need here will depend on your component
    },
};