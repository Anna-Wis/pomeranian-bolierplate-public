import './style.css';

export function CssAnimations() {
  return (
    <div>
      <div className="question-wrapper">
        <h2 className="color-primary">Masz pytania</h2>
        <h2>Nasz specjalista chętnie Ci pomoże.</h2>

        <address className="address">
          <p>Eleonora Frąckiewiczówna</p>
          <p className="font-weight color-primary">
            Specjalista ds. finansowania
          </p>
          <p>efrackiewoczowna@rtc.pl</p>
          <p>500 677 543</p>
        </address>
      </div>
    </div>
  );
}