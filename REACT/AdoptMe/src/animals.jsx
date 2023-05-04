function Animal(){
    const animals = ["bird", "cat", "dog", "rabbit", "reptile"]
    const [animal, updateAnimal] = useState("")
    return (
        <div>
            <label htmlFor="animal">
                Animal
                <select 
                    id = "animal"
                    value={animal}
                    onChange={(animal) => {
                        updateAnimal(animal.target.value)
                        updateBreed("")
                    }}
                    onBlur={(animal) => {
                        updateAnimal(animal.target.value)
                        updateBreed("")
                    }}
                >
                    <option />
                        {animals.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                </select>

            </label>
        </div>
    )
}