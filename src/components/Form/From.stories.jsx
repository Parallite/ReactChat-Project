import { Form } from './Form';

export default {
    title: 'Form',
    component: Form
}

const Template = (arg) => <Form {...arg}/>

export const Default = Template.bind({});
Default.args = {}

