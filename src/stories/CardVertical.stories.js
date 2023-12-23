import CardVertical from './CardVertical.vue';

//👇 This default export determines where your story goes in the story list
export default {
    component: CardVertical,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Card = {
    render: (args) => ({
        components: { CardVertical },
        setup() {
            return { args };
        },
        template: '<CardVertical v-bind="args" />',
    }),
    args: {
        imageUrl: 'https://via.placeholder.com/300',
        title: 'Card Title',
        description: 'This is a sample card description.',
        date: '2023-01-01',
        //👇 The args you need here will depend on your component
    },
};