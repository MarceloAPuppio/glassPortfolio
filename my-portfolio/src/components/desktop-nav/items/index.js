import "./index.css";

export default function Items({ icon, title }) {
  return (
    <div className="item-container">
      <a href="#" className="item-container__anchor">
        <i className={`fas ${icon} item-container__icon `}></i>
        <span className="item-container__span">{title}</span>
      </a>
    </div>
  );
}
