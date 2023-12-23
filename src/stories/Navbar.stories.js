import Navbar from './Navbar.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: Navbar,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Nav = {
    render: (args) => ({
        components: { Navbar },
        setup() {
            return { args };
        },
        template: '<Navbar v-bind="args" />',
    }),
    args: {
        homeLink: { to: '/', label: 'Application' },
        navLinks: [
            { to: '/home', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
        ],
        //👇 The args you need here will depend on your component
    },
};