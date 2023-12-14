import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Recipe from "./pages/Recipe";
import Paragraph from "./ui/LineBreak";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <AppLayout />
              </>
            }
          >
            <Route index element={<Navigate replace to={"results"} />} />
            <Route path="results" element={<Home />} />
            <Route path="results/:id" element={<Recipe />} />
            <Route path="paragraph" element={<Paragraph />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// 𝗥𝗼𝗹𝗲𝘀 & 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝗶𝗲𝘀:
// 👉 Create reusable, effective, and scalable, test-driven JavaScript code.
// 👉 Use additional JavaScript libraries such as Redux, XState to manage the web application’s state, derive computed data from the state of the system, and make asynchronous API calls.
// 👉 Use libraries like Jest, and Testing Library to write tests for applications.
// 👉 Translate the client’s technical requirements into code.
// 👉 Test and update web application so that it can be used on all web browsers
// 👉 Work seamlessly with the rest of the development team (e.g. back-end & front-end developers).
// 👉 Ability to work in an agile environment and Iterate quickly based on customer and internal feedback.
// 👉 You will participate in design discussions, helping us decide our best ways of building new features
// 👉 You may need to mentor other developers in your areas of expertise.
// 𝗦𝗸𝗶𝗹𝗹𝘀 & 𝗤𝘂𝗮𝗹𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀:
// 👉 Minimum 5+ years of experience in Front-end web development
// 👉 3 - 5+ years of professional experience in React.js or Vue.js
// 👉 Familiarity with Svelte is a bonus
// 👉 Highly proficient in rendering data to the DOM using React.js
// 👉 Highly proficient in modern JavaScript, HTML, CSS
// 👉 Proficient in using Git as a control system
