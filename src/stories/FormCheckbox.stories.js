import FormCheckbox from './FormCheckbox.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: FormCheckbox,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Checkbox = {
    render: (args) => ({
        components: { FormCheckbox },
        setup() {
            return { args };
        },
        template: '<FormCheckbox v-bind="args" />',
    }),
    args: {
        label: "Checkbox",
        //👇 The args you need here will depend on your component
    },
};