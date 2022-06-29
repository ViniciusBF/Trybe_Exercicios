import React from 'react';

class PersonaForm extends React.Component {
  render() {
    return (
      <form>
          <fieldset>
            <div>
            <label>
              Nome
              <input type="text"></input>
            </label>
            </div>

            <div>
            <label>
              Email
              <input type="text"></input>
            </label>
            </div>

            <div>
            <label>
              CPF
              <input type="text"></input>
            </label>
            </div>

            <div>
            <label>
              Endereço
              <input type="text"></input>
            </label>
            </div>

            <div>
            <label>
              Cidade
              <input type="text"></input>
            </label>
            </div>

            <div>
            <label>
              <input type="checkbox"></input>
            </label>
            </div>

            <div>
              <label>
                <input name="moradia" type="radio"></input>
                Apartamento
              </label>

              <label>
                <input name="moradia" type="radio"></input>
                Casa
              </label>
            </div>

          </fieldset>
        </form>
    )
  }
}

export default PersonaForm;
