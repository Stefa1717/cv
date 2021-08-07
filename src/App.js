import './App.css';
import Header from './components/Header-component/Header'
import Section from './components/Section-component/Section'

function App(props) {
  var content = {};
  fetch(props.content).then(block => block.json()).then(result => content = result);

  // var content = promise.then(block => block.json());
  console.log(content);
  return (
    <section class="sheet padding-10mm">
      {}
      {/* {fetch(props.content).then(content => content.json())} */}
      {/* <Header userName="Dominik Wieczorek" photoPath="dominic_cv.jpg" />
      <Section sectionName="Personal Data" title="Address" value="ul. Oraczy 13/5, 30-418 Kraków" /> */}
    </section>
  );
}

export default App;
