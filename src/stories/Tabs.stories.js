import Tabs from './Tabs.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: Tabs,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Tab = {
    render: (args) => ({
        components: { Tabs },
        setup() {
            return { args };
        },
        template: '<Tabs v-bind="args" />',
    }),
    args: {
        tabs: [
            { label: 'Tab 1', content: 'Content for Tab 1' },
            { label: 'Tab 2', content: 'Content for Tab 2' },
            { label: 'Tab 3', content: 'Content for Tab 3' },
        ],
        //👇 The args you need here will depend on your component
    },
};