import Modal from "react-bootstrap/Modal";
function PopUp(props) {
  let tag = props.description === "pages" ? "Páginas" : "Idiomas";
  let paragraph =
    props.description === "pages"
      ? "Se refiere a una sola unidad. Ejemplos comunes: página de inicio de sesión, acerca de, contacto, ubicación, página de política de privacidad, etc."
      : "Se refiere a la cantidad de idiomas a las que podrá ser traducido el sitio web";

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{tag}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{paragraph}</p>
        <h6>
          Cantidad de {tag}: {props.quantity}
        </h6>
      </Modal.Body>
    </Modal>
  );
}
export default PopUp;
