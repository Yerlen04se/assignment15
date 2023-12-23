import TextArea from './TextArea.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: TextArea,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Text = {
    render: (args) => ({
        components: { TextArea },
        setup() {
            return { args };
        },
        template: '<TextArea v-bind="args" />',
    }),
    args: {
        id: 'textarea1',
        label: 'Enter text:',
        value: '',
        rows: 4,
        cols: 30,
        placeholder: 'Type something...',
        isDisabled: false,
        //👇 The args you need here will depend on your component
    },
};