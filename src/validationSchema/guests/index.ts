import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  inquiry: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
