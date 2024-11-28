import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import News from "../components/News";

function MainRouters() {
  const pageSize = 10;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      {/* <Navbar /> */}
      

      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Routes>
        <Route
          path="/general"
          element={
            <News
              setProgress={setProgress}
              key="General"
              pageSize={pageSize}
              category="General"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="Business"
              pageSize={pageSize}
              category="Business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="Entertainment"
              pageSize={pageSize}
              category="Entertainment"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="Health"
              pageSize={pageSize}
              category="Health"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              setProgress={setProgress}
              key="Science"
              pageSize={pageSize}
              category="Science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="Sports"
              pageSize={pageSize}
              category="Sports"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              key="Technology"
              pageSize={pageSize}
              category="Technology"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default MainRouters;
