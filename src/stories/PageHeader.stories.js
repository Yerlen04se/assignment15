import PageHeader from './PageHeader.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: PageHeader,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Header = {
    render: (args) => ({
        components: { PageHeader },
        setup() {
            return { args };
        },
        template: '<PageHeader v-bind="args" />',
    }),
    args: {
        title: 'Application',
        //👇 The args you need here will depend on your component
    },
};