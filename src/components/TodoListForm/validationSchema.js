import * as Yup from "yup";

const validationSchema = Yup.object({
    title: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
    description: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(10000, 'Must be 10 characters or less')
        .required('Required')
})

export default validationSchema;
