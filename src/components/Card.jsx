export default function Card({ name, imgSrc, desc }) {
  return (
    <div className="card w-96 shadow-xl m-4 rounded-xl border-4 border-specialColor bg-newColor">
      <figure className="px-32 pt-10">
        <img
          src={imgSrc}
          alt={imgSrc}
          className="rounded-xl bg-specialColor border-2 border-backgroundBlue"
        />
      </figure>
      <div className="card-body items-center text-center font-mono">
        <h2 className="card-title font-body">{name}</h2>
        <p className="text-lg font-paragraph tracking-wide">{desc}</p>
        <div className="card-actions">
          <button className="btn btn-primary outline bg-specialColor rounded-lg m-1 outline-offset-2-backgroundBlue">
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}
