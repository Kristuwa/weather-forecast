import { Field, Formik, FormikHelpers} from "formik";
import { FC } from "react"
import { Form } from "react-router-dom";
import data from "../../data.json";

interface Values {
	name: string;
	startDate: string;
	endDate: string;
 }

export const FormComponent: FC = () => {
return <div><Formik
initialValues={{
  name: '',
  startDate: '',
  endDate: '',
}}
onSubmit={(
  values: Values,
  { setSubmitting }: FormikHelpers<Values>
) => {
  setTimeout(() => {
	 alert(JSON.stringify(values, null, 2));
	 setSubmitting(false);
  }, 500);
}}
>
<Form>

<Field name="color" as="select">
{data.map(({id, name})=> <option key="id" value={name}>{name}</option>)}
 </Field>


  <button type="submit">Submit</button>
</Form>
</Formik>
</div>};