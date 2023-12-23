import Sidebar from './Sidebar.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: Sidebar,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const bar = {
    render: (args) => ({
        components: { Sidebar },
        setup() {
            return { args };
        },
        template: '<Sidebar v-bind="args" />',
    }),
    args: {
        //👇 The args you need here will depend on your component
    },
};