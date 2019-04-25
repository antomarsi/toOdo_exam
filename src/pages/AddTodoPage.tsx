import * as React from "react";
import { Layout, Form, Input, Button, Checkbox } from "antd";
import {
  Field,
  FieldProps,
  FormikProps,
  withFormik,
  FormikActions,
  Formik
} from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { addTodo } from "../actions/todos";
import { Dispatch, bindActionCreators } from "redux";
import { withRouter } from "react-router";

interface FormValues {
  name: string;
  completed: boolean;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

const TodoForm: React.SFC<any> = props => {
  console.log(props);
  return (
    <Layout.Content>
      <Formik
        initialValues={{ name: "", completed: false }}
        validationSchema={validationSchema}
        onSubmit={(values: FormValues, actions: FormikActions<FormValues>) => {
          props.addTodo(values.name, values.completed);
          props.history.push("/");
          actions.setSubmitting(false);
        }}
        render={(formikBag: FormikProps<FormValues>) => (
          <Form>
            <Field
              name="name"
              render={({ field, form }: FieldProps<FormValues>) => (
                <Form.Item label="Task name">
                  <Input type="text" {...field} placeholder="Task Name" />
                  {form.touched.name && form.errors.name && form.errors.name}
                </Form.Item>
              )}
            />
            <Field
              name="completed"
              render={({ field, form }: FieldProps<FormValues>) => (
                <Form.Item label="Completed">
                  <Checkbox />
                </Form.Item>
              )}
            />

            <Button
              icon="check"
              type="primary"
              shape="circle"
              onClick={formikBag.submitForm}
              disabled={formikBag.isSubmitting}
            />
          </Form>
        )}
      />
    </Layout.Content>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addTodo: addTodo
    },
    dispatch
  );

const AddTodoPage = connect(
  null,
  mapDispatchToProps
)(withRouter(TodoForm));

export default AddTodoPage;
