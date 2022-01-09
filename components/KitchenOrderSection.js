import OrderSection from "./OrderSection"

const KitchenOrderSection = (props) => {
    return (
        <div>
                {OrderSection('Kitchen', 'Appetizers', props.openModal)}
                {OrderSection('Kitchen', 'Salads', props.openModal)}
                {OrderSection('Kitchen', 'Toro Specialties', props.openModal)}
                {OrderSection('Kitchen', 'Entrees', props.openModal)}
                {OrderSection('Kitchen', 'Tempura', props.openModal)}
                {OrderSection('Kitchen', 'Rice', props.openModal)}
                {OrderSection('Kitchen', 'Noodles', props.openModal)}
                {OrderSection('Kitchen', 'Soup', props.openModal)}
                {OrderSection('Kitchen', 'Dessert', props.openModal)}
        </div>
    )
}

export default KitchenOrderSection
