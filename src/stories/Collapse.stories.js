import Collapse from './Collapse.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: Collapse,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Collapsible = {
    render: (args) => ({
        components: { Collapse },
        setup() {
            return { args };
        },
        template: '<Collapse v-bind="args" />',
    }),
    args: {
        header: 'Collapsible Section',
        isCollapsed: true,
        //👇 The args you need here will depend on your component
    },
};