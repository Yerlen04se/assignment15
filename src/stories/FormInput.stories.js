import FormInput from './FormInput.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: FormInput,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const TextInput = {
    render: (args) => ({
        components: { FormInput },
        setup() {
            return { args };
        },
        template: '<FormInput v-bind="args" />',
    }),
    args: {
        label: "Write your text",
        type: "text",
        //👇 The args you need here will depend on your component
    },
};

export const EmailInput = {
    render: (args) => ({
        components: { FormInput },
        setup() {
            return { args };
        },
        template: '<FormInput v-bind="args" />',
    }),
    args: {
        label: "Write your email",
        type: "email",
        //👇 The args you need here will depend on your component
    },
};

export const Password = {
    render: (args) => ({
        components: { FormInput },
        setup() {
            return { args };
        },
        template: '<FormInput v-bind="args" />',
    }),
    args: {
        label: "Write your password",
        type: "password",
        //👇 The args you need here will depend on your component
    },
};

export const NumberInput = {
    render: (args) => ({
        components: { FormInput },
        setup() {
            return { args };
        },
        template: '<FormInput v-bind="args" />',
    }),
    args: {
        label: "Write your number",
        type: "number",
        //👇 The args you need here will depend on your component
    },
};

export const FileInput = {
    render: (args) => ({
        components: { FormInput },
        setup() {
            return { args };
        },
        template: '<FormInput v-bind="args" />',
    }),
    args: {
        label: "Your file",
        type: "file",
        //👇 The args you need here will depend on your component
    },
};

export const DateTimePicker = {
    render: (args) => ({
        components: { FormInput },
        setup() {
            return { args };
        },
        template: '<FormInput v-bind="args" />',
    }),
    args: {
        label: "Date",
        type: "date",
        //👇 The args you need here will depend on your component
    },
};