export default function StatsCard({
  title,
  value,
  color,
  icon,
}) {
  return (
    <div className="col-md-4">

      <div className={`card border-${color} shadow`}>

        <div className="card-body text-center">

          <div className={`text-${color} fs-1`}>
            {icon}
          </div>

          <h5 className="mt-2">
            {title}
          </h5>

          <h2 className={`text-${color}`}>
            {value}
          </h2>

        </div>

      </div>

    </div>
  );
}