import { planHouse } from "@/lib/planner";
import { cn } from "@/lib/cn";
import {
  useGuideStore,
  type Climate,
  type HeatChoice,
  type PlanInput,
  type Power,
  type Toilet,
  type UseLevel,
  type WaterMode,
} from "@/lib/store";

const climates: { id: Climate; label: string }[] = [
  { id: "mild", label: "Mild" },
  { id: "mixed", label: "Mixed" },
  { id: "cold", label: "Cold" },
  { id: "severe", label: "Hard winter" },
];

const uses: { id: UseLevel; label: string }[] = [
  { id: "careful", label: "Careful" },
  { id: "typical", label: "Typical" },
  { id: "generous", label: "Generous" },
];

const waters: { id: WaterMode; label: string }[] = [
  { id: "tanks", label: "Onboard tanks" },
  { id: "hookup", label: "City hookup" },
];

const toilets: { id: Toilet; label: string }[] = [
  { id: "compost", label: "Composting" },
  { id: "cassette", label: "Cassette" },
  { id: "black", label: "Black tank" },
];

const powers: { id: Power; label: string }[] = [
  { id: "shore30", label: "30 A shore" },
  { id: "shore50", label: "50 A shore" },
  { id: "offgrid", label: "Off-grid" },
];

const heats: { id: HeatChoice; label: string }[] = [
  { id: "propane", label: "Propane vent" },
  { id: "diesel", label: "Diesel air" },
  { id: "minisplit", label: "Mini-split" },
  { id: "wood", label: "Wood stove" },
  { id: "electric", label: "Electric" },
];

