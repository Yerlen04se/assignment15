import Accordion from './Accordion.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: Accordion,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Accor = {
    render: (args) => ({
        components: { Accordion },
        setup() {
            return { args };
        },
        template: '<Accordion v-bind="args" />',
    }),
    args: {
        items: [
            { title: 'Section 1', content: 'Content for Section 1' },
            { title: 'Section 2', content: 'Content for Section 2' },
            { title: 'Section 3', content: 'Content for Section 3' },
        ],
        //👇 The args you need here will depend on your component
    },
};