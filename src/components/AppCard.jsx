const AppCard = ({ app }) => {
  const { title, status, icon, size, downloads, description } = app;
  const platforms = Object.keys(downloads);

  let statusText = status === "completed" ? "Completed" : "Incomplete";
  let statusClass = status === "completed" ? "completed" : "incomplete";

  return (
    <>
      <div className="col-lg-6 col-md-6">
        <div className="bg-dg app-card my-4 p-4 d-flex">
          <img src={icon} alt={title} />
          <div className="app-desc">
            <h3>{title}</h3>
            <span className={`status ${statusClass}`}>{statusText}</span>
            <p>{description}</p>
            <div className="d-flex justify-content-space-between card-bottom">
              <ul className="d-flex download-icons">
                {platforms.map((platform) => (
                  <li key={platform}>
                    <a href={downloads[platform].join(", ")} target="_blank" title={downloads[platform]}>
                      <i className={`bi bi-${platform}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="size"><small>Size: {size}</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCard;
