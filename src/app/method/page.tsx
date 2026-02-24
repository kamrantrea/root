export const metadata = {
  title: "Method | Root Atlas",
};

export default function MethodPage() {
  return (
    <article className="max-w-2xl prose prose-stone">
      <h1>The Exegesis Method</h1>

      <h2>Exegesis vs. Eisegesis</h2>
      <p>
        <strong>Exegesis</strong> (from Greek ἐξήγησις, &quot;to lead out&quot;) means reading{" "}
        <em>out of</em> a text — drawing meaning from what the text actually says in its
        historical, linguistic, and literary context.
      </p>
      <p>
        <strong>Eisegesis</strong> (from Greek εἰσήγησις, &quot;to lead into&quot;) means reading{" "}
        <em>into</em> a text — importing assumptions, doctrines, or modern frameworks that
        were not present in the original context.
      </p>
      <p>
        Root Atlas is committed to rigorous exegesis. Every claim about a text is evaluated
        against the available evidence before theological or ideological conclusions are drawn.
      </p>

      <h2>Confidence Levels</h2>
      <p>
        All interpretive claims in Root Atlas are tagged with one of three confidence levels:
      </p>

      <div className="not-prose space-y-4 my-6">
        <div className="flex gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <span className="font-bold text-green-800 whitespace-nowrap">Certain</span>
          <p className="text-sm text-green-900">
            Established by overwhelming consensus and evidence. The claim is not seriously disputed
            among scholars. Example: Romans was written by Paul.
          </p>
        </div>
        <div className="flex gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <span className="font-bold text-yellow-800 whitespace-nowrap">Likely</span>
          <p className="text-sm text-yellow-900">
            Supported by strong evidence and majority scholarly opinion, but not universally agreed.
            Alternative views exist and are documented. Example: Matthew uses Mark as a source.
          </p>
        </div>
        <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <span className="font-bold text-red-800 whitespace-nowrap">Debated</span>
          <p className="text-sm text-red-900">
            Genuinely contested among qualified scholars. Multiple well-supported positions exist.
            The platform documents all major positions without privileging one. Example: Documentary
            Hypothesis (J, E, D, P sources).
          </p>
        </div>
      </div>

      <h2>Sources and Citations</h2>
      <p>
        Root Atlas draws on peer-reviewed scholarship, critical editions of primary texts,
        and established academic commentaries. Where possible, we cite primary sources directly
        and distinguish between the text itself and scholarly interpretation.
      </p>

      <h2>What This Platform Is Not</h2>
      <ul>
        <li>Not a devotional resource designed to support a particular faith tradition</li>
        <li>Not a polemical tool designed to undermine faith</li>
        <li>Not a substitute for reading primary texts in their original languages</li>
      </ul>
      <p>
        The goal is to help readers engage honestly with ancient texts on their own terms.
      </p>
    </article>
  );
}
