import logo from './logo.svg';
import './App.css';
import Libro from './componentes/Libro';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Libros de Sherlock Holmes</h1>
        <Libro
          nombre = 'Estudio en Escarlata'
          año = '1887'
          imagen = 'estudioEnEscarlata.jpg'
          descripcion = 'Un Estudio en escarlata (A Study in Scarlet) es una novela de misterio escrita por Arthur Conan Doyle y publicada en la revista Beetons Christmas Annual de noviembre de 1887. Se trata de la primera aparición de Sherlock Holmes y el Dr. Watson'
        />

        <Libro
          nombre = 'El Signo De Los Cuatro'
          año = '1890'
          imagen = 'elSignoDeLosCuatro.jpg'
          descripcion = 'El signo de los cuatro (título original en inglés: The Sign of the Four) es la segunda novela protagonizada por Sherlock Holmes, escrita por Arthur Conan Doyle. Su título también se ha traducido como La señal de los cuatro. Se trata —junto a Estudio en escarlata, El sabueso de los Baskerville y El valle del terror— de una de las cuatro únicas novelas que Arthur Conan Doyle escribió con Holmes como protagonista, ya que el resto de sus obras acerca de este personaje son relatos cortos.'
        />
        
        <Libro
          nombre = 'Las aventuras de Sherlock Holmes'
          año = '1892'
          imagen = 'lasAventurasDeSherlockHolmes.jpg'
          descripcion = 'Las aventuras de Sherlock Holmes (en inglés: The Adventures of Sherlock Holmes) es una colección de doce cuentos escritos por Arthur Conan Doyle, en los que el personaje principal es el detective de ficción Sherlock Holmes. Se publicaron por primera vez el 14 de octubre de 1892; las historias se habían publicado individualmente en The Strand Magazine entre junio de 1891 y julio de 1892. En el libro no se presentan las historias en orden cronológico y los únicos personajes que se repiten en todos ellas son Holmes y el doctor Watson, quien los narra en primera persona.'
        />
                
        <Libro
          nombre = 'Memorias de Sherlock Holmes'
          año = '1894'
          imagen = 'memoriasDeSherlockHolmes.jpg'
          descripcion = 'Las memorias de Sherlock Holmes es una colección de 12 cuentos de Sherlock Holmes, originariamente publicado en 1894, por Arthur Conan Doyle.'
        />
        
        <Libro
          nombre = 'El sabueso de los Baskerville '
          año = '1901-1902'
          imagen = 'elSabuesoDeBaskerville.jpg'
          descripcion = 'El sabueso de los Baskerville, también traducido como El perro de los Baskerville o El mastín de los Baskerville, es la tercera novela de Arthur Conan Doyle que tiene como protagonista principal a Sherlock Holmes. Fue publicada por entregas en el The Strand Magazine entre 1901 y 1902. La novela está principalmente ambientada en Dartmoor, en Devon, un condado del oeste de Inglaterra. Conan Doyle escribió esta historia poco después de regresar de Sudáfrica, donde había trabajado como voluntario médico en The Langman Field Hospital en Bloemfontein. Fue asistido en el argumento por un periodista de 30 años de edad del Daily Express llamado Bertram Fletcher Robinson (1870-1907). Sus ideas provienen de la leyenda de Richard Cabell, que fue la inspiración de la de los Baskerville. Su tumba se puede ver en un pueblo llamado Buckfastleigh.'
        />
        
        <Libro
          nombre = 'El regreso de Sherlock Holmes'
          año = '1903'
          imagen = 'elRegresoDeSherlockHolmes.jpg'
          descripcion = 'El regreso de Sherlock Holmes es una colección de 13 cuentos escritos por Arthur Conan Doyle en 1903. Conan Doyle se vio casi obligado a escribir esta colección de historias ya que sus lectores se quejaban de que el protagonista, Sherlock Holmes, hubiera muerto en las cataratas de Reichenbach (Suiza) cuando luchaba con el profesor Moriarty en la historia titulada "El problema final", de la colección Las memorias de Sherlock Holmes.'
        />
        
        <Libro
          nombre = 'El valle del terror'
          año = '1914-1916'
          imagen = 'elValleDelTerror.jpg'
          descripcion = 'El valle del terror (título original en inglés: The Valley of Fear) es la cuarta novela protagonizada por Sherlock Holmes y escrita por Arthur Conan Doyle. Esta novela fue publicada por primera vez en el Strand Magazine entre septiembre de 1914 y mayo de 1915. La primera edición en formato libro fue publicado en Nueva York el 27 de febrero de 1915.'
        />
        
        <Libro
          nombre = 'Su última reverencia'
          año = '1917'
          imagen = 'suUltimaReverencia.jpg'
          descripcion = 'Su última reverencia, también conocido como Su último saludo en el escenario, es un volumen de siete cuentos escritos por Sir Arthur Conan Doyle donde se relatan los últimos casos del detective privado Sherlock Holmes. Fue publicada en 1917. Aunque posteriormente se publicó la colección El archivo de Sherlock Holmes, las historias de Su última reverencia son las últimas en el orden cronológico de la vida de Holmes; en ellas se explica su retiro al campo y su dedicación a la filosofía, la horticultura y la apicultura.'
        />
        
        <Libro
          nombre = 'El archivo de Sherlock Holmes'
          año = '1927'
          imagen = 'elArchivoDeSherlockHolmes.jpg'
          descripcion = 'El archivo de Sherlock Holmes (título original: The Case-Book of Sherlock Holmes) es un conjunto de 12 cuentos escritos por Arthur Conan Doyle, cuyo protagonista es Sherlock Holmes. La mayoría de los cuentos están relatados por el doctor Watson, el fiel compañero de Holmes.'
        />
      </div>
      
      
    </div>
  );
}

export default App;
