import Link from "next/link";

export default function CtaBanner({ title = "Beszéljük meg az álomesküvőtöket!", text = "Vegyétek fel velünk a kapcsolatot, és kezdjük el együtt megtervezni a nagy napot." }) {
  return (
    <section className="cta-banner">
      <div className="container animate-on-scroll">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href="/contact" className="btn btn-gold">Kapcsolatfelvétel</Link>
      </div>
    </section>
  );
}
