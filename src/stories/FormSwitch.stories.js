import FormSwitch from './FormSwitch.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: FormSwitch,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Switch = {
    render: (args) => ({
        components: { FormSwitch },
        setup() {
            return { args };
        },
        template: '<FormSwitch v-bind="args" />',
    }),
    args: {
        id: 'switch1',
        label: 'Toggle me',
        value: false,
        isDisabled: false,
        //👇 The args you need here will depend on your component
    },
};