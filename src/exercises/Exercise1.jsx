import React, { useState } from "react";

function Exercise1() {
  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 1</h1>
      <Alert type="success">Успешно!</Alert>
      <Alert type="error">Ошибка!</Alert>
      <Alert type="warning">Предупреждение</Alert>
      <Alert>Обычный текст</Alert>
    </div>
  );
}
function Alert({ type, children }) {
       
    return <div className="alert">{children}</div>;
  }
  
  export default Exercise1;