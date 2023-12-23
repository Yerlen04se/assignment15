// import DropdownButton from './DropdownButton.vue';
//
// export default {
//     title: 'DropdownButton',
//     component: DropdownButton,
// };
//
// const Template = (args, { argTypes }) => ({
//     props: Object.keys(argTypes),
//     components: { DropdownButton },
//     template: '<DropdownButton v-bind="$props">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</DropdownButton>',
// });
//
// export const Default = Template.bind({});
// Default.args = {
//
// };

import DropdownButton from './DropdownButton.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: DropdownButton,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const ButtonDropdown = {
    render: (args) => ({
        components: { DropdownButton },
        setup() {
            return { args };
        },
        template: '<DropdownButton v-bind="args" />',
    }),
    args: {

        //👇 The args you need here will depend on your component
    },
};
