import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Header from "../components/Header";
import InputForTask from "../components/InputForTask";
import TasksDisplay from "../components/TasksDisplay";
import TaskSection from "../components/TaskSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="main-container">
      <Header text="Abhijeet Mishra" />
      <TaskSection />
    </div>
  );
}
