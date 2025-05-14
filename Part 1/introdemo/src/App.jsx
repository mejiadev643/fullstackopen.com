const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const parts = props.part.parts;
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {
      props.total.parts[0].exercises +
      props.total.parts[1].exercises +
      props.total.parts[2].exercises
      // props.total.parts.reduce((sum, part) => sum + part.exercises, 0)
      }</p>
  )
}





const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course} />
      <Total total={course} />
    </div>
  )
}
export default App