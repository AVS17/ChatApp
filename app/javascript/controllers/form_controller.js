import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  resetComponent(event) {
    // Detener el evento de envío para evitar que se envíe el formulario
    event.preventDefault();
    
    // Enviar el formulario manualmente usando la función submit()
    const form = this.element;
    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then(() => {
        // Restablecer los valores de los campos del formulario a cadena vacía
        form.reset();
      })
      .catch((error) => {
        // Manejar errores si es necesario
        console.error("Error al enviar el formulario:", error);
      });
  }
}


