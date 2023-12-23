import SearchBar from './SearchBar.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: SearchBar,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Search = {
    render: (args) => ({
        components: { SearchBar },
        setup() {
            return { args };
        },
        template: '<SearchBar v-bind="args" />',
    }),
    args: {
        placeholder: 'Enter your search term...',
        //👇 The args you need here will depend on your component
    },
};