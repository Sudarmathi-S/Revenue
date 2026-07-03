import React from "react";
import Header from "./components/common/Header";
import RevenueList from "./components/RevenueList/Revenue";

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <RevenueList />
    </div>
  )
}

export default App;