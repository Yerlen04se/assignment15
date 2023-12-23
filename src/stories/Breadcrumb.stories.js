import Breadcrumb from './Breadcrumb.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: Breadcrumb,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const separator = {
    render: (args) => ({
        components: { Breadcrumb },
        setup() {
            return { args };
        },
        template: '<Breadcrumb v-bind="args" />',
    }),
    args: {
        items: [
            { to: '/', label: 'Home' },
            { to: '/category', label: 'Category' },
            { to: '/category/product', label: 'Product' },
        ],
        //👇 The args you need here will depend on your component
    },
};