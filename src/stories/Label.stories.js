import Label from './Label.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: Label,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const KrasiviyLabel = {
    render: (args) => ({
        components: { Label },
        setup() {
            return { args };
        },
        template: '<Label v-bind="args" />',
    }),
    args: {
        text: 'Lorem dipsum chto-to tam',
        htmlFor: 'inputField',
        //👇 The args you need here will depend on your component
    },
};