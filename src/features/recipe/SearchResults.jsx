import styled from "styled-components";
import Results from "./Results";

const StyledSearchResults = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
`;

export default function SearchResults({ children }) {
  return (
    <StyledSearchResults>
      <Results />
      {/* {children} */}
    </StyledSearchResults>
  );
}
