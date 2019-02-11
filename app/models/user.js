import DS from "ember-data";
import { buildValidations } from 'ember-cp-validations';
import emailFieldValidation from 'rarwe/validations/email-field';
import passwordFieldValidation from 'rarwe/validations/password-field';

const Validations = buildValidations({
  email: emailFieldValidation,
  password: passwordFieldValidation
});

export default DS.Model.extend(Validations, {
  email: DS.attr("string"),
  password: DS.attr("string")
});
