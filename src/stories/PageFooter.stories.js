import PageFooter from './PageFooter.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: PageFooter,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Footer = {
    render: (args) => ({
        components: { PageFooter },
        setup() {
            return { args };
        },
        template: '<PageFooter v-bind="args" />',
    }),
    args: {
        text: '© 2023 Your Company. All rights reserved.',
        //👇 The args you need here will depend on your component
    },
};