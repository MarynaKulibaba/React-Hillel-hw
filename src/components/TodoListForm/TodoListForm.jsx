import {Button, FormControl, FormLabel, Input, Textarea, WrapItem} from "@chakra-ui/react";
import { useFormik } from 'formik';
import validationSchema from "./validationSchema";
import PropTypes from "prop-types";

const formInitialValues = {
    title: '',
    description: '',
}
const TodoListForm = ({onSubmit, isLoading, disabled}) => {
    const formik = useFormik({
        initialValues: {...formInitialValues},
        validationSchema,
        onSubmit: (values) => {
            if(disabled) return;
            onSubmit({...values}, formik.resetForm)
        },
    });


    return  <form onSubmit={formik.handleSubmit}>
        <FormControl mb={5}>
            <FormLabel>Title</FormLabel>
            <Input
                type='text'
                name='title'
                onChange={formik.handleChange}
                value={formik.values.title}
                isDisabled={disabled}
                isReadOnly={isLoading}
            />
            {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
            ) : null}
        </FormControl>
        <FormControl mb={5}>
            <FormLabel>Description</FormLabel>
            <Textarea
                h='200' size='lg'
                name='description'
                onChange={formik.handleChange}
                value={formik.values.description}
                isDisabled={disabled}
                isReadOnly={isLoading}
            />
            {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
            ) : null}
        </FormControl>
        <WrapItem>
            <Button
                type='submit'
                isLoading={isLoading}
                loadingText='Saving'
                colorScheme='purple'
                isDisabled={disabled}
            >
                Save
            </Button>
        </WrapItem>
    </form>
}


TodoListForm.propTypes  = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    disabled: PropTypes.bool
}
export default TodoListForm;
