import { Field, Formik, Form, FormikHelpers, useField, FieldProps} from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import data from "../../data.json";
import DatePicker from "react-datepicker";
import "./form.css";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormatting } from "../../helpers";
import { TripObj } from "../TripsList/TripsList";

const MyDatePicker = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 15);

  return (
    <DatePicker
      {...field}
      selected={value}
      onChange={(date) => 
			setValue(date)}
		showIcon={true}
		dateFormat="dd.MM.yyyy"
		maxDate={maxDate}
		placeholderText="Select date"
		minDate={new Date()}
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
	setTrips: Dispatch<SetStateAction<TripObj[]>>;
 }

export const FormComponent: FC<Props> = ({modalClose, setTrips}) => {
	const onFormSubmit = (
		values: Values,
		{ resetForm } : FormikHelpers<Values>
	 ) => {
	 		
const formatStartDate = dateFormatting(values.startDate);
const formatEndDate = dateFormatting(values.endDate);
const selectCity = data.filter(({name}) => name === values.name);
const newTrip: TripObj = {...selectCity[0], startDate: formatStartDate, endDate: formatEndDate}

setTrips(prevState => [...prevState, newTrip]);
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
<label className="label" htmlFor="name"><span className="accent">*</span> City</label>
<Field className="formik-input" id="name" name="name" as="select" placeholder="Please, select a city">
{data.map(({id, name})=> <option key={id} value={name}>{name}</option>)}
 </Field>
<label  className="label" htmlFor="startDate"><span className="accent">*</span>Start date</label>
	<Field placeholder="Select date" className="formik-input" id="startDate" name="startDate" render={({ field, form: { isSubmitting } }: FieldProps<Values>)=><MyDatePicker {...field} name="startDate" />} ></Field>

	<label  className="label" htmlFor="endDate"><span className="accent">*</span>End date</label>
	<Field placeholder="Select date" className="formik-input" id="endDate" name="endDate" render={({ field, form: { isSubmitting } }: FieldProps<Values>)=><MyDatePicker {...field} name="endDate" />} ></Field>

  <button className="btn-submit" type="submit">Submit</button>
</Form>
</Formik>
</div>};