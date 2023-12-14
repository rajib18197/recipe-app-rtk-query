import GuideBook from "../features/recipe/GuideBook";
import SearchResults from "../features/recipe/SearchResults";
import Header from "../ui/Header";

export default function Recipe() {
  return (
    <>
      <Header />
      <SearchResults />
      <GuideBook />
    </>
  );
}
