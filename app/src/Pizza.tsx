import React, { FunctionComponent, useState } from 'react';
import './Pizza.css';

const pizza = {
    starter: {
        mjol: 50,
        ljummetVatten: 50,
        torrJast: 0.13,
    },
    main: {
        mjol: 484,
        torrJast: 2.3,
        ljummetVatten: 75,
        iskalltVatten: 224,
        olja: 5.3,
        salt: 10.7,
    }
}

const totalRecipeWeight: number =
    pizza.starter.mjol +
    pizza.starter.ljummetVatten +
    pizza.starter.torrJast +
    pizza.main.mjol +
    pizza.main.torrJast +
    pizza.main.ljummetVatten +
    pizza.main.iskalltVatten +
    pizza.main.olja +
    pizza.main.salt;

const totalFlourWeight: number =
    pizza.starter.mjol +
    pizza.main.mjol;

const totalWaterWeight: number =
    pizza.starter.ljummetVatten +
    pizza.main.ljummetVatten +
    pizza.main.iskalltVatten;

const Pizza: FunctionComponent<{ initialDoughBalls?: number }> = ({ initialDoughBalls = 4 }) => {
    const [doughBalls, setDoughBalls] = useState(initialDoughBalls.toString());
    const [ballWeight, setBallWeight] = useState(225);

    const totalWeight = +doughBalls * ballWeight;

    const ingrScale = totalWeight / totalRecipeWeight;
    const ingr = (weight: number, fixed: number = 0) => (weight * ingrScale).toFixed(fixed);

    return <>
        <h1>pizzakalkylator</h1>
        <p>Degbollar: <input type="number" value={doughBalls} min="1" onChange={event => setDoughBalls(event.target.value)} /></p>
        <p>Bollvikt:
            <select value={ballWeight} onChange={event => setBallWeight(+event.target.value)}>
                <option value="210">210g (30cm)</option>
                <option value="225">225g (32cm)</option>
            </select>
        </p>

        <p>{+doughBalls} degbollar, {ballWeight}g styck</p>

        <p>{(100 * totalWaterWeight / totalFlourWeight).toFixed(1)}% vattenhalt</p>
        <b>Poolish (morgonen dagen innan)</b>
        <ul>
            <li>{ingr(pizza.starter.mjol)}g Mjöl</li>
            <li>{ingr(pizza.starter.ljummetVatten)}g ljumet vatten</li>
            <li>{ingr(pizza.starter.torrJast, 2)}g torrjäst</li>
        </ul>
        <p>Blanda poolish på morgonen dagen innan du vill baka. Tänk på att den blir mycket större när den jäser, så väl en behållare där den kan växa 2-3 gånger i storlek.
        Låt den stå i rumstemperatur ca 10-12 timmar eller tills den blivit 2-3 gånger större.</p>
        <b>Deg (kvällen dagen innan)</b>
        <ul>
            <li>{ingr(pizza.main.mjol)}g Mjöl</li>
            <li>{ingr(pizza.main.torrJast, 1)}g torrjäst</li>
            <li>{ingr(pizza.main.ljummetVatten)}g ljumet vatten</li>
            <li>{ingr(pizza.main.iskalltVatten)}g iskallt vatten</li>
            <li>{ingr(pizza.main.olja, 1)}g olja</li>
            <li>{ingr(pizza.main.salt, 1)}g salt</li>
        </ul>

        <p>
            Väg upp mjölet i degblandarens bunke. Lös upp torrjästen i ljummet vatten. Häll ner vattnet och jästen i bunken. Tillsätt det kalla vattnet. Tillsätt poolishen.
            Kör degblandaren tills degen är jämn. Tillsätt olja och salt, kör några minuter tills både olja och salt är inarbetade i degen.
            Stjälp upp degen på en arbetsbänk och knåda för hand ett par minuter. Se att degen är jämn och både olja och salt är inarbetade.

            Väg degen. Den borde väga runt {totalWeight.toFixed(0)}g.
            Med {doughBalls} bollar blir det {ballWeight}g per boll.
            Dela upp degen i {doughBalls} delar.

            Nästa steg är att bolla varje del. Se video video av <a href="https://youtu.be/he-V1J86REA">Tony Gemignani</a> eller <a href="https://youtu.be/oYQedBu7mW4?t=488">Fidel Montoya</a>.

            Olja kanterna på en behållare, lägg i bollarna. Lägg dem inte för tätt eftersom de kommer att blir större när de jäser.
            Enklast tycker jag är att lägga varje boll i en egen matlåda. Alternativt kan man lägga flera i en ugnsform och täcka med plastfolie.
            Lägg lådorna/formen med bollarna i kylen på en låg hylla. Längre upp i kylen är det varmare, då jäser bollarna snabbare. Experimentera med din kyl.
            Bollarna bör vara 24 timmar i kylen för att jäsa ordentligt. Ta ut bollarna 30 minuter innan du planerar att baka ut dem så hinner de bli lite närmre rumstemperatur och de blir lite lättare att baka ut.
            Bollarna kan utan problem vara längre i kylen, 2 dagar går också bra och 3 dagar fungerar med. Ju längre bollarna är i kylen desto mjukare blir degen och de blir svårare att baka ut en vacker pizza. Men... det blir fortfarande gott. :)

            Se här hur man bakar ut bollen till en pizza.
        </p>

        <div className="iframe-container-16-9">
            <iframe src="https://www.youtube.com/embed/SjYqw1CLZsA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="Tony Gemignani visar hur man bakar ut en pizzaboll till en pizza" allowFullScreen></iframe>
        </div>

        <div style={{color: 'gray', paddingTop: '10px', textAlign: 'left'}}>Lennart Kolmodin 2019</div>
    </>
}

export { Pizza };