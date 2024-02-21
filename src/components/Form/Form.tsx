import { Field, Formik, Form, FormikHelpers, useField, FieldProps} from "formik";
import { FC } from "react";
import data from "../../data.json";
import DatePicker from "react-datepicker";
import "./form.css";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      selected={value}
      onChange={(date) => setValue(date)}
    />
  );
};

interface Values {
	name: string;
	startDate: Date;
	endDate: Date;
 }

 interface Props {
	modalClose: () => void;
 }

export const FormComponent: FC<Props> = ({modalClose}) => {
	const onFormSubmit = (
		values: Values,
		{ resetForm } : FormikHelpers<Values>
	 ) => {
	 console.log(values);
	 resetForm();
	 modalClose();
	 }

return <div className="form">
	<Formik 
initialValues={{
  name: '',
  startDate: new Date(),
  endDate: new Date(),
}}
onSubmit={onFormSubmit}
>
<Form className="formik">
<label className="label" htmlFor="city"><span className="accent">*</span> City</label>
<Field className="formik-input" id="city" name="city" as="select" placeholder="Please, select a city">
{data.map(({id, name})=> <option key={id} value={name}>{name}</option>)}
 </Field>
<label  className="label" htmlFor="startDate"><span className="accent">*</span>Start date</label>
	<Field placeholder="Select date" className="formik-input" id="startDate" name="startDate" render={({ field, form: { isSubmitting } }: FieldProps<Values>)=><MyDatePicker {...field} disabled={isSubmitting} name="startDate" />} ></Field>

	<label  className="label" htmlFor="endDate"><span className="accent">*</span>End date</label>
	<Field placeholder="Select date" className="formik-input" id="endDate" name="endDate" render={({ field, form: { isSubmitting } }: FieldProps<Values>)=><MyDatePicker {...field} disabled={isSubmitting} name="endDate" />} ></Field>

  <button className="btn-submit" type="submit">Submit</button>
</Form>
</Formik>
</div>};