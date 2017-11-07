import $ from 'jquery';

class FormHandler {
  constructor(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  init(submitCallBack) {
    console.log('Setting submit handler for form');
    this.$formElement.submit((event) => {
      event.preventDefault();
      let form = $(this.$formElement)[0];
      var data = {};
      $(this.$formElement).serializeArray().forEach((item) => {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      //submitCallback(data);
      form.reset();
      form.elements[0].focus();

      //this.$formElement.find('button').on('click', () => this.$formElement.submit());
    });
  }
}

export default FormHandler;