function Segment<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { id: T; label: string }[];
  onChange: (id: T) => void;
}) {
  return (
    <fieldset className="border-t border-line py-4">
      <legend className="text-sm font-medium text-ink">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const on = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(option.id)}
              className={cn(
                "tap min-h-11 rounded-full px-3 text-sm transition-colors duration-200",
                on ? "bg-ink text-paper" : "bg-paper text-ink shadow-card",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Stepper({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-t border-line py-3">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-1">
        <button
          type="button"
          className="tap size-11 rounded-full bg-paper text-lg text-ink shadow-card"
          onClick={() => onChange(Math.max(min, value - 1))}
          aria-label={`Decrease ${label}`}
        >
          −
        </button>
        <span className="w-16 text-center font-display text-2xl tabular-nums text-ink">
          {value}
          <span className="ml-0.5 text-sm text-muted">{suffix}</span>
        </span>
        <button
          type="button"
          className="tap size-11 rounded-full bg-paper text-lg text-ink shadow-card"
          onClick={() => onChange(Math.min(max, value + 1))}
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

function Stat({ label, value, detail }: { label: string; value: string; detail?: string }) {
  const long = value.length > 28;
  return (
    <div className="border-t border-line py-4">
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">{label}</p>
      <p className={cn("mt-1 text-ink", long ? "text-lg leading-snug" : "font-display text-3xl tabular-nums")}>
        {value}
      </p>
      {detail ? <p className="mt-1 text-sm leading-relaxed text-muted">{detail}</p> : null}
    </div>
  );
}

export function PlannerView() {
  const plan = useGuideStore((state) => state.plan);
  const setPlan = useGuideStore((state) => state.setPlan);
  const result = planHouse(plan);
  const patch = (next: Partial<PlanInput>) => setPlan(next);

  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-5 pt-8 pb-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
      <section>
        <p className="text-sm font-semibold tracking-widest text-copper-ink uppercase">Planner</p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Size the house you are actually building.</h1>
        <p className="mt-4 text-base leading-relaxed text-ink">
          Not an engineered plan and not code approval. The figures are a teaching sketch.
          When a tank is past the sizes this page lists, it says so. It will not hand you a
          heater to buy.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted">
          It turns floor area, how you camp, and a climate button into questions you can
          take to an inspector, an electrician, and a real load calculation.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-2 lg:hidden">
          <div className="rounded-2xl bg-ink p-3 text-paper">
            <p className="text-xs tracking-widest text-paper/70 uppercase">Loss sketch</p>
            <p className="mt-1 font-display text-xl tabular-nums">{result.btu.toLocaleString()}</p>
          </div>
          <div className="rounded-2xl bg-card p-3 shadow-card">
            <p className="text-xs tracking-widest text-muted uppercase">Fresh</p>
            <p className="mt-1 font-display text-xl tabular-nums">
              {result.fresh.demandGal}
              <span className="text-sm text-muted"> gal</span>
            </p>
          </div>
          <div className="rounded-2xl bg-card p-3 shadow-card">
            <p className="text-xs tracking-widest text-muted uppercase">Power</p>
            <p className="mt-1 font-display text-xl">
              {plan.power === "shore30" ? "30A" : plan.power === "shore50" ? "50A" : "Off-grid"}
            </p>
          </div>
        </div>
        <div className="shadow-card mt-6 rounded-card bg-card px-4 pb-2">
          <Stepper
            label="Length"
            value={plan.lengthFt}
            min={10}
            max={40}
            suffix="ft"
            onChange={(lengthFt) => patch({ lengthFt })}
          />
          <Stepper
            label="Width"
            value={plan.widthFt}
            min={6}
            max={12}
            suffix="ft"
            onChange={(widthFt) => patch({ widthFt })}
          />
          <Stepper
            label="People"
            value={plan.people}
            min={1}
            max={6}
            suffix=""
            onChange={(people) => patch({ people })}
          />
          <div className="flex items-center justify-between gap-3 border-t border-line py-3">
            <span className="text-sm font-medium">Sleeping loft</span>
            <button
              type="button"
              aria-pressed={plan.loft}
              onClick={() => patch({ loft: !plan.loft })}
              className={cn(
                "tap min-h-11 rounded-full px-4 text-sm font-medium",
                plan.loft ? "bg-ink text-paper" : "bg-paper text-ink shadow-card",
              )}
            >
              {plan.loft ? "Yes" : "No"}
            </button>
          </div>
          {plan.water === "tanks" ? (
            <Stepper
              label="Days between fills"
              value={plan.days}
              min={1}
              max={7}
              suffix="d"
              onChange={(days) => patch({ days })}
            />
          ) : null}
          <Segment label="Climate" value={plan.climate} options={climates} onChange={(climate) => patch({ climate })} />
          <Segment label="Water" value={plan.water} options={waters} onChange={(water) => patch({ water })} />
          <Segment label="Daily use" value={plan.use} options={uses} onChange={(use) => patch({ use })} />
          <Segment label="Toilet" value={plan.toilet} options={toilets} onChange={(toilet) => patch({ toilet })} />
          <Segment label="Power" value={plan.power} options={powers} onChange={(power) => patch({ power })} />
          <Segment label="Heat" value={plan.heat} options={heats} onChange={(heat) => patch({ heat })} />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Careful use is about 8 gallons a person a day — navy showers. Typical is 14.
          Generous is 22, which is how tanks get heavy.
        </p>
      </section>

      <section className="lg:sticky lg:top-20">
        <div className="rounded-card bg-ink px-5 py-6 text-paper shadow-card">
          <p className="text-xs font-semibold tracking-widest text-paper/70 uppercase">Your sketch</p>
          <p className="mt-2 font-display text-4xl tabular-nums">
            {result.area}
            <span className="ml-2 text-2xl">sq ft</span>
          </p>
          <p className="mt-2 text-sm text-paper/80">
            {plan.lengthFt} by {plan.widthFt}
            {plan.loft ? ", with a loft" : ""}, {plan.people} {plan.people === 1 ? "person" : "people"}
          </p>
        </div>

        <div className="mt-4">
          <Stat
            label="Heat-loss sketch"
            value={`${result.btu.toLocaleString()} BTU/h`}
            detail="An educational sketch only. Do not buy a heater from it. The climate button is not your town’s design temperature, and the insulation and leakage assumptions are not your finished house. A recognized load calculation, then the equipment that matches that load, is the step this page cannot take."
          />
          <Stat label="Fresh water" value={result.fresh.label} />
          <Stat label="Grey" value={result.grey.label} />
          <Stat label="Toilet" value={result.black.label} />
          <Stat
            label={result.tanksOver ? "Calculated water weight" : "Listed-tank water weight"}
            value={`${result.waterWeightLb.toLocaleString()} lb`}
            detail={result.weightNote}
          />
          <Stat label="Hot water" value={result.hotWater} />
          <Stat label="Power" value={result.panel} detail={result.spaces} />
        </div>

        <div className="mt-2">
          <h2 className="font-display text-2xl text-ink">Circuits to leave room for</h2>
          <ul className="mt-2">
            {result.circuits.map((circuit) => (
              <li key={circuit.name} className="grid gap-1 border-t border-line py-3 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <span className="text-sm font-semibold">{circuit.name}</span>
                <span className="text-sm text-muted">{circuit.spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {result.notes.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {result.notes.map((note) => (
              <li
                key={note.text}
                className={cn(
                  "rounded-card px-4 py-3 text-sm leading-relaxed",
                  note.level === "stop" ? "bg-ink text-paper" : "bg-paper-deep text-ink",
                )}
              >
                {note.text}
              </li>
            ))}
          </ul>
        ) : null}

        {result.solar ? (
          <div className="mt-6 rounded-card bg-card p-5 shadow-card">
            <h2 className="font-display text-2xl text-ink">Off-grid example, not a design</h2>
            <dl className="mt-4 grid grid-cols-3 gap-3">
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Daily</dt>
                <dd className="mt-1 font-display text-2xl tabular-nums">{result.solar.dailyKwh} kWh</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Array</dt>
                <dd className="mt-1 font-display text-2xl tabular-nums">{result.solar.arrayW} W</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Battery</dt>
                <dd className="mt-1 font-display text-2xl tabular-nums">{result.solar.batteryAh} Ah</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {result.solar.inverter}, lithium at 12 V, two days of storage, about {result.solar.sun} sun
              hours. These are fixed classroom assumptions, including a 12 V fridge. They are not
              an off-grid system design. They leave out a workshop, an induction cooktop, shading,
              and a week of clouds.
            </p>
          </div>
        ) : null}

        <details className="mt-6 text-sm leading-relaxed text-muted">
          <summary className="font-medium text-copper-ink">How the heat-loss sketch is figured</summary>
          <p className="mt-2">{result.assumptions}</p>
        </details>
      </section>
    </main>
  );
}
