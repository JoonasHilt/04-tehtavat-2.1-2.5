const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name}: {part.exercises} exercises
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
