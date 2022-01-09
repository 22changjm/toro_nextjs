import OrderSection from "./OrderSection"

const SushiBarOrderSection = (props) => {
    return (
        <div>
                {OrderSection('Sushi Bar', 'Sushi and Sashimi', props.openModal)}
                {OrderSection('Sushi Bar', 'Classic Rolls', props.openModal)}
                {OrderSection('Sushi Bar', 'Baked Rolls', props.openModal)}
                {OrderSection('Sushi Bar', 'Tempura Rolls', props.openModal)}
                {OrderSection('Sushi Bar', 'Fresh Rolls', props.openModal)}
                {OrderSection('Sushi Bar', 'Specialty Rolls', props.openModal)}
                {OrderSection('Sushi Bar', 'Sushi Bar Special', props.openModal)}
        </div>
    )
}

export default SushiBarOrderSection
