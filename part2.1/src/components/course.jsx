import Total from "./total";

const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <div>
        {course.parts.map((part) => (
          <div key={part.id}>
            {part.name}: {part.exercises}
          </div>
        ))}
      </div>
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
