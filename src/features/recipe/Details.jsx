import styled from "styled-components";
import {
  ButtonIconCircle,
  ButtonIconRound,
  IconBox,
} from "../../ui/ButtonIcon";
import Info from "./Info";
import {
  HiBookmark,
  HiClock,
  HiMinus,
  HiMinusCircle,
  HiPlus,
  HiPlusCircle,
  HiUsers,
} from "react-icons/hi2";

const StyledDetails = styled.div`
  display: flex;
  align-items: center;
  padding: 7.5rem 8rem 3.5rem 8rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 1.6rem;
  transform: translateY(-1px);
`;

export default function Details({ cookingTime, servings }) {
  return (
    <StyledDetails>
      <Info text={"minutes"} number={cookingTime} icon={<HiClock />} />
      <Info number={servings} text={"Servings"} icon={<HiUsers />}>
        <ButtonContainer>
          <ButtonIconCircle icon={<HiPlusCircle />} />
          <ButtonIconCircle icon={<HiMinusCircle />} />
        </ButtonContainer>
      </Info>

      <IconBox />
      <ButtonIconRound icon={<HiBookmark />} />
    </StyledDetails>
  );
}
