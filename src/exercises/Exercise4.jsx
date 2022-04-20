function Rating({ rate, onChange }) {
    return (
      <div style={{ display: "flex" }}>
        <Star active={true} />
        <Star active={true} />
        <Star active={false} />
        <Star active={false} />
        <Star active={false} />
      </div>
    );
  }
  
  function Star({ active, ...props }) {
    return (
      <svg width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
        <path
          clipRule="evenodd"
          d="M10 .5l2.781 5.595L19 6.998l-4.5 4.353 1.062 6.149L10 14.595 4.438 17.5 5.5 11.35 1 6.999l6.219-.903L10 .5v0z"
          stroke={active ? "#FFA84C" : "#999"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  
  
  // Задание 4 ------------------------
  function Exercise4() {
    return (
      <div className="exercise">
        <h1 className="exercise__title">Задание 4</h1>
        <TextValidate validate={value => value.length > 5} />
      </div>
    );
  }
  /*
  Сделать валидацию формы ввода.
  border тега input должен стать
  зеленым, если переданная валидация истинна,
  иначе должен стать красным.
  Валидация должна проверяться при каждом вводе
  */
  function TextValidate({ validate }) {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }

  export default Exercise4