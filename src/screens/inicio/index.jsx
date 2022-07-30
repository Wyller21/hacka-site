import { useContext } from "react";
import CardCourse from "../../components/CardCourse";
import CourseContext from "../../context/CourseContext";
import { Container, HeaderContainer, Text, Title, CardContainer } from "./style";

const Inicio = () => {
  const {courses} = useContext(CourseContext)

  return (
    <Container>
      <HeaderContainer>
        <Title>{`<div> Edu`}</Title>
        <Text>Uma plataforma de divulgação para cursos livres e gratuitos online.</Text>
      </HeaderContainer>
      <CardContainer>
        {courses.map((courses) => {
          return <CardCourse key={courses.id} courses={courses}/>
        })}
      </CardContainer>
    </Container>
  );
};

export default Inicio;
