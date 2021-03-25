import "./index.css";

export default function Social({ icon, grid }) {
  return (
    <div className={`social-container ${grid}`}>
      <a href="#" className="social-container__anchor">
        <i className={`fab ${icon} social-container__icon `}></i>
      </a>
    </div>
  );
}
