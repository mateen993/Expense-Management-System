import React from "react";
import Layout from "../components/Layout/Layout";
import FeatureCard from "../components/Home/FeatureCard";

const Home: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-center pt-24 font-extrabold text-2xl  md:text-3xl bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent ">
        {" "}
        Welcome to our Expense Management System{" "}
      </h1>

      <h1 className="font-bold text-base p-3 mt-3">
        {" "}
        Our System provides the following features{" "}
      </h1>

      <div className="m-4 p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard
          title="Expense Categorization"
          description="Say goodbye to the headache of manually sorting through receipts and documents. Our system allows you to easily categorize expenses according to your specific needs. Create custom categories ensuring accurate and organized expense tracking."
        />
        <FeatureCard
          title="Intuitive Interface"
          description="We believe simplicity is key. Our user-friendly interface makes it effortless to navigate and categorize expenses. With just a few clicks, you can assign an expense to the appropriate category, saving you time and reducing the risk of errors."
        />
        <FeatureCard
          title="Cost Savings"
          description="By effectively categorizing expenses, you gain better visibility into your spending habits, allowing you to identify areas where cost savings can be made. Our system empowers you to make informed decisions and implement strategies to optimize your expenses."
        />
        <FeatureCard
          title="Real-time Updates"
          description="Stay up to date with your expense categorization progress. Our system provides real-time updates, allowing you to monitor your categorization efforts and ensure that expenses are accurately recorded as they occur."
        />
        <FeatureCard
          title="Category-Based Graphs"
          description="Gain a clear understanding of your expenses by category through visually appealing graphs. Our system generates intuitive charts and graphs that represent your expenses, allowing you to identify spending trends and patterns at a glance. Analyze which categories account for the majority of your expenses and make informed budgeting decisions."
        />
        <FeatureCard
          title="Date-Based Graphs"
          description="Track your expenses over time with date-based graphs. Our system enables you to visualize your spending trends, monthly or quarterly, helping you identify peak spending periods or potential cost-saving opportunities. Analyze your historical data and make strategic financial plans based on your organization's cash flow patterns."
        />
      </div>
      <p className=" mt-3 border-4 rounded-2xl mx-auto text-center font-semibold p-2 text-base">
        Take control of your expenses today with our user-friendly Expense
        Management System. Sign up now and simplify your expense tracking
        process, allowing you to focus on what matters most - Spending money
        efficiently
      </p>
    </Layout>
  );
};

export default Home;
