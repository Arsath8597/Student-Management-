import React from "react";

// Sample grade data
const grades = [
  { course: "Programing", marks: 82, status: "Completed" },
  { course: "Application Development", marks: 78, status: "Completed" },
  { course: "Information Technology", marks: 30, status: "Completed" },
  { course: "English", marks: null, status: "Pending" },
];

// Function to calculate GPA
const calculateGPA = (marks) => {
  if (marks >= 80) return "A+";
  if (marks >= 75) return "A";
  if (marks >= 70) return "A-";
  if (marks >= 65) return "B+";
  if (marks >= 60) return "B";
  if (marks >= 55) return "B-";
  if (marks >= 50) return "C+";
  if (marks >= 45) return "C";
  if (marks >= 40) return "C-";
  return "F";
};

// GradeCard component
const GradeCard = ({ course, marks, status, gpa }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{course}</h2>
      <p>Marks: {marks !== null ? marks : "Pending"}</p>
      <p>Status: {status}</p>
      <p>GPA: {gpa}</p>
    </div>
  );
};

// App component
const Marks = () => {
  return (
    <div className="container mx-auto p-4 w-[80vw]">
      <h1 className="text-2xl font-bold mb-4">Student Grades</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {grades.map((grade, index) => (
          <GradeCard
            key={index}
            course={grade.course}
            marks={grade.marks}
            status={grade.status}
            gpa={grade.marks !== null ? calculateGPA(grade.marks) : "N/A"}
          />
        ))}
      </div>
      {/* <div className="bg-blue-100 p-4 rounded-lg mt-20">
      <h2 className="text-xl font-bold mb-2">How GPA is Calculated</h2>
      <p><strong>80+:</strong> A+</p>
      <p><strong>75-80:</strong> A</p>
      <p><strong>70-75:</strong> A-</p>
      <p><strong>65-70:</strong> B+</p>
      <p><strong>60-65:</strong> B</p>
      <p><strong>55-60:</strong> C+</p>
      <p><strong>50-55:</strong> C+</p>
      <p><strong>45-50:</strong> C-</p>
      <p><strong>40-45:</strong>D</p>
      <p><strong>40 Below:</strong>F</p>
    </div> */}
    </div>
  );
};

export default Marks;

