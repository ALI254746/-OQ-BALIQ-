import { BsQuestionCircleFill } from "react-icons/bs";
import "./ourproduct.css";
import { VscCheck } from "react-icons/vsc";
import { useState, useEffect, useReducer, useContext } from "react";
import { DataContext } from "../../data";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return state.count > 1 ? { count: state.count - 1 } : state;
    default:
      return state;
  }
}

function OurProduct() {
  const { addData } = useContext(DataContext);
  const [state, dispatch] = useReducer(reducer, { count: 1 });
  const [alarm, setAlarm] = useState("");
  const [isOrder, setOrder] = useState(false);
  const [sovus, setSovus] = useState(false);
  const [sovusbaliqsoni, setSovusbaliqsoni] = useState(0);

  const [formData, setFormData] = useState({
    nechta: 1,
    KG: "",
    Narx: 0,
    sovusli: false,
    nsovusli: 0,
  });

  const updatePrice = (kg, count) => {
    const prices = {
      "1 KG": 35000,
      "1.5 KG": 45000,
      "2 KG": 70000,
      "3 KG": 105000,
    };
    return (prices[kg] || 0) * count;
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      Narx: updatePrice(value, state.count),
    }));
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      Narx: updatePrice(prev.KG, state.count),
    }));
  }, [state.count, formData.KG]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.KG || formData.Narx <= 0) {
      setAlarm("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }
    const newOrder = { ...formData, nechta: state.count, sovusli: sovus, nsovusli: sovusbaliqsoni };
    console.log("yangi buyurtma", newOrder);
    addData(newOrder);
    setOrder(true);
    setAlarm("Buyurtma qabul qilindi!");
  };

  useEffect(() => {
    if (isOrder) {
      const timer = setTimeout(() => {
        setAlarm("");
        setOrder(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOrder]);

  return (
    <div className="product">
      <div className="product-image">
        <img src="/oqbaliq.webp" alt="Logo" />
      </div>
      <div className="product-background">
        <div className="product-detail">
          <form onSubmit={handleSubmit}>
            <h1>Oq baliq</h1>
            <p className="pad1">Oq baliq yog‘da qovurilgan sifatli baliq va mazali ta’m beruvchi go‘sht</p>
            <h3>Baliq kilosini tanlang</h3>
            <select name="KG" value={formData.KG} onChange={changeHandler}>
              <option value="">Baliq tanlang</option>
              <option value="1 KG">Baliq 1 KG</option>
              <option value="1.5 KG">Baliq 1.5 KG</option>
              <option value="2 KG">Baliq 2 KG</option>
              <option value="3 KG">Baliq 3 KG</option>
            </select>

            <div className="count">
              <h3>Nechta baliq olasiz:</h3>
              <button type="button" onClick={() => dispatch({ type: "decrement" })}>-</button>
              <span>{state.count}</span>
              <button type="button" onClick={() => dispatch({ type: "increment" })}>+</button>
            </div>

            <p className="pad1">Sovusga Dimlansinmi <BsQuestionCircleFill />:</p>
            <div>
              <label>
                Ha
                <input type="radio" name="sovus" onChange={() => setSovus(true)} />
              </label>
              <label>
                Yo'q
                <input type="radio" name="sovus" onChange={() => setSovus(false)} />
              </label>
            </div>

            {sovus && state.count > 1 && (
              <input
                type="number"
                value={sovusbaliqsoni}
                placeholder="Nechta baliq sousga dimlansin?"
                onChange={(e) => setSovusbaliqsoni(Math.min(Number(e.target.value), state.count))}
              />
            )}

            <h2>Siz Tanlagan Baliq: {formData.KG}</h2>
            <h3>Siz tanlagan baliq narxi: {formData.Narx} so‘m</h3>

            <div className="btn">
              <button type="submit" className="btn btn-secondary">Buyurtma Berish</button>
            </div>

            <h3>{alarm} {isOrder && <VscCheck />}</h3>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
