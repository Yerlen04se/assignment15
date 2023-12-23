import Alert from './Alert.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: Alert,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Info = {
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args" />',
    }),
    args: {
        //👇 The args you need here will depend on your component
        message: "Some text",
    },
};

export const Success = {
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args" />',
    }),
    args: {
        //👇 The args you need here will depend on your component
        message: "Success!",
        type: "success"
    },
};

export const Warning = {
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args" />',
    }),
    args: {
        //👇 The args you need here will depend on your component
        message: "Warning!!!",
        type: "warning"
    },
};

export const Danger = {
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args" />',
    }),
    args: {
        //👇 The args you need here will depend on your component
        message: "Error",
        type: "danger",
    },
};