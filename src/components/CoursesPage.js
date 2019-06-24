import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import CourseList from './CourseList';

function CoursesPage() {

  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <React.Fragment>
      <h2 className="display-4">Courses</h2>
      <Link className="btn btn-primary mb-4" to="/course">Add Course</Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </React.Fragment>
  );
}

export default CoursesPage;