import { useState } from "react";
import { Modal, Button as ButtonAntD } from "antd";
import { CardArea, NameTitle, Photo, ButtonsArea, Buttons } from "./style";

const CardCourse = ({ courses }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showDetails = () => {
    setModalOpen(true);
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  return (
    <CardArea>
      <Photo src={courses.photo} />
      <div>
      <NameTitle>{courses.name}</NameTitle>
      <ButtonsArea>
        <Buttons onClick={showDetails}>Detalhes</Buttons>
        <Modal
          title={courses.name}
          visible={modalOpen}
          footer={[
            <ButtonAntD type="primary" onClick={handleOk}>
              OK
            </ButtonAntD>,
          ]}
          onOk={handleOk}
        >
          <p>Descrição: {courses.description}</p>
          <p>Tags: {courses.tags.map((tag)=> {return <span key={tag}>{tag} |</span>})}</p>
        </Modal>
        <a href={courses.url} target="_blank">
          <Buttons>Ir</Buttons>
        </a>
      </ButtonsArea>
      </div>
    </CardArea>
  );
};

export default CardCourse;
