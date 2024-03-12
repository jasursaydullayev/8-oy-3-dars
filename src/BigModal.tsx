function BigModal(data: { isp: string; location: object; ip: string }) {
  return (
    <div className="modal">
      <ul className="modal-list">
        <li>
          <p className="li-text">IP Address</p>
          <h2 className="modal-info">192.212.174.101</h2>
        </li>
        <div className="hr"></div>
        <li>
          <p className="li-text">Location</p>
          <h2 className="modal-info">Brooklyn, NY 10001</h2>
        </li>
        <div className="hr"></div>
        <li>
          <p className="li-text">Timezone</p>
          <h2 className="modal-info">UTC-05:00</h2>
        </li>
        <div className="hr"></div>
        <li>
          <p className="li-text">ISP</p>
          <h2 className="modal-info">SpaceX <br></br>Starlink</h2>
        </li>
      </ul>
    </div>
  );
}

export default BigModal;
