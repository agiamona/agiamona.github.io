import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListContainer = styled.ul`
  list-style: none;
  text-align: left;
  width: 100%;
`;

const ListItem = styled.li<{ narrow?: boolean }>`
  padding: ${(props) => (props.narrow ? "0.2em 0em" : "0.5em 0em")};
  display: flex;
  align-items: flex-start;
`;

const BulletContainer = styled.span`
  padding-top: 0.03rem;
  padding-right: 0.5rem;
`;

interface IList {
  items: string[];
  narrow?: boolean;
}
export default function List(props: IList): JSX.Element {
  const { items, narrow } = props;

  const listItems = items.map((item, index) => (
    <ListItem key={index} narrow={narrow}>
      <BulletContainer>
        <FontAwesomeIcon icon={["fas", "angle-double-right"]} aria-hidden />
      </BulletContainer>
      {item}
    </ListItem>
  ));

  return <ListContainer>{listItems}</ListContainer>;
}

List.defaultProps = {
  narrow: false,
};
