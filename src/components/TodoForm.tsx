import * as React from "react";
import { Form, Input, Button, DatePicker, Switch } from "antd";
import { Field, FieldProps, FormikProps, FormikActions, Formik } from "formik";
import * as Yup from "yup";
import Todo from "../models/Todo";
import moment from "moment";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string(),
  due_date: Yup.date(),
  completed: Yup.boolean()
});

interface FormProps {
  submitHandler: (values: Todo, actions: FormikActions<Todo>) => void;
  initialValues: Todo;
}
type Props = FormProps;

const TodoForm: React.SFC<Props> = props => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  return (
    <div>
      <Formik
        initialValues={props.initialValues}
        validationSchema={validationSchema}
        onSubmit={props.submitHandler}
        render={(formikBag: FormikProps<Todo>) => (
          <div style={{ display: "flex" }}>
            <Form {...formItemLayout} style={{ width: "100%" }}>
              <Field
                name="name"
                render={({ field, form }: FieldProps<Todo>) => (
                  <Form.Item label="Task name" required>
                    <Input type="text" {...field} placeholder="Task Name" />
                    {form.touched.name && form.errors.name && form.errors.name}
                  </Form.Item>
                )}
              />
              <Field
                name="description"
                render={({ field, form }: FieldProps<Todo>) => (
                  <Form.Item label="Description">
                    <Input.TextArea
                      rows={4}
                      {...field}
                      placeholder="Task description"
                    />
                    {form.touched.description && form.errors.description && form.errors.description}
                  </Form.Item>
                )}
              />
              <Field
                name="due_date"
                render={({ field, form }: FieldProps<Todo>) => (
                  <Form.Item label="Due Date">
                    <DatePicker
                      defaultValue={moment(formikBag.values.due_date)}
                      onChange={e => formikBag.setFieldValue(field.name, e ? e : null)}
                    />
                    {form.touched.due_date && form.errors.due_date && form.errors.due_date}
                  </Form.Item>
                )}
              />
              <Field
                name="completed"
                render={({ field, form }: FieldProps<Todo>) => (
                  <Form.Item label="Completed">
                    <Switch
                      defaultChecked={field.value}
                      onChange={checked =>
                        formikBag.setFieldValue(field.name, checked)
                      }
                    />
                  </Form.Item>
                )}
              />
              <Button
                icon="save"
                type="primary"
                size="large"
                style={{ float: "right" }}
                onClick={formikBag.submitForm}
                disabled={formikBag.isSubmitting}
                loading={formikBag.isSubmitting}
              >
                Save
              </Button>
            </Form>
          </div>
        )}
      />
    </div>
  );
};

export default TodoForm;
