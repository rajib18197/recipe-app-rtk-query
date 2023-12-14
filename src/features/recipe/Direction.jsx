import { HiArrowRight } from "react-icons/hi2";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledDirection = styled.div`
  padding: 5rem 10rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 3.5rem;
  color: $color-grey-dark-2;

  & span {
    font-weight: 700;
  }
`;

const LinkButton = styled.a`
  &,
  &:link,
  &:visited {
    background-image: var(--gradient);
    border-radius: 10rem;
    border: none;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    font-size: 1.4rem;
    font-weight: 600;
    padding: 1.25rem 2.25rem;
    text-decoration: none;

    svg {
      height: 1.75rem;
      width: 1.75rem;
      fill: currentColor;
    }

    &:hover {
      transform: scale(1.05);
    }

    &:focus {
      outline: none;
    }

    & > *:first-child {
      margin-right: 1rem;
    }
  }
`;
export default function Direction({ sourceUrl, publisher }) {
  return (
    <StyledDirection>
      <Heading as="h2">How to cook it</Heading>
      <Text>
        This recipe was carefully designed and tested by{" "}
        <span>{publisher}</span>. Please check out directions at their website.
      </Text>
      <LinkButton href={sourceUrl} target="_blank">
        <span>Directions</span>
        <HiArrowRight />
      </LinkButton>
    </StyledDirection>
  );
}
