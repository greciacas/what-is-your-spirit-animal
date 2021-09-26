function Options(props) {
  const optionA = props.answers.filter(question => question.option === 'optionA').length
  const optionB = props.answers.filter(question => question.option === 'optionB').length
  const optionC = props.answers.filter(question => question.option === 'optionC').length

  if (optionA >= 2) {
    return (
      <div>
        <h1>Crab!</h1>
        <img src="https://media.istockphoto.com/vectors/crab-character-smiling-with-big-claws-on-a-white-vector-id1164392644?k=20&m=1164392644&s=612x612&w=0&h=IuXW-Gkz9VC-WLMBrtoICF7rK-gmChuAY-JWBMETxyQ=" alt='crab' width='400' height='300' />
        <p>Strong and hard-worker, courageous and bold. You tend to go with the flow and appreciate the little adventures life throws at you. You're always growing a new shell! 😆 🦀 </p>
      </div>
    );
  }
  else if (optionB >= 2) {
    return (
      <div>
        <h1>Cat!</h1>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg" alt='cat' width='400' height='300' />
        <p>You like the finer things in life. Quiet but also the life of the party! Your social batteries run out quickly.🌱 😼 </p>
      </div>
    );
  }
  else if (optionC >= 2) {
    return (
      <div>
      <h1>Bear!</h1>
        <img src="https://www.boredpanda.com/blog/wp-content/uploads/2014/03/funny-bears-doing-human-things-20.jpg" alt='bear' width='400' height='300' />
        <p>Protective and nurturing, you're a lover and a fighter. Always making sure other people feel at ease. PS.. you're a rare one..🐻 🌟 </p>
    </div>
    );
  }
}

export default Options;
