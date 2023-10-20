import anime from "animejs";
import React, { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  font-size: 2rem;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GeneratedNumber({
  numberId,
  index,
  content,
  gameLost,
}) {
  useEffect(() => {
    let animation = anime({
      targets: "#myGeneratedNumber",
      opacity: [0, 1],
      duration: 2000,

      complete: function (anim) {
        animation.remove("#myGeneratedNumber");
      },
    });
  }, []);
  return (
    <Draggable draggableId={numberId} index={index} isDragDisabled={gameLost}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          id="myGeneratedNumber"
        >
          {content}
        </Container>
      )}
    </Draggable>
  );
}
