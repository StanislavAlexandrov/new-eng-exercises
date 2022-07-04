//rename questionPicker
// callbacks; blackbox; it should just return a callback with a number.
// onNumberClick it emits the
//onPickNumber
//whichever component has the picker
//inside parent handleNumberClick function that gets a number as the arg and do sth with it
//this component should be stateless and shouldn't know anything
import '../../components/exercises/exercise-400-questions.component.scss';
const Picker = ({ setNumberQuestions, setShowPicker, showPicker }) => {
    const handleSelectedByNumber = (selectedNumber) => {
        setNumberQuestions(selectedNumber);
        setShowPicker(!showPicker);
    };

    const questionPickerArray = [5, 10, 15, 20, 25]; // this is how many questions we need

    //question prop inside the component; an array of numbers and map through them - DONE
    return (
        <div className="picker">
            <h2>How many questions?</h2>
            {questionPickerArray.map((element) => (
                <button onClick={() => handleSelectedByNumber(element)}>
                    {element}
                </button>
            ))}

            {/* remove below */}

            {/* <button onClick={() => handleSelectedByNumber(2)}>2</button>
        <button onClick={() => handleSelectedByNumber(5)}>5</button>
        <button onClick={() => handleSelectedByNumber(10)}>10</button>
        <button onClick={() => handleSelectedByNumber(15)}>15</button>
        <button onClick={() => handleSelectedByNumber(20)}>20</button> */}
        </div>
    );
};

export default Picker;
