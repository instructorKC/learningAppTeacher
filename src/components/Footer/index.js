

const ChildComponent = (props) => {
    const frog = props.frog
    const chicken = props.chicken
    return (
      <h1>{` ${frog} it tastes like ${chicken}.`}</h1>
    )
  }

  export default ChildComponent