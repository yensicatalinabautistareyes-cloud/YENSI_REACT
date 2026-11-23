import './saludo.css'

function Saludo() {
  const listafrutas =[
    "pera" , "manzana" , "fresa" , "mango"
  ];
  return (
    /*debe empezar con fragme ya que es como el cuerpo*/
      <> 
        <h1 className='saludoComponente'>Hola,soy Yensi mucho gusto</h1>
          <h2>Lista de mis Frutas favoritas</h2>
            <ol>
              <li>{listafrutas[0]}</li>
              <li>{listafrutas[1]}</li>
              <li>{listafrutas[2]}</li>
              <li>{listafrutas[3]}</li>
            </ol>
      </>
  );
}

export default Saludo
