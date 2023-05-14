import * as yup from "yup"

export const FormValidation = yup.object().shape({
    username:yup.string().required("required username").min(4),
    password:yup.string().required("required password").min(8)
})