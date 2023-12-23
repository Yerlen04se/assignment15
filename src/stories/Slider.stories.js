import Slider from './Slider.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: Slider,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const MoshniySlider = {
    render: (args) => ({
        components: { Slider },
        setup() {
            return { args };
        },
        template: '<Slider v-bind="args" />',
    }),
    args: {
        id: 'slider1',
        label: 'Select a value:',
        value: 50,
        min: 0,
        max: 100,
        step: 1,
        isDisabled: false,
        //👇 The args you need here will depend on your component
    },
};