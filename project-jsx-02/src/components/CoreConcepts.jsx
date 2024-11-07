import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            {/* <CoreConcept 
            title="Components" 
            description='The core UI building block - compose the user interface by combining multiple components.'
            image ={componentsImg}
            />
            <CoreConcept
            title={CORE_CONCEPTS[1].title}                                      repetição, por isso usamos o map abaixo
            description={CORE_CONCEPTS[1].description} 
            image ={CORE_CONCEPTS[1].image} 
            />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>))} {/*output list usando map */}
          </ul>
        </section>
    )
}